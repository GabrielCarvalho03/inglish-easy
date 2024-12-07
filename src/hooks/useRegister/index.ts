import { create } from "zustand";
import { usePaymentProps, user } from "./types";
import { api } from "@/services/axios";
import { toast } from "react-toastify";

export const useRegister = create<usePaymentProps>((set) => ({
  buttonLoading: false,
  setButtonLoading: (value: boolean) => set({ buttonLoading: value }),

  handlegetUSerByNumber: async (userNumber: String) => {
    const userNumberFormat = "55" + userNumber.replace(/[()\s-]/g, "");
    try {
      const user = await api.get(`/user/${userNumberFormat}`);
      return user.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  handleRegisterUser: async (userData: user, navigate) => {
    const { setButtonLoading, handlegetUSerByNumber } = useRegister.getState();

    setButtonLoading(true);
    try {
      const existUser = await handlegetUSerByNumber(userData.phone);
      if (existUser) {
        toast.error("Usuário já cadastrado");
        return;
      }
      await api.post("/user", {
        ...userData,
        phone: "55" + userData.phone.replace(/[()\s-]/g, ""),
      });
      navigate("/register/success");
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  },
}));

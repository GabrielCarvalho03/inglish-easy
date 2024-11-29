import { create } from "zustand";
import { usePaymentProps, user } from "./types";

export const usePayment = create<usePaymentProps>((set) => ({
  userInfo: {} as user,
  setUserInfo: (userInfo: user) => set({ userInfo }),

  handleRegisterUser: (user: user) => {
    return user;
  },
}));

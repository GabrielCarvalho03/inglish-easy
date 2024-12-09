import { create } from "zustand";
import { PaymentRequest } from "./types";
import { api } from "@/services/axios";
import { DateFormPayment } from "./paymentSchema";

export const usePayment = create<{
  checkoutData: PaymentRequest | null;
  setCheckoutData: (checkoutData: PaymentRequest) => void;
  handlePaymentUser: (checkoutData: PaymentRequest) => Promise<void>;
  buildCheckoutData: (data: DateFormPayment, selectedPrice: string | null) => PaymentRequest;
  handleGetUser: (phoneNumber: string) => Promise<any>; 
}>((set) => ({
  checkoutData: null,
  setCheckoutData: (checkoutData) => set({ checkoutData }),

  handlePaymentUser: async (checkoutData) => {
    try {
      const response = await api.post("/course/payment", checkoutData);
      const paymentUrl = response.data.response.init_point;

      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        console.error("Erro: URL de pagamento não encontrada.");
      }

      console.log("Pagamento realizado com sucesso:", response.data);
    } catch (error) {
      console.log("Erro na chamada do checkout", error);
    }
  },

  buildCheckoutData: (data, selectedPrice) => {
    const priceAsNumber = parseFloat(selectedPrice || "0");
    return {
      items: [{
        title: "Curso de Programação",
        description: "Curso completo de desenvolvimento web.",
        quantity: 1,
        unit_price: priceAsNumber,
      }],
      payer: {
        name: data.name,
        email: data.email,
        identification: { type: "CPF", number: "12345678909" },
      },
      back_urls: {
        success: `http://localhost:5173/register/success-payment?phone=${data.phone}&plan=${selectedPrice || ""}`,
        failure: "http://www.exemplo.com/failure",
        pending: "http://www.exemplo.com/pending",
      },
      notification_url: "http://www.exemplo.com/notification",
    };
  },

  handleGetUser: async (phoneNumber: string) => { 
    try {
      const response = await api.get(`/user/${phoneNumber}`); 
      return response.data; 
    } catch (error) {
      console.log("Erro na chamada da API para obter o usuário", error);
      throw error; 
    }
  },
}));

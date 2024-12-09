export type user = {
  name: string;
  email: string;
  phone: string;
  paymentMethod: boolean;
};

type Item = {
  title: string;
  description: string;
  quantity: number;
  unit_price: number;
};

type Identification = {
  type: string;
  number: string;
};

type Payer = {
  name: string;
  email: string;
  identification: Identification;
};

type BackUrls = {
  success: string;
  failure: string;
  pending: string;
};

export type PaymentRequest = {
  items: Item[];
  payer: Payer;
  back_urls: BackUrls;
  notification_url: string;
};


export interface usePaymentProps {
  checkoutData: any;
  handlePaymentUser: (checkoutData: PaymentRequest) => void;
  setCheckoutData: (checkoutData: any) => void;
}

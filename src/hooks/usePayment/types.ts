export type user = {
  name: string;
  email: string;
  phone: string;
  paymentMethod: boolean;
};

export interface usePaymentProps {
  userInfo: user;
  setUserInfo: (userInfo: user) => void;
  handleRegisterUser: (user: user) => void;
}

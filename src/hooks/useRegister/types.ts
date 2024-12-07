export type user = {
  name: string;
  email: string;
  phone: string;
  RegisterInList?: boolean;
};

export interface usePaymentProps {
  buttonLoading: boolean;
  setButtonLoading: (value: boolean) => void;
  handleRegisterUser: (user: user, navigate: any) => void;
  handlegetUSerByNumber: (userNumber: string) => Promise<user | null>;
}

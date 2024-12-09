import IlustrationPayment from "@/assets/img/ilustration-payment.png";
import backgoundPayment from "@/assets/img/backgound-payment.png";
import { BackgroundImage } from "@/components/background-image";
import { InputCustom } from "@/components/input";
import { Button } from "@/components/button";
import { Menu } from "@/components/menu";
import { ErroMessage } from "@/components/erroMessage";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateFormPayment, schemaPayment } from "@/hooks/usePayment/paymentSchema";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePayment } from "@/hooks/usePayment";


const mockUsers = [
  { phone: "(11) 99999-9999", name: "João Silva", plan: "Plano Básico", email: "joao@example.com" },
  { phone: "(11) 98888-8888", name: "Maria Oliveira", plan: "Plano Premium", email: "maria@example.com" },
];

const fetchUserByPhone = (phone: string) => mockUsers.find(user => user.phone === phone) || null;

export const Payment = () => { 
  const { setCheckoutData, buildCheckoutData, handlePaymentUser, handleGetUser } = usePayment();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<DateFormPayment>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaPayment),
  });

  const location = useLocation();
  const { selectedPrice } = location.state || { selectedPrice: "" };
  const phone = watch("phone");
  console.log(phone)
  const checkUserByPhone = async () => {
    if (phone) {
      setLoading(true);
      setTimeout(async () => { 
        try {
          const formattedPhone = phone.replace(/[^\d]/g, ""); 
          const userData = await handleGetUser(formattedPhone)
          console.log(userData,"formattedPhone")
          setValue("name", userData?.name || "");
          setValue("email", userData?.email || "");
          setUser(userData);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    }
  };
  

  useEffect(() => {
    if (phone) checkUserByPhone();
  }, [phone]);

  const handlePlanSelection = (value: string) => {
    setSelectedPlan(value);
    setValue("price", value);
  };

console.log(location.state)
  const onSubmit = async (data: DateFormPayment) => {
    console.log(data)
   
    try {
      const checkoutData = buildCheckoutData(data, selectedPrice);
      setCheckoutData(checkoutData);

      await handlePaymentUser(checkoutData);
      
     
    } catch (error) {
      console.error("Erro ao realizar pagamento", error);
    }
  };
  return (
    <div>
      <Menu title="Entrar">
        <div>
          <h1 className="text-xs sm:text-base">Entrar na comunidade do WhatsApp</h1>
        </div>
      </Menu>

      <section className="relative w-full md:flex items-center">
        <div className="w-full">
          <BackgroundImage bgImage={backgoundPayment}>
            <img
              src={IlustrationPayment}
              alt="Ilustração"
              style={{
                position: "absolute",
                width: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </BackgroundImage>
        </div>

        <section className="w-full mb-10 md:mt-20">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
            <div className="w-8/12 flex flex-col gap-5">
              {selectedPrice && (
                <Select onValueChange={handlePlanSelection} defaultValue={selectedPrice}>
                  <SelectTrigger className="font-extralight w-full border-gray-300 text-gray-400 h-10 font-wix">
                    <SelectValue placeholder="Selecione um preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.99"><h1>R$ 4,99</h1></SelectItem>
                    <SelectItem value="10.90"><h1>R$ 10,90</h1></SelectItem>
                    <SelectItem value="23.92"><h1>R$ 23,92</h1></SelectItem>
                  </SelectContent>
                </Select>
              )}
              <InputCustom
                {...register("phone")}
                mask="(99) 9999999-9999"
                className="rounded-lg"
                placeholder="Telefone (com DDD)"
                onBlur={checkUserByPhone}
              />
              <ErroMessage erro={errors.phone?.message ?? ""} />

              <InputCustom {...register("name")} className="rounded-lg" placeholder="Nome" />
              <ErroMessage erro={errors.name?.message ?? ""} />

              <InputCustom {...register("email")} className="rounded-lg" type="email" placeholder="Email" />
              <ErroMessage erro={errors.email?.message ?? ""} />

              {user && (
                <div>
                  <h2>Bem-vindo de volta, {user.name}!</h2>
                  <p>Plano atual: {user.plan}</p>
                </div>
              )}
            </div>

            <div className="w-8/12 xl:w-3/12 flex flex-col gap-5 mt-10">
              <Button
                title={loading ? "Processando..." : "Ir para pagamento"}
                type="submit"
                className="shadow-Button h-10 md:h-10 hover:scale-105 transition-transform duration-100 text-color-secondary"
              />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

import IlustrationPayment from "@/assets/img/ilustration-payment.png";
import backgoundPayment from "@/assets/img/backgound-payment.png";
import { BackgroundImage } from "@/components/background-image";
import { InputCustom } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreditCardIcon from "@/assets/icons/credit-card-icon";
import PixIcon from "@/assets/icons/pix-icon";
import { Button } from "@/components/button";
import { Menu } from "@/components/menu";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DateFormPayment,
  schemaPayment,
} from "@/hooks/usePayment/paymentSchema";
import { ErroMessage } from "@/components/erroMessage";

export const Payment = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DateFormPayment>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaPayment),
  });

  const AuthorizePayment = async (data: DateFormPayment) => {
    console.log(data);
  };

  return (
    <div>
      <Menu title="Entrar">
        <div>
          <h1 className=" text-xs sm:text-base">
            Entrar na comunidade do whatsaap
          </h1>
        </div>
      </Menu>

      <section className="  relative w-full md:flex  items-center ">
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
          <form
            onSubmit={handleSubmit(AuthorizePayment)}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-8/12 flex flex-col gap-5 ">
              <InputCustom
                {...register("name")}
                className="rounded-lg"
                placeholder="Nome"
              />
              <ErroMessage erro={errors.name?.message ?? ""} />

              <InputCustom
                {...register("email")}
                className="rounded-lg"
                type="email"
                placeholder="Email"
              />

              <ErroMessage erro={errors.email?.message ?? ""} />

              <InputCustom
                mask="(99) 99999-9999"
                {...register("phone")}
                className="rounded-lg"
                placeholder="Telefone(com DDD)"
              />

              <ErroMessage erro={errors.phone?.message ?? ""} />

              <Select
                defaultValue="Cartão de crédito"
                onValueChange={(value) => setValue("paymentMethod", value)}
              >
                <SelectTrigger className=" font-extralight w-full border-gray-300 text-gray-400 h-10 font-wix ">
                  <SelectValue placeholder="Selecione uma forma de pagamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cartão de crédito">
                    <div className="flex gap-2 justify-center items-center">
                      <CreditCardIcon />
                      <h1>Cartão de crédito</h1>
                    </div>
                  </SelectItem>
                  <SelectItem value="PIX">
                    <div className="flex gap-2 justify-center items-center">
                      <PixIcon />
                      <h1>PIX</h1>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-8/12  xl:w-3/12 flex flex-col gap-5 mt-10">
              <Button
                title="Ir para pagamento"
                type="submit"
                className="shadow-Button h-10  md:h-10 hover:scale-105 transition-transform duration-100 text-color-secondary"
              />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

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

export const Payment = () => {
  return (
    <div>
      <section className="py-10 w-full flex justify-center">
        <div className=" w-11/12  md:w-9/12  xl:w-5/12 h-10 shadow-menu rounded-md px-10 py-6 flex justify-between items-center">
          <div>
            <h1 className=" text-xs sm:text-base">
              Entrar na comunidade do whatsaap
            </h1>
          </div>

          <div className="w-4/12 flex justify-end ">
            <Button
              className="bg-gradient-to-r from-color-primary to-color-secondary text-white"
              title="Entrar"
            />
          </div>
        </div>
      </section>

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

        <form className="w-full mb-10 md:mt-20">
          <section className="flex flex-col justify-center items-center">
            <div className="w-8/12 flex flex-col gap-5 ">
              <InputCustom className="rounded-lg" placeholder="Nome" />
              <InputCustom
                className="rounded-lg"
                type="email"
                placeholder="Email"
              />
              <InputCustom
                className="rounded-lg"
                placeholder="Telefone(com DDD)"
              />
              <Select>
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
                type="button"
                className="shadow-Button h-12 md:h-10 hover:scale-105 transition-transform duration-100 text-color-secondary"
              />
            </div>
          </section>
        </form>
      </section>
    </div>
  );
};

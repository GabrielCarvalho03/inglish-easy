import backgoundPayment from "@/assets/img/backgound-payment.png";
import { BackgroundImage } from "@/components/background-image";
import { InputCustom } from "@/components/input";
import { Button } from "@/components/button";
import { Menu } from "@/components/menu";
import { ErroMessage } from "@/components/erroMessage";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DateFormRegister,
  schemaRegister,
} from "@/hooks/useRegister/RegisterSchema";
import { useRegister } from "@/hooks/useRegister";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DateFormRegister>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaRegister),
  });
  const navigate = useNavigate();
  const { handleRegisterUser, buttonLoading } = useRegister();

  return (
    <div>
      <Menu title="Entrar">
        <div>
          <h1 className="text-xs sm:text-base pl-2">
            Entrar na comunidade do WhatsApp
          </h1>
        </div>
      </Menu>

      <section className="relative w-full md:flex items-center">
        <div className="w-full">
          <BackgroundImage bgImage={backgoundPayment}>
            <div className="w-full flex justify-center items-center  lg:-ml-28 pt-32"></div>
            <section className="w-12/12 md:w-9/12 h-full   flex flex-col justify-center items-center lg:justify-start lg:items-start  lg:mt-24 -mt-28 md:-mt-10 ml-0  md:ml-0 lg:ml-16 gap-5">
              <h1 className="text-white text-2xl md:text-3xl font-bold w-8/12  text-center lg:text-left  lg:w-9/12  ">
                Ficamos felizes em tê-lo em nossa lista de espera .
              </h1>
              <h1 className="text-gray-200 w-8/12 text-center lg:text-left  md:w-9/12 ">
                todos os membros cadastrados nessa lista terão um bônus no
                primeiro mes .
              </h1>
            </section>
          </BackgroundImage>
        </div>

        <section className="w-full mb-10 -mt-24 sm:mt-10 md:mt-20">
          <form
            onSubmit={handleSubmit((data) =>
              handleRegisterUser(data, navigate)
            )}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-8/12 flex flex-col gap-5">
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
                placeholder="Telefone (com DDD)"
              />
              <ErroMessage erro={errors.phone?.message ?? ""} />
            </div>

            <div className="w-8/12 xl:w-3/12 flex flex-col gap-5 mt-10">
              <Button
                loading={buttonLoading}
                title="Entrar na lista"
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

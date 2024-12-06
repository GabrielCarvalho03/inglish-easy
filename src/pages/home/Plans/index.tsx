import { BackgroundImageHome } from "@/components/background-image-home";
import { Button } from "@/components/button";
import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import BackgroundPayment from "@/assets/img/backgound-payment.png";

import ManPlanIcon from "@/assets/img/man-plan.png";

export const Plans = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [selectedPrice, setSelectedPrice] = useState<string | number>("");

  const navigate = useNavigate();

  const handlePlanSelect = (price: string | number) => {
    setSelectedPrice(price);
    navigate("/payment", { state: { selectedPrice: price } });
  };

  return (
    <main className="w-full flex flex-col lg:flex-row justify-between lg:pr-10 xl:pr-48">
      <BackgroundImageHome bgImage={BackgroundPayment}>
        <div className="w-full flex ml-10 0">
          <img
            width={window.innerWidth <= 495 ? "70%" : "100%"}
            className="absolute transform translate-y-80 md:translate-y-48 -translate-x-7 "
            src={ManPlanIcon}
            alt=""
          />
        </div>
      </BackgroundImageHome>

      <section className="md:-ml-28 mb-10 mt-10 md:mb-0 flex justify-center items-center ">

        <div className="w-[281.35px] h-[339.05px] z-30 -ml-52 shadow-menu rounded-md bg-white flex flex-col items-center relative ">
          <h1 className="text-color-primary font-extrabold text-2xl">
            R$ 4,99<span className="font-light text-sm">/Dia</span>
          </h1>
          <span className="text-color-secondary font-extrabold text-3xl">
            Trial Plan
          </span>

          <div className="mt-10 flex flex-col gap-3">
            <p className="text-color-primary text-center">Aulas personalizadas</p>
            <p className="text-color-primary text-center">Cronograma criado para você</p>
            <p className="text-color-primary text-center">Estude de onde quiser</p>
            <p className="text-color-primary text-center">Suporte online para dúvidas</p>
            <p className="text-color-primary text-center">Válido por 24 horas.</p>
          </div>

          <div className="absolute bottom-4 w-8/12">
            <Button
              onClick={() => handlePlanSelect("4.99")}
              title="Assinar"
              className="bg-gradient-to-r from-color-primary to-color-secondary text-white"
            />
          </div>
        </div>
      </section>

      <section className="md:-ml-28 mb-10 mt-10 md:mb-0 flex justify-center items-center ">
        <div className="w-[281.35px] h-[339.05px] z-30 -ml-52 shadow-menu rounded-md bg-white flex flex-col items-center relative ">
          <h1 className="text-color-primary font-extrabold text-2xl">
            R$ 10,90<span className="font-light text-sm">/Sem</span>
          </h1>
          <span className="text-color-secondary font-extrabold text-3xl">
            Weekly Plan
          </span>

          <div className="mt-10 flex flex-col gap-3">
            <p className="text-color-primary text-center">Aulas personalizadas</p>
            <p className="text-color-primary text-center">Cronograma criado para você</p>
            <p className="text-color-primary text-center">Estude de onde quiser</p>
            <p className="text-color-primary text-center">Suporte online para dúvidas</p>
            <p className="text-color-primary text-center">Válido por 7 dias.</p>
          </div>

          <div className="absolute bottom-4 w-8/12">
            <Button
              onClick={() => handlePlanSelect("10.90")}
              title="Assinar"
              className="bg-gradient-to-r from-color-primary to-color-secondary text-white"
            />
          </div>
        </div>
      </section>

      <section className="md:-ml-28 mb-10 mt-10 md:mb-0 flex justify-center items-center">
        <div className="w-[281.35px] h-[339.05px] z-30 -ml-52 shadow-menu rounded-md bg-white flex flex-col items-center relative">
          <span className="absolute top-0 left-0 bg-red-500 text-white font-bold text-sm py-1 px-3 rounded-tr-md">
            20% OFF
          </span>
          <h2 className="text-color-primary font-extrabold text-2xl line-through">
            R$ 29,90
          </h2>
          <h3 className="text-color-secondary font-extrabold text-2xl">
            R$ 23,92<span className="font-light text-sm">/Mês</span>
          </h3>
          <span className="text-color-secondary font-extrabold text-3xl">
            Monthly Plan
          </span>

          <div className="mt-10 flex flex-col gap-3">
            <p className="text-color-primary text-center">Aulas personalizadas</p>
            <p className="text-color-primary text-center">Cronograma criado para você</p>
            <p className="text-color-primary text-center">Estude de onde quiser</p>
            <p className="text-color-primary text-center">Suporte online para dúvidas</p>
            <p className="text-color-primary text-center">Válido por 30 dias.</p>
          </div>

          <div className="absolute bottom-4 w-8/12">
            <Button
              onClick={() => handlePlanSelect("23.92")}
              title="Assinar"
              className="bg-gradient-to-r from-color-primary to-color-secondary text-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
});
Plans.displayName = "Plans";

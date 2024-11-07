import { BackgroundImageHome } from "@/components/background-image-home";
import BackgroundPayment from "@/assets/img/backgound-payment.png";
import ManPlanIcon from "@/assets/img/man-plan.png";
import { Button } from "@/components/button";

export const Plans = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-between lg:pr-10 xl:pr-48">
      <BackgroundImageHome bgImage={BackgroundPayment}>
        <div className="w-full  flex  ml-10 0">
          <img
          width={window.innerWidth <= 495 ?'70%' :'100%'}
          className=" absolute transform translate-y-80  md:translate-y-48 -translate-x-7 "
          src={ManPlanIcon} alt="" />
        </div>
      </BackgroundImageHome>
  

      <section className="md:-ml-28  mb-10 mt-10 md:mb-0 flex justify-center  items-center ">
          <div className="w-[236px] h-[360px] shadow-menu rounded-md bg-white mt-28">
          </div>

          <div className="w-[281.35px] h-[339.05px]  z-30  -ml-52 shadow-menu rounded-md bg-white flex flex-col items-center relative ">
              <h1 className="text-color-primary font-extrabold text-2xl">R$ 29,90<span className="font-light text-sm">/Mês</span></h1>
              <span className="text-color-secondary font-extrabold text-3xl">start</span>

              <div className="mt-10 flex flex-col gap-3">
              <p className="text-color-primary text-center">Aulas personalizadas</p>
              <p className="text-color-primary text-center">Cronograma criado para você</p>
              <p className="text-color-primary text-center">Estude de onde quiser</p>
              <p className="text-color-primary text-center">suporte online para dúvidas</p> 
              </div>

              <div className="absolute bottom-4 w-8/12">
                <Button
                title="Assinar"
                className="bg-gradient-to-r from-color-primary  to-color-secondary  text-white"
                />
              </div>
          </div>
        </section>

    </main>
  );
};

import { Button } from "@/components/button";
import Lottie from "react-lottie";
import doneAnimation from "../../../assets/lotties/done-animation.json";

export const RegisterSuccess = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: doneAnimation,
  };

  return (
    <div className="w-full h-screen flex flex-col mt-5 justify-center items-center gap-2 ">
      <h1 className="font-semibold text-2xl text-center">
        Registro efetuado com sucesso!
      </h1>

      <Lottie options={defaultOptions} width={300} height={400} />
      <h1 className="font-light text-1xl text-center">
        Agora que você está cadastrado , fique po dentro das novidades no nosso
        grupo do whatsapp{" "}
      </h1>
      <div className=" w-10/12 lg:w-2/12 mt-10 mb-10">
        <Button
          onClick={() =>
            window.open(
              "https://chat.whatsapp.com/CCpvV3UdRVGCB9w7WArvwB",
              "_blank"
            )
          }
          title="Acessar comunidade"
          type="button"
          className="shadow-Button h-10 md:h-10 hover:scale-105 transition-transform duration-100 text-color-secondary"
        />
      </div>
    </div>
  );
};

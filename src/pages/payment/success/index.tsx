import Lottie from "react-lottie";
import { useLocation } from "react-router-dom";
import doneAnimation from "../../../assets/lotties/done-animation.json";
import { Button } from "@/components/button";

export const RegisterSuccessPayment = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const phone = params.get("phone");
    const plan = params.get("plan");

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: doneAnimation,
    };

    return (
        <div className="w-full h-screen flex flex-col mt-5 justify-center items-center gap-2 ">
            <h1 className="font-semibold text-2xl text-center">
                Compra do plano efetuada com sucesso!
            </h1>

            <Lottie options={defaultOptions} width={300} height={400} />
            <h1 className="font-light text-1xl text-center">
                Obrigado pela compra, fique atento! Breve nossa IA mandará mensagem no seu número do WhatsApp.
            </h1>


            {phone && plan && (
                <div>
                    <p>Telefone: {phone}</p>
                    <p>Plano Preço: {plan}</p>
                </div>
            )}

            <div className="w-10/12 lg:w-2/12 mt-10 mb-10">
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

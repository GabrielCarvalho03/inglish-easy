import BackgroundHero from "@/assets/img/Bakcgroud-hero.png";
import IntelicesseIcon from "@/assets/icons/intelicensse-icon";
import BrainIA from "@/assets/icons/brain-ia";
import { Button } from "@/components/button";
import { Menu } from "@/components/menu";
import { BackgroundImageHome } from "@/components/background-image-home";
import { useNavigate } from "react-router-dom";


type HeroProps = {
  more: boolean;


};

export const Hero: React.FC<HeroProps> = ({ more }) => {

  const navigate = useNavigate();
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full absolute top-2 z-50   ">
        <Menu className="px-2" title="Entrar">
          <div className="w-full flex gap-4 md:gap-10">
            <h1 className="text-xs md:text-base font-medium cursor-pointer"
            >
              È possivel ?
            </h1>
            <h1 className=" text-xs   md:text-base font-medium cursor-pointer"

            >
              Planos
            </h1>
            <h1 className="text-xs   md:text-base font-medium cursor-pointer">
              por que IA ?
            </h1>
            <h1 className="text-xs md:text-base font-medium cursor-pointer"
              onClick={() => navigate("/more")}>
              Demostração
            </h1>
          </div>
        </Menu>
      </div>

      {
        more === false ?
          <section className="w-full flex flex-col md:flex-row items-center relative overflow-hidden">
            <BackgroundImageHome bgImage={BackgroundHero}>
              <div className="w-full flex justify-center items-center  lg:-ml-28 mt-14">
                <h1 className="font-alexandria text-3xl text-white">Language AI</h1>
              </div>
              <section className="w-8/12 md:w-9/12 h-full   flex flex-col justify-center items-center lg:justify-start lg:items-start  lg:mt-24 -mt-10 ml-32  md:ml-0 lg:ml-16 gap-5">
                <h1 className="text-white md:text-2xl ">
                  Bem vindo ao Language AI {" "}
                </h1>
                <h1 className="text-white text-2xl md:text-3xl font-bold w-8/12  text-center lg:text-left  lg:w-9/12  ">
                  Ensinando linguagem atraves da inteligencia artifical{" "}
                </h1>
                <h1 className="text-white w-8/12 text-center lg:text-left  md:w-9/12 ">
                  Aprenda uma nova língua com inteligência artificial:
                  personalizada, rápida e no seu ritmo!{" "}
                </h1>

                <div className="w-3/12">
                  <Button
                    className="bg-white text-color-secondary "
                    title="Saiba mais"
                  />
                </div>
              </section>
            </BackgroundImageHome>

            <div className="md:-ml-28  mb-10 md:mb-0 flex items-center ">
              <div className="w-[236px] z-30 h-[360px] shadow-menu rounded-md bg-white flex flex-col justify-center items-center gap-5">
                <BrainIA />
                <h1 className="text-2xl font-semibold">Inglês com IA ?</h1>
                <h1 className="text-gray-500 font-semibold text-center">
                  Alcance fluência de forma prática e inteligente!
                </h1>
              </div>
              <div className="w-[176px] h-[224px]  z-10 -ml-5 shadow-menu rounded-3xl bg-color-blackLinght flex justify-center items-center ">
                <IntelicesseIcon />
              </div>
            </div>
          </section> : null
      }

    </main>
  );
};


import BulbIcon from "@/assets/icons/bulb";
import ImersionIcon from "@/assets/icons/imersion-icon";
import { BlockInfo } from "@/components/BlockInfo";
import { ColorBar } from "@/components/color-bar";

export const WhyIA = () => {
  return (
    <main className="w-full px-10  flex flex-col lg:flex-row gap-16 pt-5 items-center lg:justify-around ">
      <div className="w-11/12 md:w-[467px]">
        <ColorBar color="primary" />
        <h1 className="text-2xl font-extrabold">
          Por que aprender com lingagem com intelingencia artifical ?
        </h1>
        <p className="mt-2 lg:mt-0">
          Aprender com IA acelera o progresso, adaptando o conteúdo ao ritmo e
          necessidades de cada aluno, tornando o aprendizado mais eficiente e
          motivador.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-14">
        <BlockInfo
          color="primary"
          icon={<BulbIcon />}
          title="Solução criativa"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <BlockInfo
          color="secondary"
          icon={<ImersionIcon />}
          title="Imersão "
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </main>
  );
};

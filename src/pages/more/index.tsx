import BackgroundHero from "@/assets/img/Bakcgroud-hero.png";
import { Hero } from "../home/hero";
import { BackgroundImageHome } from "@/components/background-image-home";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

import AudioSimulation from "./simulator";
import audioAI from "@/assets/audios/audioai2.mp3";

export const More = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    const slideInVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const slideInFromBottom = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <>
            <Hero more={true} />
            <motion.section
                className="w-full flex flex-col md:flex-row items-center relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={slideInVariant}
            >
                <BackgroundImageHome bgImage={BackgroundHero}>
                    <motion.div
                        className="w-full flex justify-center items-center lg:-ml-28 mt-14"
                        variants={slideInFromBottom}
                    >
                        <h1 className="font-alexandria text-3xl text-white">Demonstração da Nossa AI</h1>
                    </motion.div>
                    <motion.section
                        className="w-8/12 md:w-9/12 h-full flex flex-col justify-center items-center lg:justify-start lg:items-start lg:mt-24 -mt-10 ml-32 md:ml-0 lg:ml-16 gap-5"
                        variants={slideInFromBottom}
                    >
                        <h1 className="text-white md:text-2xl">
                            Descubra o Futuro do Aprendizado de Inglês com IA
                        </h1>
                        <h1 className="text-white text-2xl md:text-3xl font-bold w-8/12 text-center lg:text-left lg:w-9/12">
                            Aprenda inglês de forma intuitiva e personalizada com a nossa inteligência artificial
                        </h1>
                        <h1 className="text-white w-8/12 text-center lg:text-left md:w-9/12">
                            Imagine aprender inglês de uma maneira completamente nova: basta enviar um áudio para a nossa IA através do WhatsApp e ela vai entender sua mensagem, respondendo de forma personalizada e interativa. Seja para praticar pronúncia, expandir vocabulário ou melhorar sua compreensão, nossa IA está pronta para ajudar no seu ritmo e no seu tempo. É a forma mais moderna e eficiente de aprender um novo idioma, com a conveniência da comunicação por voz.
                        </h1>
                    </motion.section>
                </BackgroundImageHome>
                <div className="md:-ml-50 mb-10 md:mb-0 flex items-center ">
                    <AudioSimulation audioFile={audioAI} />
                </div>
            </motion.section>
        </>
    );
};

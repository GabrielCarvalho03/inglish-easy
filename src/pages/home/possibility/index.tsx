import { BackgroundImageHome } from "@/components/background-image-home"
import invertideBackground from "@/assets/img/invertide-background.png";
import Analitic from "@/assets/img/analitic.png";
import { ColorBar } from "@/components/color-bar";


export const Possibility = () => {

    return(
        <main className="w-full flex flex-col-reverse lg:flex-row justify-between  lg:pl-40  ">
      
    
  
        <section className="lg:-ml-28  mb-10  md:mb-0 flex justify-center  items-center ml-10 mt-10  ">
            <div className="flex flex-col ">
                <ColorBar
                color="primary"
                />
                <h1 className="font-extrabold text-2xl ">È possivel aprender com uma IA ?</h1>
                <div className=" ">
                <p className="text-gray-400 w-8/12">Com certeza! Inteligência Artificial ajusta-se ao seu ritmo, identifica suas necessidades e torna o aprendizado mais eficaz e envolvente.</p>

                </div>
            </div>
  
          </section>

  <div className="w-full flex justify-end ">
    
  <BackgroundImageHome bgImage={invertideBackground}>
          <div className="w-full  flex ">
            <img
            width={window.innerWidth <= 495 ?'98%' :'90%'}
            className=" absolute transform translate-y-96  translate-x-0 md:translate-y-60 md:-translate-x-16 "
            src={Analitic} alt="" />
          </div>
        </BackgroundImageHome>
  </div>
      </main>
    )
}
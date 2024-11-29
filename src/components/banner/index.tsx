import BannerImage from "@/assets/img/banner-image.png";

export const Banner = () => {
  return (
    <main className="w-full">
      <section
        style={{
          width: "100%",
          height: 400,
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full flex justify-center gap-10 px-10">
          <h1 className="text-white font-extrabold text-sm lg:text-3xl ">
            Entre no nosso grupo de membros no Whatsapp
          </h1>
          <button className="bg-white h-6 md:h-10 rounded-md w-6/12 md:w-2/12 text-sm md:text-base text-color-secondary font-extrabold ">
            Entrar
          </button>
        </div>
      </section>
    </main>
  );
};

type BackgroundImageProps = {
  bgImage: string;
  children?: React.ReactNode;
};

export const BackgroundImage = ({
  bgImage,
  children,
}: BackgroundImageProps) => {
  const backgroundImage = new Image();
  backgroundImage.src = bgImage;

  return (
    <div
      style={{
        width: window.innerWidth >= 1075 ? backgroundImage.width : "100%",
        height: backgroundImage.height,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat", // Evita a repetição da imagem
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

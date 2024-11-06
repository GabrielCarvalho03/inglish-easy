import { useEffect, useState } from "react";

type BackgroundImageProps = {
  bgImage: string;
  children?: React.ReactNode;
};

export const BackgroundImage = ({
  bgImage,
  children,
}: BackgroundImageProps) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = bgImage;
    backgroundImage.onload = () => {
      setImageDimensions({
        width: backgroundImage.width,
        height: backgroundImage.height,
      });
    };
  }, [bgImage]);
  return (
    <div
      style={{
        width: window.innerWidth >= 1075 ? imageDimensions.width : "100%",
        height: imageDimensions.height,
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

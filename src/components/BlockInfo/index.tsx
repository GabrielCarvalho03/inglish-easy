import { ColorBar } from "../color-bar";

type BlockInfoProps = {
  title: string;
  text: string;
  color: "primary" | "secondary";
  icon: JSX.Element;
};

export const BlockInfo = ({
  title,
  text,
  color,
  icon,
}: BlockInfoProps): JSX.Element => {
  return (
    <main className="w-[196px]">
      <div
        className={`w-[54px] h-[54px] flex justify-center items-center ${
          color === "primary" ? "bg-color-primary" : "bg-color-secondary"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <div className="py-2">
        <ColorBar color={color} />
      </div>
      <p className="text-sm text-gray-400 ">{text}</p>
    </main>
  );
};

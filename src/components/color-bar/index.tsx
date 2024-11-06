type ColorBarProps = {
  color: "primary" | "secondary";
};

export const ColorBar = ({ color }: ColorBarProps) => {
  return (
    <div
      className={`w-[50px] h-[5px] ${
        color == "primary" ? "bg-color-primary" : "bg-color-secondary"
      }`}
    ></div>
  );
};

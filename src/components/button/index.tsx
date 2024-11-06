import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
};

export const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={` w-full h-6 md:h-10  rounded-lg flex justify-center items-center ${className}`}
    >
      <h1>{title}</h1>
    </button>
  );
};

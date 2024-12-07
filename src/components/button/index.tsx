import { ButtonHTMLAttributes } from "react";
import { Loader } from "../loader";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
  loading?: boolean;
};

export const Button = ({
  title,
  className,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={` w-full min-h-6 md:h-10  rounded-lg flex justify-center items-center ${className}`}
    >
      {loading ? <Loader /> : <h1>{title}</h1>}
    </button>
  );
};

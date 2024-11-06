import { forwardRef, InputHTMLAttributes } from "react";

type InputCustomProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};

export const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className=" w-full ">
        <input
          ref={ref}
          {...props}
          className={`w-full border-0.5 border-gray-300 rounded-md p-2 outline-none ${className}`}
        />
      </div>
    );
  }
);

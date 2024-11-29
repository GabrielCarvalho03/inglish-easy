import React, { forwardRef } from "react";
import InputMask from "react-input-mask";

interface InputCustomProps {
  label?: string;
  mask?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
}

export const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      label,
      mask,
      value,
      onChange,
      className,
      placeholder,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <>
        {!mask && (
          <div className="w-full">
            <input
              ref={ref}
              {...props}
              className={`w-full border-0.5 border-gray-300 rounded-md p-2 outline-none ${className}`}
              placeholder={placeholder}
              type={type}
            />
          </div>
        )}

        {mask && (
          <div className="w-full">
            <InputMask mask={mask} value={value} onChange={onChange} {...props}>
              {
                //@ts-ignore
                (inputMask: any) => {
                  return (
                    <input
                      ref={ref}
                      {...inputMask}
                      className={`w-full border-0.5 border-gray-300 rounded-md p-2 outline-none ${className}`}
                      placeholder={placeholder}
                      type={type}
                    />
                  );
                }
              }
            </InputMask>
          </div>
        )}
      </>
    );
  }
);

export default InputCustom;

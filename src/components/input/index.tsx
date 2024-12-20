import React, { forwardRef } from "react";
import InputMask from "react-input-mask";

interface InputCustomProps {
  label?: string;
  mask?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
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
      onBlur,
      className,
      placeholder,
      type = "text",
      ...props
    },
    ref
  ) => {
    console.log("InputCustom value:", value);
    return (
      <>
        {!mask ? (
          <div className="w-full">
            <input
              ref={ref}
              {...props}
              className={`w-full border-0.5 border-gray-300 rounded-md p-2 outline-none ${className}`}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        ) : (
          <div className="w-full">
            <InputMask
              mask={mask}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
            >
              {
                //@ts-ignore
                (inputMaskProps) => (
                  <input
                    ref={ref}
                    {...inputMaskProps}
                    className={`w-full border-0.5 border-gray-300 rounded-md p-2 outline-none ${className}`}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )
              }
            </InputMask>
          </div>
        )}
      </>
    );
  }
);

export default InputCustom;

import { forwardRef } from "react";

interface IProps {
  label: string;
  type: string;
  errorMsg: string | undefined;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ label, type, errorMsg, ...rest }, ref) => {
    return (
      <div className=" w-full  mb-3 flex justify-center px-2">
        <label className="w-20 inline-block text-sky-500 font-semibold size-8 capitalize text-nowrap mr-3">
          {label}
        </label>
        <div className="grow  ">
          <input
            className="w-full h-10 bg-gray-100 outline-none focus:bg-white transition-all duration-300 shadow-md focus:shadow-sky-300"
            type={type}
            ref={ref}
            {...rest}
          />
          {errorMsg ? <p className="text-red-500 mt-1">{errorMsg}</p> : ""}
        </div>
      </div>
    );
  }
);

export default Input;

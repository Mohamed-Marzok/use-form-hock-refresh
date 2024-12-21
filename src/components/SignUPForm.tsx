import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUPSchema } from "../validation";
interface IFormInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}
interface IInput {
  type: string;
  lable: string;
  name: "firstName" | "lastName" | "phone" | "email" | "address";
}
const inputs: IInput[] = [
  {
    lable: "first Name",
    name: "firstName",
    type: "text",
  },
  {
    lable: "last Name",
    name: "lastName",
    type: "text",
  },
  {
    lable: "email",
    name: "email",
    type: "email",
  },
  {
    lable: "phone",
    name: "phone",
    type: "phone",
  },
  {
    lable: "address",
    name: "address",
    type: "text",
  },
];

export default function SignUPForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signUPSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      className=" container mx-auto flex flex-col w-full  xl:w-1/2 mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputs.map((input) => (
        <Input
          key={input.name}
          label={input.lable}
          type={input.type}
          errorMsg={errors[input.name]?.message}
          {...register(input.name)}
        />
      ))}
      <input
        className="bg-sky-950 text-white px-4 py-2 active:bg-sky-500 cursor-pointer self-end me-2"
        type="submit"
      />
    </form>
  );
}

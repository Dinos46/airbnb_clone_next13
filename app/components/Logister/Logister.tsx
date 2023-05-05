"use client";
import { FormValues } from "@/app/Models/UserModel";
import { registerUser } from "@/app/services/userService";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import Input from "../Input/Input";
import SocialButton from "./SocialButton";
import { BeatLoader } from "react-spinners";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  formVals: FormValues;
  type: "login" | "register";
};

const Logister = ({ formVals, type }: Props) => {
  const [subTitle] = useState(
    type === "login" ? "log in with your acount" : "create an acount"
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: formVals,
  });

  const submitHandler: SubmitHandler<FormValues> = async (formInput) => {
    setIsLoading(true);
    try {
      if (type === "register") {
        await registerUser(formInput);
        router.push("/");
        return;
      }

      await signIn("credentials", {
        ...formInput,
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="flex flex-col container items-center justify-center">
      <BiUserCircle size={130} className="text-rose-400 mb-4 mt-2" />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col  w-[75%] md:w-[50%] xl:w-[35%] mr-4  p-4 bg-gray-50 shadow"
      >
        <h2 className="mt-2 self-center capitalize font-bold text-xl">
          welcome to airdnd
        </h2>
        <h3 className="mb-4 self-center capitalize text-gray-500/80 text-[0.9rem]">
          {subTitle}
        </h3>

        {type === "register" && (
          <Input
            id="username"
            label="username"
            register={register}
            required
            errors={errors}
          />
        )}
        <Input
          id="email"
          label="email"
          register={register}
          required
          errors={errors}
        />
        <Input
          id="password"
          label="password"
          register={register}
          required
          errors={errors}
        />

        <Button disabled={isLoading} title="continue" className="form-submit" />
        <div className="flex items-center justify-between my-4">
          <div className="bg-slate-200/50 h-[2px] w-[44%]"></div>
          <span className="text-base text-gray-400">or</span>
          <div className=" bg-slate-200/50 h-[2px] w-[47%]"></div>
        </div>
        <SocialButton isLoading={isLoading} />
        <BeatLoader
          className=" self-center mt-4"
          color={"#f43f5e"}
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </form>
    </div>
  );
};

export default Logister;

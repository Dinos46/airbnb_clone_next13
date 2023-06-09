"use client";
import { FormValues } from "@/app/Models/UserModel";
import { registerUser } from "@/app/services/userService";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";

import Input from "../Input/Input";
import SocialButton from "./SocialButton";
import { BeatLoader } from "react-spinners";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import AppModal from "../AppModal/AppModal";
import { useLogister } from "@/app/store/LogisterStore";

type Props = {
  formVals: FormValues;
};

const Logister = ({ formVals }: Props) => {
  const { isOpen, type, onClose } = useLogister();
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
        const { data } = await registerUser(formInput);
        await signIn("credentials", {
          password: data.password,
          email: data.email,
        });
        router.refresh();
        onClose();
        return;
      }

      await signIn("credentials", {
        ...formInput,
      });
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <AppModal isOpen={isOpen}>
      <div className="relative flex flex-col w-full items-center justify-center bg-gray-50 p-4 rounded-lg">
        <GrFormClose
          onClick={onClose}
          size={30}
          className="cursor-pointer absolute left-1 top-0"
        />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col w-full p-4"
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

          <Button
            disabled={isLoading}
            title="continue"
            className="form-submit"
          />
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
    </AppModal>
  );
};

export default Logister;

"use client";
import { FormValues } from "@/app/Models/User.model";
import { registerUser } from "@/app/services/userService";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

type Props = {
  formVals: FormValues;
  type: "login" | "register";
};

const Logister = ({ formVals, type }: Props) => {
  const [subTitle] = useState(
    type === "login" ? "log in with your acount" : "create an acount"
  );
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formVals,
  });

  const submitHandler: SubmitHandler<FormValues> = async (formInput) => {
    try {
      if (type === "register") {
        await registerUser(formInput);
      }
      signIn("credentials", {
        ...formInput,
      });
    } catch (error) {
      console.log(error);
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
          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="form-label">
              username:
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              {...register("username", { required: true })}
            />
          </div>
        )}
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="form-label">
            email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="form-label">
            password:
          </label>
          <input
            className="form-input"
            type="text"
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        <button className="form-submit btn mt-4">continue</button>
        <div className="flex items-center justify-between my-4">
          <div className="bg-slate-200/50 h-[2px] w-[44%]"></div>
          <span className="text-base text-gray-400">or</span>
          <div className=" bg-slate-200/50 h-[2px] w-[47%]"></div>
        </div>
        <button className="btn btn-social">
          continue with google
          <FcGoogle size={20} className="absolute top-2.5" />
        </button>
        <button className="btn btn-social mt-4">
          continue with github
          <FaGithub size={20} className="absolute top-2.5" />
        </button>
      </form>
    </div>
  );
};

export default Logister;

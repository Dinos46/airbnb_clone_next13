"use client";
import { FormValues } from "@/app/Models/User.model";
import { registerUser } from "@/app/services/userService";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

type Props = {
  formVals: FormValues;
  type: "login" | "register";
};

const Logister = ({ formVals, type }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formVals,
  });

  const submitHandler: SubmitHandler<FormValues> = async (formInput) => {
    try {
      if (type === "register") {
        const { data } = await registerUser(formInput);
      }
      signIn("credentials", {
        ...formInput,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {type === "register" && (
        <div className="flex flex-col">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
        </div>
      )}
      <div className="flex flex-col">
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: true })}
        />
      </div>
      <button>submit</button>
    </form>
  );
};

export default Logister;

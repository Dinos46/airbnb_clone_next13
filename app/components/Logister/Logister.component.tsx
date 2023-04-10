"use client";
import { IUserForm } from "@/app/Models/IUserForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export type FormValues = IUserForm | Omit<IUserForm, IUserForm["username"]>;

type Props = {
  formVals: FormValues;
  type: "login" | "register";
};

const Logister = ({ formVals, type }: Props) => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: formVals,
  });

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log({ data });
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
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
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

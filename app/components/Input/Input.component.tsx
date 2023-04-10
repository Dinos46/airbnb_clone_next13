"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  id: string;
  required?: boolean;
  label: string;
  register: UseFormRegister<FieldValues>;
};

const Input = ({ id, required = true, label, register }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...register(id, { required })} />
    </div>
  );
};

export default Input;

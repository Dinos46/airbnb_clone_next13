"use client";
import { ReactNode } from "react";

type Props = {
  title?: string;
  Body?: ReactNode;
};

const AppModal = ({ Body, title = "" }: Props) => {
  return (
    <div className="absolute shadow border-[1px] py-2 w-full inset-0 z-50 bg-white rounded-lg">
      <div>
        <h2>{title}</h2>
      </div>
      <div>{Body}</div>
    </div>
  );
};

export default AppModal;

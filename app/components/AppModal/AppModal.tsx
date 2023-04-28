"use client";

import { ReactNode } from "react";

type Props = {
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen?: boolean;
};

const AppModal = ({ body, title, isOpen, footer }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="absolute flex inset-0 bg-black/60 items-center justify-center z-40">
      <div className="shadow border-[1px] bg-white rounded-lg min-w-[30%] relative">
        {title}
        {body}
        {footer}
      </div>
    </div>
  );
};

export default AppModal;

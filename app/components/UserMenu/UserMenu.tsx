"use client";
import { useClickAwayLisiner } from "@/app/hooks/useClickAwayLisiner";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

type Props = {
  children: ReactNode;
};

const UserMenu = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = useClickAwayLisiner(() => {
    setIsOpen(false);
  });

  return (
    <div className="flex items-center gap-6 relative">
      <div className="font-semibold capitalize cursor-pointer">
        airdnd your home
      </div>
      <div ref={menuRef}>
        <div className="serch-bar-item flex gap-4" onClick={handleUserMenuOpen}>
          <AiOutlineMenu size={17} />
          <BiUserCircle size={28} className="text-gray-500" />
        </div>

        {isOpen && children}
      </div>
    </div>
  );
};

export default UserMenu;

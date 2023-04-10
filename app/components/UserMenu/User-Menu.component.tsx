"use client";
import { useClickAwayLisiner } from "@/app/hooks/useClickAwayLisiner";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
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
          <FaUserCircle size={28} className="text-gray-500" />
        </div>
        {isOpen && (
          <div className="absolute shadow border-[1px] py-2 w-full top-14 left-0 z-50 bg-white rounded-lg">
            <Link href="/login" className="user-menu-item">
              log in
            </Link>
            <Link href="/register" className="user-menu-item">
              sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;

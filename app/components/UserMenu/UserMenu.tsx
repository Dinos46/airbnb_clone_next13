"use client";
import { useClickAwayLisiner } from "@/app/hooks/useClickAwayLisiner";
import { useListing } from "@/app/store/ListingStore";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

type Props = {
  children: ReactNode;
};

const UserMenu = ({ children }: Props) => {
  const onOpen = useListing((state) => state.onOpen);
  const open = useListing((state) => state.isOpen);
  const [isOpen, setIsOpen] = useState(false);

  const handleUserMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = useClickAwayLisiner(() => {
    setIsOpen(false);
  });

  const handleOpenListingModal = () => {
    onOpen();
  };

  return (
    <div className="flex items-center gap-6 relative">
      {open}
      <div
        className="font-semibold capitalize cursor-pointer"
        onClick={handleOpenListingModal}
      >
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

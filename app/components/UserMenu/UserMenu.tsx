"use client";
import { useClickAwayLisiner } from "@/app/hooks/useClickAwayLisiner";
import { useListing } from "@/app/store/ListingStore";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

type Props = {
  children: ReactNode;
  user?: User;
};

const UserMenu = ({ children, user }: Props) => {
  const onOpen = useListing((state) => state.onOpen);
  const open = useListing((state) => state.isOpen);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleUserMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = useClickAwayLisiner(() => {
    setIsOpen(false);
  });

  const handleOpenListingModal = () => {
    if (user) {
      onOpen();
      return;
    }
    router.push("/register");
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

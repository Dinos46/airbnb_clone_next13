"use client";
import Logo from "./Logo";
import SearchBar from "../Search-Bar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";
import { User } from "@prisma/client";
import UserMenuItem from "../UserMenu/UserMenuItem";
import GuestMenuItem from "../UserMenu/GuestMenuItem";
import { useLogedInUser } from "@/app/store/UserStore";

type Props = {
  user?: User;
};

const Header = ({ user }: Props) => {
  return (
    <header className="w-full shadow p-3 mb-3">
      <nav className="container flex justify-between ">
        <Logo />
        <SearchBar />
        <UserMenu user={user}>
          {user ? <UserMenuItem /> : <GuestMenuItem />}
        </UserMenu>
      </nav>
    </header>
  );
};

export default Header;

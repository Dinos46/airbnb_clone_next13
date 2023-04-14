"use client";
import Logo from "./Logo.component";
import SearchBar from "../Search-Bar/SearchBar.component";
import UserMenu from "../UserMenu/User-Menu.component";
import { User } from "@prisma/client";
import UserMenuItem from "../UserMenu/User-Menu-Item";
import GuestMenuItem from "../UserMenu/Guest-Menu-Item";

type Props = {
  user?: User;
};

const Header = ({ user }: Props) => {
  return (
    <header className="w-full shadow p-3 mb-3">
      <nav className="container flex justify-between ">
        <Logo />
        <SearchBar />
        <UserMenu>{user ? <UserMenuItem /> : <GuestMenuItem />}</UserMenu>
      </nav>
    </header>
  );
};

export default Header;

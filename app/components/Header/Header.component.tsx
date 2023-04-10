"use client";
import Logo from "./Logo.component";
import SearchBar from "../Search-Bar/SearchBar.component";
import UserMenu from "../UserMenu/User-Menu.component";

const Header = () => {
  return (
    <header className="w-full shadow p-3 mb-3">
      <nav className="container flex justify-between ">
        <Logo />
        <SearchBar />
        <UserMenu />
      </nav>
    </header>
  );
};

export default Header;

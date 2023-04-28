import Link from "next/link";

const GuestMenuItem = () => {
  return (
    <div className="absolute shadow border-[1px] py-2 w-full top-14 left-0 z-10 bg-white rounded-lg">
      <Link href="/login" className="user-menu-item">
        log in
      </Link>
      <Link href="/register" className="user-menu-item">
        sign up
      </Link>
    </div>
  );
};

export default GuestMenuItem;

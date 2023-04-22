import Link from "next/link";
import { RiHotelLine } from "react-icons/ri";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 text-rose-500 font-bold">
      <RiHotelLine className="text-rose-500" size={50} />
      <h1 className="nunito font-extrabold text-2xl">airdnd</h1>
    </Link>
  );
};

export default Logo;

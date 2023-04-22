"use client";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const socialBtns = [
  {
    provider: "github",
    Icon: AiFillGithub,
  },
  {
    provider: "google",
    Icon: FcGoogle,
  },
] as const;

type Props = {
  isLoading: boolean;
};

const SocialButton = ({ isLoading }: Props) => {
  return (
    <>
      {socialBtns.map(({ Icon, provider }) => {
        return (
          <button
            key={provider}
            disabled={isLoading}
            className={`btn btn-social ${isLoading ? "disabled" : ""} mt-4`}
          >
            {`continue with ${provider}`}
            <Icon size={20} className="absolute top-2.5" />
          </button>
        );
      })}
    </>
  );
};

export default SocialButton;

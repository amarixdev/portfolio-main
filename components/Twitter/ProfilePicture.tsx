import React from "react";
import Profile from "../../public/assets/twitter-profile.jpg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

type Props = {};

const ProfilePicture = ({
  setProfileOpen,
  profileOpen,
  theme,
}: {
  setProfileOpen: (value: boolean) => void;
  profileOpen: boolean;
  theme: string;
}) => {
  console.log(profileOpen);
  return (
    <div
      className={`${
        profileOpen && theme === "twitter"
          ? "opacity-100 z-50"
          : "opacity-0 z-0"
      } fixed h-screen w-full flex items-center justify-center`}
    >
      <div className=" w-full sm:max-w-[50%] relative flex flex-col justify-center items-center h-[70%]">
        <AiFillCloseCircle
          size={25}
          color="#888"
          className="absolute top-4 left-4 cursor-pointer"
          onClick={() => {
            setProfileOpen(false);
          }}
        />

        <Image
          src={Profile}
          alt="profile"
          width={300}
          height={300}
          className="max-w-[250px] lg:max-w-[300px]"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;

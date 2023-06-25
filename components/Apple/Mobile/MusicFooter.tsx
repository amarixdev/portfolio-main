import Image from "next/image";
import React from "react";
import Profile from "../../../public/assets/album-cover.jpg";
import { capitalizeString } from "../../../util/functions";

const MusicFooter = ({ section }: { section: string }) => {
  return (
    <div
      className={`w-[100vw] fixed bottom-[0] z-[999] bg-[#1f1f2080] py-2 backdrop-blur-md flex`}
    >
      <div className="w-full flex items-center gap-3 pl-4">
        <Image
          alt="profile"
          src={Profile}
          width={40}
          height={40}
          className="rounded-lg"
        />
        <p className=" text-base">{capitalizeString(section)}</p>
      </div>
    </div>
  );
};

export default MusicFooter;

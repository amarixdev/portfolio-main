import Image from "next/image";
import { ReactNode } from "react";
import { MdVerified } from "react-icons/md";
import Profile from "../../public/assets/twitter-profile.jpg";
import { capitalizeString } from "../../util/functions";

const Tweet = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className="w-full flex gap-2 border-b-[1px] pb-10 pt-2">
      <Image
        src={Profile}
        alt={"profile"}
        height={40}
        width={40}
        priority
        className="rounded-full max-h-[40px] max-w-[40px]  lg:max-h-[45px] lg:max-w-[45px] object-cover h-full w-full"
      />
      <div className=" w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="font-bold text-xs xs:text-sm lg:text-base whitespace-nowrap">
              Amari DeVaughn
            </h1>
            <MdVerified color="#26a7de" size={13} />
            <p className="text-[#6b6b6b] text-xs xs:text-sm lg:text-base whitespace-nowrap ">
              @amarixdev • 10h
            </p>
          </div>
          <p className="text-xs xs:text-sm lg:text-base  text-[#26a7de]">
            #{capitalizeString(title)}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tweet;

import Image from "next/image";
import React, { ReactElement, ReactNode } from "react";
import Software from "../../public/assets/software.jpeg";
import {
  TbArrowBigUp,
  TbArrowBigUpFilled,
  TbArrowBigDown,
  TbArrowBigDownFilled,
} from "react-icons/tb";

import { IoChatboxOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import { GoGift } from "react-icons/go";

const RedditPost = ({
  title,
  children,
  topPost,
  time,
}: {
  title: string;
  children: ReactNode;
  time: string;
  topPost?: boolean;
}) => {
  const username = "u/amarixdev";

  return (
    <>
      <div className={`w-full bg-[#151515] ${topPost || "mt-3"}`}>
        <div className="w-full flex p-2 items-start gap-2 ">
          <Image
            src={Software}
            width={40}
            height={40}
            alt="software"
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-xs text-[#aaaaaa]">r/aboutme</p>
            <p className="text-xs text-[#aaaaaa]">
              {username} &#x2022; {time}
            </p>
          </div>
        </div>
        <div className="px-4">
          <p className="font-semibold text-lg">{title}</p>
          {children}
        </div>
        <div className="w-full flex items-center px-4 justify-between">
          <div className="flex items-center">
            <div className="p-1">
              <TbArrowBigUp size={28} color={"#777"} />
            </div>
            <p className="px-1 text-sm font-bold text-[#777]">{2}</p>
            <div className="p-1">
              <TbArrowBigDown size={28} color={"#777"} />
            </div>
          </div>
          <IoChatboxOutline size={22} color={"#777"} />
          <div className="flex items-center gap-2">
            <FiShare size={22} color={"#777"} />
            <p className="text-[#777] font-semibold text-sm">Share</p>
          </div>

          <div className="flex items-center gap-2">
            <GoGift size={22} color={"#777"} />
            <p className="text-[#777] font-semibold text-sm">Award</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedditPost;

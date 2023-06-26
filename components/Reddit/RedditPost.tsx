import Image from "next/image";
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { useRouter } from "next/router";
import { useMediaQuery } from "../../util/hooks";

const RedditPost = ({
  title,
  children,
  topPost,
  time,
  upvoteCount,
}: {
  title: string;
  children: ReactNode;
  time: string;
  topPost?: boolean;
  upvoteCount: number;
}) => {
  const username = "u/amarixdev";
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [postSelection, setPostSelection] = useState("");
  const [upvoteCounter, setUpvoteCounter] = useState(upvoteCount);
  const [animatingUp, setAnimatingUp] = useState(false);
  const [animatingDown, setAnimatingDown] = useState(false);
  const upvoteRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const isBreakPoint = useMediaQuery(1023);

  useEffect(() => {
    setUpvoteCounter(upvoteCount);
  }, [upvoteCount]);

  const handleVote = (direction: string) => {
    if (direction === "up") {
      setUpvote((prev) => !prev);
      setDownvote(false);
    }
    if (direction === "down") {
      setDownvote((prev) => !prev);
      setUpvote(false);
    }
  };

  return (
    <>
      <div
        className={`w-full rounded-sm lg:border-2 bg-[#151515] ${
          topPost || "mt-3"
        }`}
      >
        <div
          className="w-full flex p-2 items-start gap-2 py-4"
          onClick={() => router.push(`/reddit/${title.toLowerCase()}`)}
        >
          <Image
            src={Software}
            width={40}
            height={40}
            alt="software"
            priority
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-xs lg:text-sm text-[#aaaaaa]">
              r/aboutme
            </p>
            <p className="text-xs text-[#aaaaaa]">
              {username} &#x2022; {time}
            </p>
          </div>
        </div>
        <div
          className="px-4"
          onClick={() => router.push(`/reddit/${title.toLowerCase()}`)}
        >
          <p className="font-semibold text-lg lg:text-xl">{title}</p>
          {children}
        </div>
        <div className="w-full flex items-center py-3 px-4 justify-between">
          <div className="flex items-center">
            <div
              ref={upvoteRef}
              className={`p-1 ${
                animatingUp ? "translate-y-[-13.5px]" : "translate-y-0"
              }  transition-transform duration-150 ease-in-out`}
              onClick={() => {
                handleVote("up");
                setPostSelection(title);
                if (!upvote && downvote) {
                  setUpvoteCounter((prev) => prev + 2);
                  setAnimatingUp(true);
                  setTimeout(() => {
                    setAnimatingUp(false);
                  }, 200);
                } else if (!upvote) {
                  setUpvoteCounter((prev) => prev + 1);
                  setAnimatingUp(true);
                  setTimeout(() => {
                    setAnimatingUp(false);
                  }, 200);
                } else {
                  setUpvoteCounter((prev) => prev - 1);
                }
              }}
            >
              {postSelection === title && upvote ? (
                <TbArrowBigUpFilled size={28} color="#ff5309" />
              ) : (
                <TbArrowBigUp size={28} color={"#777"} />
              )}
            </div>
            <div
              className={` ${
                postSelection === title && upvote
                  ? "text-[#ff5308]"
                  : postSelection === title && downvote
                  ? "text-[#6f92ea]"
                  : "text-[#777]"
              } px-1 text-sm font-bold  text-[#777]`}
            >
              <p className="min-w-[23px]">{upvoteCounter}</p>
            </div>
            <div
              className={`p-1 relative right-1 ${
                animatingDown ? "translate-y-[8.5px]" : "translate-y-0"
              }  transition-transform duration-150 ease-in-out`}
              onClick={() => {
                handleVote("down");
                setPostSelection(title);
                if (!downvote && upvote) {
                  setUpvoteCounter((prev) => prev - 2);
                  setAnimatingDown(true);
                  setTimeout(() => {
                    setAnimatingDown(false);
                  }, 150);
                } else if (!downvote) {
                  setUpvoteCounter((prev) => prev - 1);
                  setAnimatingDown(true);
                  setTimeout(() => {
                    setAnimatingDown(false);
                  }, 150);
                } else {
                  setUpvoteCounter((prev) => prev + 1);
                }
              }}
            >
              {postSelection === title && downvote ? (
                <TbArrowBigDownFilled size={28} color="#6f92ea" />
              ) : (
                <TbArrowBigDown size={28} color={"#777"} />
              )}
            </div>
          </div>
          {/* {isBreakPoint ? (
            <IoChatboxOutline size={22} color={"#777"} />
          ) : (
            <div className="flex items-center gap-2 lg:hover:cursor-pointer">
              <IoChatboxOutline size={22} color={"#777"} />
              <p className="text-[#777] font-semibold text-sm ">Comment</p>
            </div>
          )}
          <div className="flex items-center gap-2 lg:hover:cursor-pointer">
            <FiShare size={22} color={"#777"} />
            <p className="text-[#777] font-semibold text-sm ">Share</p>
          </div> */}

          <div className="flex items-center gap-2">
            <GoGift size={22} color={"#777"} />
            <p className="text-[#777] font-semibold text-sm lg:hover:cursor-pointer">
              Award
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedditPost;

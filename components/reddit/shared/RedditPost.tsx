import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  TbArrowBigDown,
  TbArrowBigDownFilled,
  TbArrowBigUp,
  TbArrowBigUpFilled,
} from "react-icons/tb";
import Graphic1 from "../../../public/images/reddit/software.jpg";

import { GoGift } from "react-icons/go";
import RedditGold from "../../../public/images/reddit/reddit-gold.png";
import RedditPlatinum from "../../../public/images/reddit/reddit-platinum.png";
import RedditSilver from "../../../public/images/reddit/reddit-silver.png";
import { useMediaQuery } from "../../../util/hooks";
import { RedditAwardsState } from "../../../util/types";

const RedditPost = ({
  title,
  children,
  topPost,
  time,
  upvoteCount,
  defaultAwards,
  awardsArray,
  openAwards,
  setSelectedTitle,
  subreddit,
}: {
  title: string;
  children: ReactNode;
  time: string;
  topPost?: boolean;
  upvoteCount: number;
  defaultAwards: StaticImageData[];
  awardsArray: RedditAwardsState;
  openAwards: any;
  setSelectedTitle: (value: string) => void;
  selectedTitle: string;
  subreddit: { name: string; image: StaticImageData };

  setSection: (value: string) => void;
}) => {
  const username = "u/amarixdev";
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [postSelection, setPostSelection] = useState("");
  const [upvoteCounter, setUpvoteCounter] = useState(upvoteCount);
  const [animatingUp, setAnimatingUp] = useState(false);
  const [animatingDown, setAnimatingDown] = useState(false);
  const upvoteRef = useRef<HTMLDivElement>(null);
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
    <section
      className={`lg:flex lg:border-[1px] rounded-sm  hover:lg:border-[#777] relative`}
    >
      <div className="hidden lg:block bg-[#0c0c0c]">
        <div className="flex p-3 flex-col justify-center items-center">
          <div
            ref={upvoteRef}
            className={` ${
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
              <TbArrowBigUpFilled
                size={28}
                color="#29aaf4"
                className="cursor-pointer"
              />
            ) : (
              <TbArrowBigUp
                size={28}
                color={"#777"}
                className="cursor-pointer"
              />
            )}
          </div>
          <div
            className={` ${
              postSelection === title && upvote
                ? "text-[#29aaf4]"
                : "text-[#777]"
            } text-sm py-2 font-bold`}
          >
            <p className="min-w-[23px]">{upvoteCounter}</p>
          </div>
          <div
            className={`relative ${
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
              <TbArrowBigDownFilled
                size={28}
                color="#666"
                className="cursor-pointer"
              />
            ) : (
              <TbArrowBigDown
                size={28}
                color={"#777"}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <section
        className={`w-full rounded-sm lg:rounded-none  bg-[#161616] ${
          topPost || "mt-3 lg:mt-0"
        }`}
      >
        <div className="w-full px-4 flex flex-col gap-1 mb-2">
          <div className="flex  pt-2 items-start gap-2">
            <Image
              src={subreddit.image}
              width={40}
              height={40}
              alt="software"
              priority
              className="max-h-[30px] max-w-[30px] rounded-full object-cover"
              placeholder="blur"
            />
            <div>
              <h3 className="font-semibold text-xs lg:text-sm text-[#aaaaaa]">
                {`r/${subreddit.name}`}
              </h3>
              <h4 className="text-xs text-[#aaaaaa]">
                {username} &#x2022; {time}
              </h4>
            </div>
          </div>
          {/* Awards */}
          <div className="flex flex-wrap">
            {defaultAwards.map((award, index) => (
              <Image
                key={index}
                src={award}
                width={25}
                height={25}
                priority
                alt={award.toString()}
              />
            ))}

            {awardsArray[title]?.length !== 0 &&
              awardsArray[title]?.map((award: string, index: number) => (
                <Image
                  key={index}
                  priority
                  src={
                    award === "silver"
                      ? RedditSilver
                      : award === "gold"
                      ? RedditGold
                      : award === "platinum"
                      ? RedditPlatinum
                      : ""
                  }
                  width={25}
                  height={25}
                  alt={`reddit-${award}`}
                />
              ))}
          </div>
        </div>

        <section>
          <h2 className="font-semibold text-lg lg:text-xl text-[#d2d2d2] px-4">
            {title}
          </h2>
          {children}
        </section>
        <div className="w-full flex items-center py-3 px-4 justify-between lg:justify-end">
          {isBreakPoint && (
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
                  <TbArrowBigUpFilled
                    size={28}
                    color="#29aaf4"
                    className="cursor-pointer"
                  />
                ) : (
                  <TbArrowBigUp
                    size={28}
                    color={"#777"}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div
                className={` ${
                  postSelection === title && upvote
                    ? "text-[#29aaf4]"
                    : "text-[#777]"
                } px-1 text-sm font-bold`}
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
                  <TbArrowBigDownFilled
                    size={28}
                    color="#666"
                    className="cursor-pointer"
                  />
                ) : (
                  <TbArrowBigDown
                    size={28}
                    color={"#777"}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          )}

          <div
            className="flex items-center gap-2 cursor-pointer px-3 py-1 lg:py-2 lg:hover:bg-[#333333a4] rounded-sm"
            onClick={() => {
              setPostSelection(title);
              setSelectedTitle(title);
              isBreakPoint ? openAwards(true) : openAwards();
            }}
          >
            <GoGift size={22} color={"#777"} />
            <p className="text-[#777] font-semibold text-sm">Award</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RedditPost;

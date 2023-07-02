import Image from "next/image";
import { ReactElement, memo, useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TbArrowBigUpLines, TbSword } from "react-icons/tb";
import { TiStarburstOutline } from "react-icons/ti";
import Avatar from "../../public/assets/reddit-avatar.png";
import RedditGrid from "./RedditGrid";
import RedditPost from "./RedditPost";
import RedditTabs from "./RedditTabs";
import RedditSilver from "../../public/assets/reddit-silver.png";
import RedditGold from "../../public/assets/reddit-gold.png";
import RedditPlatinum from "../../public/assets/reddit-platinum.png";
import AwardMobile from "./AwardMobile";
import MyDrawer from "./AwardMobile";
import { RedditAwardsState } from "../../util/types";

const RedditTheme = ({
  setOpenAwardsMobile,
  onOpenAwardsDesktop,
  section,
  setSection,
  awardsArray,
}: {
  openAwardsMobile: boolean;
  setOpenAwardsMobile: (openAwardsMobile: boolean) => void;
  onOpenAwardsDesktop: () => void;
  section: string;
  setSection: (value: string) => void;
  awardsArray: RedditAwardsState;
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log("rendered");
  interface SortFilter {
    [key: string]: { title: string; icon: ReactElement };
  }
  const sortFilters: SortFilter = {
    hot: { title: "HOT POSTS", icon: <BsFire color="#aaaaaa" size={20} /> },
    new: {
      title: "NEW POSTS",
      icon: <TiStarburstOutline color={"#aaaaaa"} size={20} />,
    },
    top: {
      title: "TOP POSTS",
      icon: <TbArrowBigUpLines color="#aaaaaa" size={20} />,
    },
    controversial: {
      title: "CONTROVERSIAL POSTS",
      icon: <TbSword color="#aaaaaa" size={20} />,
    },
  };
  const [filter, setFilter] = useState("hot");
  // const awards = { Summary: [], "Beyond Tech": [] };
  const handleSelect = (section: string) => {
    setSection(section);
  };
  return (
    <div className="flex relative items-center justify-center overflow-auto ">
      <div className="w-full absolute top-0 bg-gradient-to-b from-black h-[100px]"></div>
      {/* <RedditSort
        onOpenDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        setFilter={setFilter}
        filter={filter}
      /> */}
      {openDrawer && (
        <div className="h-screen bg-[#0000006b] fixed z-[150] w-full"></div>
      )}
      <RedditGrid />
      <div className={`flex flex-col z-[100] relative pt-4`}>
        <Image
          height={180}
          width={180}
          alt="avatar"
          src={Avatar}
          priority
          className={`relative transition-opacity duration-500 ease-in-out`}
        />
        <h1 className="text-2xl font-bold text-white px-4 relative bottom-2">
          Amari DeVaughn
        </h1>
        <p className="px-4 text-xs lg:text-sm lg:font-semibold">
          u/amarixdev&#x2022; 2,132 karma &#x2022; Oct 1, 2016
        </p>
        <div className="w-full lg:max-w-[650px] mt-6 flex flex-col bg-black">
          <RedditTabs section={section} handleSelect={handleSelect} />
          <>
            <div className="flex items-center w-full gap-1 py-3 px-2 bg-[#010101]">
              {sortFilters[filter].icon}
              <div
                className="flex items-center gap-1"
                onClick={() => setOpenDrawer((prev) => !prev)}
              >
                <p className=" text-xs font-bold text-[#aaaaaa]">
                  {sortFilters[filter].title}
                </p>
                <HiOutlineChevronDown color="#aaaaaa" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <RedditPost
                title="Summary"
                topPost={true}
                time="4h"
                upvoteCount={42}
                defaultAwards={[RedditGold, RedditPlatinum]}
                awardsArray={awardsArray}
                setOpenAwardsMobile={setOpenAwardsMobile}
                onOpenAwardsDesktop={onOpenAwardsDesktop}
                setSection={setSection}
              >
                <p className="text-sm lg:text-base text-[#d2d2d2] lg:px-4">
                  A 26 year-old software engineer born and raised in Greensboro,
                  North Carolina. I attended the University of North Carolina -
                  Chapel Hill from 2015 to 2019, where I competed in track and
                  field, was a pre-dental student, and medical researcher. After
                  receiving an invite to dental school in 2021, and
                  contemplation during the pandemic, I ultimately decided that
                  dentistry was not the career for me.
                </p>
                <p className="mt-4 text-sm lg:text-base text-[#d2d2d2] lg:px-4">
                  Since embarking on a new career path, I have been engaged in
                  creating a multitude of web applications, among them
                  PromoNinja, a platform that has garnered usage nationwide. As
                  a software developer, I get enjoyment out of seeing my ideas
                  manifest at every scale and take pride in devoting my full
                  attention and energy to each project I undertake. I am
                  passionate about the work I do, and eager to engage in a
                  conversation about how I can contribute to your needs or the
                  growth of your company. If you are interested in connecting,
                  please refer to the
                  <span className="font-bold"> Contact</span> section for ways
                  to get in touch.
                </p>
              </RedditPost>
              <RedditPost
                title="Beyond Tech"
                time="16d"
                upvoteCount={60}
                defaultAwards={[RedditSilver, RedditSilver, RedditGold]}
                awardsArray={awardsArray}
                setOpenAwardsMobile={setOpenAwardsMobile}
                onOpenAwardsDesktop={onOpenAwardsDesktop}
                setSection={setSection}
              >
                <ul className="text-sm lg:text-base text-[#d2d2d2] lg:px-4">
                  <li>Published co-author in the American Heart Association</li>
                  <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
                  <li>Nature Enthusiast</li>
                </ul>
              </RedditPost>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default memo(RedditTheme);

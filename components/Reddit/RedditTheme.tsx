import Image from "next/image";
import RedditGrid from "./RedditGrid";
import Avatar from "../../public/assets/reddit-avatar.png";
import { BsFire } from "react-icons/bs";
import _debounce from "lodash/debounce";
import { ReactElement, useEffect, useRef, useState } from "react";
import { truncateString } from "../../util/functions";
import RedditBanner from "./RedditBanner";
import { HiOutlineChevronDown } from "react-icons/hi";
import RedditPost from "./RedditPost";
import RedditTabs from "./RedditTabs";
import RedditSort from "./RedditSort";
import { TiStarburstOutline } from "react-icons/ti";
import { TbArrowBigUpLines, TbSword } from "react-icons/tb";
import { IconType } from "react-icons";

const RedditTheme = () => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [section, setSection] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const handleSelect = (section: string) => {
    setSection(section);
  };

  useEffect(() => {
    const handleScroll = _debounce(() => {
      if (window.scrollY > 50) {
        setShowAvatar(false);
      } else {
        setShowAvatar(true);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
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
        {/* <RedditBanner showAvatar={showAvatar} /> */}
        <Image
          height={180}
          width={180}
          alt="avatar"
          src={Avatar}
          priority
          className={`relative transition-opacity duration-500 ease-in-out ${
            showAvatar ? "opacity-100" : "opacity-0"
          }`}
        />
        <h1 className="text-2xl font-bold text-white px-4 relative bottom-2">
          Amari DeVaughn
        </h1>
        <p className="px-4 text-xs lg:text-sm lg:font-semibold">
          u/amarixdev&#x2022; 2,132 karma &#x2022; Oct 1, 2016
        </p>
        <div className="w-full lg:max-w-[1000px] mt-6 flex flex-col bg-black">
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
            <RedditPost
              title="Summary"
              topPost={true}
              time="4h"
              upvoteCount={42}
            >
              <p>
                A software developer based in North Carolina. I attended the
                University of North Carolina - Chapel Hill from 2015 to 2019,
                where I competed in track and field, was a pre-dental student,
                and medical researcher. I was grateful to receive an invitation
                to attend Dental School in 2021, but after long consideration
                and some time off during the pandemic I ultimately decided
                healthcare was not for me.{" "}
              </p>
              <p className="mt-4">
                Since the career change, I have worked on a number of web
                applications for both myself and others. As a software
                developer, I get enjoyment out out of seeing my ideas manifest
                at every scale and take pride in devoting my full attention and
                energy to each project I undertake. Thank you for taking some
                time to learn more about me and I look forward to connecting.
              </p>
            </RedditPost>
            <RedditPost title="Beyond Tech" time="16d" upvoteCount={60}>
              <ul className="text-sm lg:text-base">
                <li>Published co-author in the American Heart Association</li>
                <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
                <li>Nature Enthusiast</li>
              </ul>
            </RedditPost>
            {/* <RedditPost title="Contact Information" time="3d" upvoteCount={21}>
              <ul className="text-sm lg:text-base">
                <li>-Developed PromoNinja.io</li>
                <li>-Published co-author in the American Heart Association</li>
                <li> -2x Atlantic Coast Conference (ACC) Silver Medalist</li>
              </ul>
            </RedditPost> */}
          </>
        </div>
      </div>
    </div>
  );
};

export default RedditTheme;

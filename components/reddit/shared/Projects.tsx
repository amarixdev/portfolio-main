import Image from "next/image";
import {
  ChangeEvent,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import RedditGold from "../../../public/images/reddit/reddit-gold.png";
import RedditPlatinum from "../../../public/images/reddit/reddit-platinum.png";
import RedditSilver from "../../../public/images/reddit/reddit-silver.png";
import { RedditAwardsState } from "../../../util/types";
import RedditPost from "./RedditPost";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import style from "../../../styles/style.module.css";
import { useMediaQuery } from "../../../util/hooks";
import { projectMedia } from "../../../util/project-media";
import ProjectsGraphic from "../../../public/images/reddit/project-graphic.jpeg";

const Projects = ({
  awardsArray,
  openAwards,
  setSection,
  selectedTitle,
  setSelectedTitle,
}: {
  awardsArray: RedditAwardsState;
  openAwards: any;
  setSection: (value: string) => void;
  setSelectedTitle: (value: string) => void;
  selectedTitle: string;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const [imageIndex, setImageIndex] = useState({
    promoninja: "0",
    portfolio: "0",
  });

  const sliderRef = {
    promoninja: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
  };

  const [mobileView, setMobileView] = useState({
    promoninja: false,
    portfolio: false,
  });

  useEffect(() => {
    if (!isBreakPoint) {
      setMobileView((prev) => ({ ...prev, portfolio: true }));
    } else {
      setMobileView((prev) => ({ ...prev, portfolio: false }));
    }
  }, [isBreakPoint]);

  const swipe = (direction: string, project: string) => {
    if (project === "promoninja" || project === "portfolio")
      if (direction === "right") {
        setImageIndex((prev) => ({
          ...prev,
          [project]: (Number(prev[project]) - 100).toString(),
        }));
      } else if (direction === "left") {
        setImageIndex((prev) => ({
          ...prev,
          [project]: (Number(prev[project]) + 100).toString(),
        }));
      }
  };

  const subreddit = { name: "projects", image: ProjectsGraphic };

  useEffect(() => {
    const translateX = {
      promoninja: `${imageIndex.promoninja}%`,
      portfolio: `${imageIndex.portfolio}%`,
    };

    if (sliderRef.promoninja.current) {
      sliderRef.promoninja.current.style.transitionDuration = "400ms";
      sliderRef.promoninja.current.style.transform = `translateX(${translateX.promoninja})`;
    }

    if (sliderRef.portfolio.current) {
      sliderRef.portfolio.current.style.transitionDuration = "400ms";
      sliderRef.portfolio.current.style.transform = `translateX(${translateX.portfolio})`;
    }
  }, [imageIndex, sliderRef.portfolio, sliderRef.promoninja]);

  const displayRightArrow = {
    promoninja: Number(imageIndex.promoninja) * -1 > 0,
    portfolio: Number(imageIndex.portfolio) * -1 > 0,
  };
  const displayLeftArrow = {
    promoninja:
      Number(imageIndex.promoninja) * -1 <
      projectMedia.promoninja.desktop.length * 100 - 100,
    portfolio:
      Number(imageIndex.portfolio) * -1 <
      projectMedia.portfolio.desktop.length * 100 - 100,
  };

  const handleToggle = (
    event: ChangeEvent<HTMLInputElement>,
    project: string
  ) => {
    if (project === "promoninja" || project === "portfolio") {
      setMobileView((prev) => ({ ...prev, [project]: event.target.checked }));
    }
  };

  return (
    <div className="flex flex-col gap-5 select-none relative">
      <RedditPost
        title="Promoninja"
        topPost={true}
        time="8d"
        upvoteCount={115}
        defaultAwards={[RedditPlatinum, RedditSilver, RedditGold]}
        awardsArray={awardsArray}
        openAwards={openAwards}
        setSection={setSection}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        subreddit={subreddit}
      >
        <div className="flex absolute lg:right-16 right-5 top-5 lg:top-0  justify-start py-3">
          <div
            className={` flex items-center font-medium justify-between gap-3`}
          >
            <p className="text-[#aaaaaa] hidden base:block">Toggle View</p>
            <div className={style.switchContainer}>
              <input
                type="checkbox"
                className={style.checkbox}
                checked={mobileView.promoninja}
                id="promoninja"
                onChange={(e) => handleToggle(e, "promoninja")}
              />
              <label className={style.switch} htmlFor="promoninja">
                <span className={style.slider}></span>
              </label>
            </div>
          </div>
        </div>
        <div className=" relative overflow-x-hidden min-w-full ">
          <div className="w-full flex items-center justify-between">
            <div className="absolute top-5 right-0 rounded-3xl bg-[#000000b3] py-1 px-2 text-xs z-50">
              {`${1 + (Number(imageIndex.promoninja) / 100) * -1}  / ${
                projectMedia.promoninja.desktop.length
              }`}
            </div>
            {displayRightArrow.promoninja && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] left-1 lg:left-4"
                onClick={() => swipe("left", "promoninja")}
              >
                <BiChevronLeft size={45} color="#666" />
              </div>
            )}
            {displayLeftArrow.promoninja && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] right-1 lg:right-4"
                onClick={() => swipe("right", "promoninja")}
              >
                <BiChevronRight size={45} color="#666" />
              </div>
            )}
          </div>

          <section
            className="flex items-center w-full  max-h-[320px] min-h-[320px] scrollbar-hide  relative"
            ref={sliderRef.promoninja}
          >
            {mobileView.promoninja
              ? projectMedia.promoninja.mobile.map((preview, index) => (
                  <div
                    className={`flex items-center justify-center min-w-full`}
                    key={index}
                  >
                    <div
                      className={`flex items-center max-w-[142px] justify-center border-4 border-black  overflow-hidden shadow-black shadow-lg mt-2 h-[296px] rounded-lg `}
                    >
                      <Image
                        src={preview}
                        alt="promoninja-preview"
                        className="object-contain rounded-lg"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                ))
              : projectMedia.promoninja.desktop.map((preview, index) => (
                  <div
                    className={`flex items-center justify-center min-w-full `}
                    key={index}
                  >
                    <div className={`flex items-center justify-center mt-2`}>
                      <div className="border-black border-4 rounded-xl overflow-hidden max-w-[535px] shadow-black ">
                        <Image
                          src={preview}
                          alt="promoninja-preview"
                          className=" h-fit object-contain rounded-lg"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </section>
        </div>
        <section className="w-full px-4 relative text-[#d2d2d2] text-sm lg:text-base ">
          <h2 className="font-extrabold text-lg py-3">Description</h2>
          <p className="pb-2 ">
            PromoNinja is an an all-in-one application for anyone who enjoys
            podcasts and saving money. If you are interested in learning more
            about the project,
            <Link
              href={"https://github.com/amarixdev/promoninja-FE"}
              target="_blank"
            >
              <span
                className={`font-extrabold ${
                  isBreakPoint
                    ? "active:text-[#279bda]"
                    : "hover:text-[#279bda]"
                }  `}
              >
                {" "}
                {isBreakPoint ? "tap" : "visit"} this link.
              </span>
            </Link>
          </p>
        </section>
        <nav className="flex flex-col gap-4 pt-4 w-full">
          <Link
            href={"https://promoninja.io"}
            target="_blank"
            className="w-full"
          >
            <Button className="flex p-3 py-8 items-center justify-start w-full  gap-2">
              <FiExternalLink />
              Visit Site
            </Button>
          </Link>
          <Link
            href={"https://github.com/amarixdev/promoninja-FE"}
            target="_blank"
            className="w-full"
          >
            <Button className="flex p-3 py-8 items-center justify-start w-full  gap-2">
              <BsGithub />
              View Code
            </Button>
          </Link>
        </nav>
      </RedditPost>
      <RedditPost
        title="The Portfolio"
        topPost={false}
        time="5h"
        upvoteCount={59}
        defaultAwards={[RedditGold]}
        awardsArray={awardsArray}
        openAwards={openAwards}
        setSection={setSection}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        subreddit={subreddit}
      >
        <div className="flex absolute lg:right-16 right-5 top-5 lg:top-0 justify-start py-3">
          <div
            className={` flex items-center font-medium justify-between gap-3`}
          >
            <p className="text-[#aaaaaa] hidden base:block">Toggle View</p>
            <div className={style.switchContainer}>
              <input
                type="checkbox"
                className={style.checkbox}
                checked={mobileView.portfolio}
                id="portfolio"
                onChange={(e) => handleToggle(e, "portfolio")}
              />
              <label className={style.switch} htmlFor="portfolio">
                <span className={style.slider}></span>
              </label>
            </div>
          </div>
        </div>
        <div className=" relative overflow-x-hidden min-w-full ">
          <div className="w-full flex items-center justify-between">
            <div className="absolute top-5 right-0 rounded-3xl bg-[#000000b3] py-1 px-2 text-xs z-50">
              {`${1 + (Number(imageIndex.portfolio) / 100) * -1}  / ${
                projectMedia.portfolio.desktop.length
              }`}
            </div>
            {displayRightArrow.portfolio && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] left-1 lg:left-4"
                onClick={() => swipe("left", "portfolio")}
              >
                <BiChevronLeft size={45} color="#666" />
              </div>
            )}
            {displayLeftArrow.portfolio && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] right-1 lg:right-4"
                onClick={() => swipe("right", "portfolio")}
              >
                <BiChevronRight size={45} color="#666" />
              </div>
            )}
          </div>

          <section
            className="flex items-center w-full max-h-[320px] min-h-[320px] scrollbar-hide relative"
            ref={sliderRef.portfolio}
          >
            {mobileView.portfolio
              ? projectMedia.portfolio.mobile.map((preview, index) => (
                  <div
                    className={`flex items-center justify-center min-w-full`}
                    key={index}
                  >
                    <div
                      className={`flex items-center max-w-[142px] justify-center border-4 border-black  overflow-hidden shadow-black shadow-lg mt-2 h-[296px] rounded-lg `}
                    >
                      <Image
                        src={preview}
                        alt="portfolio-preview"
                        className="object-contain rounded-lg"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                ))
              : projectMedia.portfolio.desktop.map((preview, index) => (
                  <div
                    className={`flex items-center justify-center min-w-full `}
                    key={index}
                  >
                    <div className={`flex items-center justify-center mt-2 `}>
                      <div className="border-black border-4 rounded-xl overflow-hidden max-w-[535px] shadow-black ">
                        <Image
                          src={preview}
                          alt="portfolio-preview"
                          className=" h-fit object-contain rounded-lg"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </section>
        </div>
        <section className="w-full px-4 relative text-[#d2d2d2] text-sm lg:text-base ">
          <h2 className="font-extrabold text-lg py-3">Description</h2>
          <p className="pb-2 ">
            You’re already here! I had a great time creating this multi-themed
            project. I initially learned frontend development through trying to
            replicate the user interfaces of popular websites and applications
            such as Netflix, Youtube, and Twitch. I thought it would be a fun
            challenge to incorporate that principle into my personal portfolio.
          </p>
        </section>
        <div className="flex flex-col gap-4 pt-4 w-full">
          <Link
            href={"https://github.com/amarixdev/portfolio-main"}
            target="_blank"
            className="w-full"
          >
            <Button className="flex p-3 py-8 items-center justify-start w-full  gap-2">
              <BsGithub />
              View Code
            </Button>
          </Link>
        </div>
      </RedditPost>
    </div>
  );
};

export default Projects;

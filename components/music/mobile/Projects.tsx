import React, { ChangeEvent, useEffect, useState } from "react";
import MusicCollapse from "./MusicCollapse";
import Image, { StaticImageData } from "next/image";
import { projectMedia } from "../../../util/project-media";
import style from "../../../styles/style.module.css";
import {
  BsDot,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
  BsGithub,
} from "react-icons/bs";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "@chakra-ui/react";

const Projects = ({
  opened,
  setOpened,
  setTutorial,
  tutorial,
}: {
  opened: string[];
  setOpened: any;
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;
}) => {
  const [tapEffectBack, setTapEffectBack] = useState({
    promoninja: false,
    portfolio: false,
  });
  const [tapEffectForward, setTapEffectForward] = useState({
    promoninja: false,
    portfolio: false,
  });

  const handleTap = (direction: string, project: string) => {
    if (project === "promoninja" || project === "portfolio") {
      if (direction === "back") {
        setTapEffectBack((prev) => ({ ...prev, [project]: true }));
        setTimeout(() => {
          setTapEffectBack((prev) => ({ ...prev, [project]: false }));
        }, 150);
      }
      if (direction === "fwd") {
        setTapEffectForward((prev) => ({ ...prev, [project]: true }));
        setTimeout(() => {
          setTapEffectForward((prev) => ({ ...prev, [project]: false }));
        }, 150);
      }
    }
  };

  const [mobileView, setMobileView] = useState({
    promoninja: false,
    portfolio: false,
  });
  const [imageIndex, setImageIndex] = useState({ promoninja: 0, portfolio: 0 });

  const handleToggle = (
    event: ChangeEvent<HTMLInputElement>,
    project: string
  ) => {
    if (project === "promoninja") {
      setMobileView((prev) => ({ ...prev, promoninja: event.target.checked }));
    }

    if (project === "portfolio") {
      setMobileView((prev) => ({ ...prev, portfolio: event.target.checked }));
    }
  };
  return (
    <div className="w-full flex flex-col justify-center">
      <MusicCollapse
        opened={opened}
        setOpened={setOpened}
        setTutorial={setTutorial}
        tutorial={tutorial}
        title="promoninja"
        count={1}
        top={true}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="relative ">
            {mobileView.promoninja ? (
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${style.borderGlow} max-w-[92.5px] min-w-[92.5px] sm:max-w-[139px] sm:min-w-[139px] md:min-w-[185px] md:max-w-[185px] max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px] rounded-lg`}
                >
                  <Image
                    src={projectMedia.promoninja.mobile[imageIndex.promoninja]}
                    alt="promoninja"
                    className="rounded-lg object-contain object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                    placeholder="blur"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`${style.borderGlow} rounded-lg overflow-hidden mx-2`}
              >
                <Image
                  src={projectMedia.promoninja.desktop[imageIndex.promoninja]}
                  alt="promoninja"
                  className="rounded-lg object-contain xs:object-cover object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                  placeholder="blur"
                />
              </div>
            )}

            <div className="absolute bottom-[-25px]  w-full flex items-center justify-center">
              {projectMedia.promoninja.desktop.map((_, index) => (
                <BsDot
                  key={index}
                  size={16}
                  color={`${index === imageIndex.promoninja ? "#279bda" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center sm:justify-start justify-between pt-5 px-5 pr-10 w-full ">
            <button className="flex justify-start py-3">
              <div className={` flex items-center justify-between`}>
                <div className={style.switchContainer}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    id="promoninja"
                    onChange={(e) => handleToggle(e, "promoninja")}
                  />
                  <label className={style.switch} htmlFor="promoninja">
                    <span className={style.slider}></span>
                  </label>
                </div>
              </div>
            </button>
            <div className="w-[30%] flex flex-col items-center">
              <div className="flex w-full justify-between sm:max-w-[50px] min-w-[140px]">
                <BsFillSkipBackwardFill
                  className={` ${
                    tapEffectBack.promoninja ? "fill-[white]" : "bg-[#00000000]"
                  }  cursor-pointer active:scale-90 transition-all duration-150 ease-in`}
                  size={40}
                  onClick={() => {
                    handleTap("back", "promoninja");
                    if (imageIndex.promoninja === 0) {
                      setImageIndex((prev) => ({
                        ...prev,
                        promoninja: projectMedia.promoninja.desktop.length - 1,
                      }));
                    } else {
                      setImageIndex((prev) => ({
                        ...prev,
                        promoninja: prev.promoninja - 1,
                      }));
                    }
                  }}
                />
                <BsFillSkipForwardFill
                  className={`${
                    tapEffectForward.promoninja
                      ? "fill-[white]"
                      : "bg-[#00000000] "
                  } cursor-pointer active:scale-90 transition-all duration-150 ease-in`}
                  size={40}
                  onClick={() => {
                    handleTap("fwd", "promoninja");
                    if (
                      imageIndex.promoninja ===
                      projectMedia.promoninja.desktop.length - 1
                    ) {
                      setImageIndex((prev) => ({ ...prev, promoninja: 0 }));
                    } else {
                      setImageIndex((prev) => ({
                        ...prev,
                        promoninja: prev.promoninja + 1,
                      }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 relative">
            <h3 className="font-extrabold text-lg py-3">Description</h3>
            <p className="pb-2">
              PromoNinja is an an all-in-one application for anyone who enjoys
              podcasts and saving money. If you are interested in learning more
              about the project,
              <Link
                href={"https://github.com/amarixdev/promoninja-FE"}
                target="_blank"
              >
                <span className="font-extrabold active:text-[#279bda]">
                  {" "}
                  tap this link.
                </span>
              </Link>
            </p>
          </div>
          <nav className="flex flex-col gap-4 w-full">
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
        </div>
      </MusicCollapse>
      <MusicCollapse
        opened={opened}
        setOpened={setOpened}
        setTutorial={setTutorial}
        tutorial={false}
        title="the portfolio"
        count={2}
        top={false}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="relative ">
            {mobileView.portfolio ? (
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${style.borderGlow} max-w-[92.5px] min-w-[92.5px] sm:max-w-[139px] sm:min-w-[139px] md:min-w-[185px] md:max-w-[185px] max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px] rounded-lg`}
                >
                  <Image
                    src={projectMedia.portfolio.mobile[imageIndex.portfolio]}
                    alt="portfolio"
                    className="rounded-lg object-contain object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                    placeholder="blur"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`${style.borderGlow} rounded-lg overflow-hidden mx-2`}
              >
                <Image
                  src={projectMedia.portfolio.desktop[imageIndex.portfolio]}
                  alt="portfolio"
                  className="rounded-lg object-contain xs:object-cover object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                  placeholder="blur"
                />
              </div>
            )}

            <div className="absolute bottom-[-25px]  w-full flex items-center justify-center">
              {projectMedia.portfolio.desktop.map((_, index) => (
                <BsDot
                  key={index}
                  size={16}
                  color={`${index === imageIndex.portfolio ? "#279bda" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center sm:justify-start justify-between pt-5 px-5 pr-10 w-full ">
            <button className="flex justify-start py-3">
              <div className={` flex items-center justify-between`}>
                <div className={style.switchContainer}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    id="portfolio"
                    onChange={(e) => handleToggle(e, "portfolio")}
                  />
                  <label className={style.switch} htmlFor="portfolio">
                    <span className={style.slider}></span>
                  </label>
                </div>
              </div>
            </button>
            <div className="w-[30%] flex flex-col items-center">
              <div className="flex w-full justify-between sm:max-w-[50px] min-w-[140px]">
                <BsFillSkipBackwardFill
                  className={` ${
                    tapEffectBack.portfolio ? "fill-[white]" : "bg-[#00000000]"
                  }  cursor-pointer active:scale-90 transition-all duration-150 ease-in`}
                  size={40}
                  onClick={() => {
                    handleTap("back", "portfolio");
                    if (imageIndex.portfolio === 0) {
                      setImageIndex((prev) => ({
                        ...prev,
                        portfolio: projectMedia.portfolio.desktop.length - 1,
                      }));
                    } else {
                      setImageIndex((prev) => ({
                        ...prev,
                        portfolio: prev.portfolio - 1,
                      }));
                    }
                  }}
                />
                <BsFillSkipForwardFill
                  className={`${
                    tapEffectForward.portfolio
                      ? "fill-[white]"
                      : "bg-[#00000000] "
                  } cursor-pointer active:scale-90 transition-all duration-150 ease-in`}
                  size={40}
                  onClick={() => {
                    handleTap("fwd", "portfolio");
                    if (
                      imageIndex.portfolio ===
                      projectMedia.portfolio.desktop.length - 1
                    ) {
                      setImageIndex((prev) => ({ ...prev, portfolio: 0 }));
                    } else {
                      setImageIndex((prev) => ({
                        ...prev,
                        portfolio: prev.portfolio + 1,
                      }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 relative">
            <h3 className="font-extrabold text-lg py-3">Description</h3>
            <p className="pb-2">
              You’re already here! I had a great time creating this multi-themed
              project. I initially learned frontend development through
              replicating the user interface of popular websites such as
              Netflix, Youtube, and Twitch. I figured it would be a fun
              challenge to incorporate that principle into my personal
              portfolio.
            </p>
          </div>
          <nav className="w-full">
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
          </nav>
        </div>
      </MusicCollapse>
    </div>
  );
};

export default Projects;

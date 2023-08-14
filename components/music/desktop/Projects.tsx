import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import MusicCollapse from "./MusicCollapse";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsDot,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
  BsGithub,
} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { projectMedia } from "../../../util/project-media";
import style from "../../../styles/style.module.css";
import { useMediaQuery } from "../../../util/hooks";

const Projects = ({
  opened,
  setOpened,
}: {
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  const [mobileView, setMobileView] = useState({
    promoninja: false,
    portfolio: true,
  });
  const [imageIndex, setImageIndex] = useState({ promoninja: 0, portfolio: 0 });

  const handleToggle = (
    event: ChangeEvent<HTMLInputElement>,
    project: string
  ) => {
    if (project === "promoninja" || project === "portfolio") {
      setMobileView((prev) => ({ ...prev, [project]: event.target.checked }));
    }
  };

  const isBreakPoint = useMediaQuery(1256);
  return (
    <section
      className={` ${
        isBreakPoint ? "w-full" : "w-[93%]"
      } flex flex-col items-start justify-start mt-8 select-none`}
    >
      {/* Promoninja */}
      <MusicCollapse
        title="Promoninja"
        top={true}
        count={1}
        setOpened={setOpened}
        opened={opened}
      >
        <div className="w-full flex justify-between ">
          <div className="max-w-[800px] relative pt-5 w-full flex-col flex items-start justify-start">
            <div className="flex flex-col items-center gap-2">
              {mobileView.promoninja ? (
                <div
                  className={` ${
                    isBreakPoint ? "min-w-[700px]" : "min-w-[800px]"
                  } flex items-center justify-center`}
                >
                  <div className={`${style.borderGlow} rounded-lg`}>
                    <Image
                      placeholder="blur"
                      alt="promoninja-previews"
                      src={
                        projectMedia.promoninja.mobile[imageIndex.promoninja]
                      }
                      width={200}
                      className={` ${
                        isBreakPoint
                          ? "max-w-[150px] h-fit min-h-[320px] max-h-[320px]"
                          : "min-w-[200px] h-[400px]"
                      } select-none rounded-lg`}
                    />
                  </div>
                </div>
              ) : (
                <div className={`${style.borderGlow} rounded-lg `}>
                  <Image
                    placeholder="blur"
                    alt="promoninja-previews"
                    src={projectMedia.promoninja.desktop[imageIndex.promoninja]}
                    width={800}
                    className={`${
                      isBreakPoint
                        ? "min-w-[700px] max-h-[320px] min-h-[320px] "
                        : "min-w-[800px] max-h-[400px]"
                    } select-none object-cover object-top rounded-lg`}
                  />
                </div>
              )}
              <div className="flex">
                {projectMedia.promoninja.desktop.map((_, index) => (
                  <BsDot
                    key={index}
                    size={16}
                    color={`${
                      index === imageIndex.promoninja ? "#279bda" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="font-extrabold text-lg py-3">Description</h3>
            <p className="pb-2">
              PromoNinja is an an all-in-one application for anyone who enjoys
              podcasts and saving money. If you are interested in learning more
              about the project,
              <Link
                href={"https://github.com/amarixdev/promoninja-FE"}
                target="_blank"
              >
                <span className="font-extrabold hover:text-[#279bda]">
                  {" "}
                  visit this link.
                </span>
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center justify-evenly px-3 gap-4 text-xl w-full ">
            {/* Mobile Switch */}
            <div className="flex gap-10 flex-col">
              <div
                className={`${
                  isBreakPoint ? "min-w-[150px]" : "min-w-[200px]"
                } flex items-center gap-2  justify-between`}
              >
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
                <p className="whitespace-nowrap">
                  {mobileView.promoninja ? "Mobile View" : "Desktop View"}
                </p>
              </div>
              <div className="w-full border-blue-400 flex justify-center items-center">
                <div className="w-[50%] flex flex-col items-center">
                  <div className="flex w-full justify-between min-w-[140px]">
                    <BsFillSkipBackwardFill
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (imageIndex.promoninja === 0) {
                          setImageIndex((prev) => ({
                            ...prev,
                            promoninja:
                              projectMedia.promoninja.desktop.length - 1,
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
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (
                          imageIndex.promoninja ===
                          projectMedia.promoninja.desktop.length - 1
                        ) {
                          setImageIndex((prev) => ({
                            ...prev,
                            promoninja: 0,
                          }));
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
            </div>

            <div className="flex flex-col gap-3 items-center">
              <Link href={"https://promoninja.io"} target="_blank">
                <Button
                  minW={140}
                  className="flex p-3 items-center justify-start   gap-2"
                >
                  <FiExternalLink />
                  Visit Site
                </Button>
              </Link>

              <Link
                href={"https://github.com/amarixdev/promoninja-FE"}
                target="_blank"
              >
                <Button
                  minW={140}
                  className="flex p-3 items-center justify-start    gap-2"
                >
                  <BsGithub />
                  View Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MusicCollapse>

      {/* The Portfolio */}
      <MusicCollapse
        title="The Portfolio"
        top={true}
        count={2}
        setOpened={setOpened}
        opened={opened}
      >
        <div className="w-full flex justify-between ">
          <div className="max-w-[800px] relative pt-5 w-full flex-col flex items-start justify-start">
            <div className="flex flex-col items-center gap-2">
              {mobileView.portfolio ? (
                <div
                  className={` ${
                    isBreakPoint ? "min-w-[700px]" : "min-w-[800px]"
                  } flex items-center justify-center`}
                >
                  <div className={`${style.borderGlow} rounded-lg `}>
                    <Image
                      placeholder="blur"
                      alt={"promoninja-previews"}
                      src={projectMedia.portfolio.mobile[imageIndex.portfolio]}
                      width={200}
                      className={` ${
                        isBreakPoint
                          ? "max-w-[150px] min-h-[320px] max-h-[320px]"
                          : "min-w-[200px] h-[400px]"
                      } select-none rounded-lg `}
                    />
                  </div>
                </div>
              ) : (
                <div className={`${style.borderGlow} rounded-lg`}>
                  <Image
                    placeholder="blur"
                    alt="portfolio-previews"
                    src={projectMedia.portfolio.desktop[imageIndex.portfolio]}
                    width={800}
                    className={`${
                      isBreakPoint
                        ? "min-w-[700px] min-h-[320px] max-h-[320px]"
                        : "min-w-[800px] max-h-[400px]"
                    } select-none object-cover object-top rounded-lg`}
                  />
                </div>
              )}
              <div className="flex">
                {projectMedia.portfolio.desktop.map((_, index) => (
                  <BsDot
                    key={index}
                    size={16}
                    color={`${index === imageIndex.portfolio ? "#279bda" : ""}`}
                  />
                ))}
              </div>
            </div>

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
          <div className="flex flex-col items-center justify-evenly px-3 gap-4 text-xl w-full ">
            {/* Mobile Switch */}
            <div className="flex gap-10 flex-col">
              <div
                className={`${
                  isBreakPoint ? "min-w-[150px]" : "min-w-[200px]"
                } flex items-center gap-2  justify-between`}
              >
                <div className={style.switchContainer}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    id="portfolio"
                    checked={mobileView.portfolio}
                    onChange={(e) => handleToggle(e, "portfolio")}
                  />
                  <label className={style.switch} htmlFor="portfolio">
                    <span className={style.slider}></span>
                  </label>
                </div>
                <p className="whitespace-nowrap">
                  {mobileView.portfolio ? "Mobile View" : "Desktop View"}
                </p>
              </div>
              <div className="w-full border-blue-400 flex justify-center items-center">
                <div className="w-[50%] flex flex-col items-center">
                  <div className="flex w-full justify-between min-w-[140px]">
                    <BsFillSkipBackwardFill
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (imageIndex.portfolio === 0) {
                          setImageIndex((prev) => ({
                            ...prev,
                            portfolio:
                              projectMedia.portfolio.desktop.length - 1,
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
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (
                          imageIndex.portfolio ===
                          projectMedia.portfolio.desktop.length - 1
                        ) {
                          setImageIndex((prev) => ({
                            ...prev,
                            portfolio: 0,
                          }));
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
            </div>

            <div className="flex flex-col gap-3 items-center">
              <Link
                href={"https://github.com/amarixdev/portfolio-main"}
                target="_blank"
              >
                <Button
                  minW={140}
                  className="flex p-3 items-center justify-start    gap-2"
                >
                  <BsGithub />
                  View Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MusicCollapse>
    </section>
  );
};

export default Projects;

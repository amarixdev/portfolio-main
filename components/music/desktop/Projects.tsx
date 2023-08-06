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
import { desktopPreviews, mobilePreviews } from "../../../util/image-slider";
import style from "../../../styles/style.module.css";
import { useMediaQuery } from "../../../util/hooks";

const Projects = ({
  opened,
  setOpened,
}: {
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  const [mobileView, setMobileView] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setMobileView(event.target.checked);
  };

  const isBreakPoint = useMediaQuery(1256);
  return (
    <div
      className={` ${
        isBreakPoint ? "w-full" : "w-[93%]"
      } flex flex-col items-start justify-start mt-8 select-none`}
    >
      <MusicCollapse
        title="Promoninja"
        top={true}
        count={1}
        setOpened={setOpened}
        opened={opened}
      >
        <div className="w-full flex justify-between ">
          <div className="max-w-[800px] relative pt-5 w-full flex-col flex items-start justify-start">
            <div className="absolute bottom-[15%] left-[43%] flex">
              {desktopPreviews.map((_, index) => (
                <BsDot
                  key={index}
                  size={16}
                  color={`${index === imageIndex ? "#279bda" : ""}`}
                />
              ))}
            </div>

            {mobileView ? (
              <div
                className={`${
                  isBreakPoint ? "min-w-[700px]" : "min-w-[800px]"
                } flex items-center justify-center`}
              >
                <Image
                  alt="promoninja-previews"
                  src={mobilePreviews[imageIndex]}
                  width={200}
                  className={` ${
                    isBreakPoint
                      ? "max-w-[150px] h-[300px]"
                      : "min-w-[200px] h-[400px]"
                  } select-none `}
                />
              </div>
            ) : (
              <Image
                alt="promoninja-previews"
                src={desktopPreviews[imageIndex]}
                width={800}
                className={`${
                  isBreakPoint
                    ? "min-w-[700px] max-h-[300px]"
                    : "min-w-[800px] max-h-[400px]"
                } select-none object-cover object-top `}
              />
            )}

            <h1 className="font-extrabold text-lg py-3">Description</h1>
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
          <div className="flex flex-col items-center justify-evenly gap-4 text-xl w-full ">
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
                    id="checkbox"
                    onChange={(e) => handleToggle(e)}
                  />
                  <label className={style.switch} htmlFor="checkbox">
                    <span className={style.slider}></span>
                  </label>
                </div>
                <p className="whitespace-nowrap">
                  {mobileView ? "Mobile View" : "Desktop View"}
                </p>
              </div>
              <div className="w-full border-blue-400 flex justify-center items-center">
                <div className="w-[50%] flex flex-col items-center">
                  <div className="flex w-full justify-between min-w-[140px]">
                    <BsFillSkipBackwardFill
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (imageIndex === 0) {
                          setImageIndex(desktopPreviews.length - 1);
                        } else {
                          setImageIndex((prev) => prev - 1);
                        }
                      }}
                    />
                    <BsFillSkipForwardFill
                      className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out hover:fill-white"
                      size={40}
                      onClick={() => {
                        if (imageIndex === desktopPreviews.length - 1) {
                          setImageIndex(0);
                        } else {
                          setImageIndex((prev) => prev + 1);
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
    </div>
  );
};

export default Projects;

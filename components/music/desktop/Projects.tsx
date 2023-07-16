import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import MusicCollapse from "./MusicCollapse";
import Image from "next/image";
import DColor1 from "../../../public/assets/promoninja/desktop/desktop-color1.png";
import DColor2 from "../../../public/assets/promoninja/desktop/desktop-color2.png";
import DColor3 from "../../../public/assets/promoninja/desktop/desktop-color3.png";
import DCategory from "../../../public/assets/promoninja/desktop/desktop-category.png";
import DOffers from "../../../public/assets/promoninja/desktop/desktop-offers.png";
import DSponsor1 from "../../../public/assets/promoninja/desktop/desktop-sponsor1.png";
import DSponsor2 from "../../../public/assets/promoninja/desktop/desktop-sponsor2.png";

import MColor1 from "../../../public/assets/promoninja/mobile/mobile-color1.png";
import MColor2 from "../../../public/assets/promoninja/mobile/mobile-color2.png";
import MColor3 from "../../../public/assets/promoninja/mobile/mobile-color3.png";
import MCategory from "../../../public/assets/promoninja/mobile/mobile-category.png";
import MOffers from "../../../public/assets/promoninja/mobile/mobile-offers.png";
import MSponsor1 from "../../../public/assets/promoninja/mobile/mobile-sponsor1.png";
import MSponsor2 from "../../../public/assets/promoninja/mobile/mobile-sponsor2.png";
import CMSPreview from "../../../public/assets/promoninja/extraction.gif";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import {
  BsGithub,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
  BsDot,
} from "react-icons/bs";
import { Button } from "@chakra-ui/react";
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
  const desktopPreviews = [
    DColor1,
    DColor2,
    DColor3,
    DOffers,
    DSponsor1,
    DSponsor2,
    DCategory,
  ];
  const mobilePreviews = [
    MColor1,
    MColor2,
    MColor3,
    MOffers,
    MSponsor1,
    MSponsor2,
    MCategory,
  ];

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
                  priority
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
                priority
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
                  follow this link.
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
      {/* <MusicCollapse
        title="Content Management System - PromoNinja"
        count={2}
        setOpened={setOpened}
        opened={opened}
      >
        <div className="w-full flex items-center justify-between">
          <div
            className={` max-w-[800px] relative pt-5 flex-col flex items-start justify-start`}
          >
            <Image
              alt="cms"
              src={CMSPreview}
              width={800}
              className="min-w-[800px]"
            />
            <h1 className="font-extrabold text-lg py-2">Description</h1>
            <p>Custom CMS designed created to fit the needs of PromoNinja. </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-xl w-full h-2 ">
            <Button className="flex p-3 items-center justify-start gap-2">
              <BsGithub />
              <Link
                href={"https://github.com/amarixdev/promoninja-CMS"}
                target="_blank"
                className="hover:text-white"
              >
                View Code
              </Link>
            </Button>
          </div>
        </div>
      </MusicCollapse> */}
      {/* <MusicCollapse title="My Portfolio" count={2}></MusicCollapse> */}
    </div>
  );
};

export default Projects;

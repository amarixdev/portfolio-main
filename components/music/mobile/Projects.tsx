import React, { ChangeEvent, useEffect, useState } from "react";
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

import style from "../../../styles/style.module.css";
import {
  BsDot,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
  BsGithub,
} from "react-icons/bs";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Button, useEditable } from "@chakra-ui/react";

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
            {mobileView ? (
              <div className="w-full flex items-center justify-center">
                <Image
                  src={mobilePreviews[imageIndex]}
                  alt="promoninja"
                  priority
                  className="object-contain object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                />
              </div>
            ) : (
              <Image
                priority
                src={desktopPreviews[imageIndex]}
                alt="promoninja"
                className="object-contain xs:object-cover object-top max-h-[200px] min-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
              />
            )}
            <div className="absolute bottom-[-20px]  w-full flex items-center justify-center">
              {desktopPreviews.map((_, index) => (
                <BsDot
                  key={index}
                  size={16}
                  color={`${index === imageIndex ? "#279bda" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center sm:justify-start justify-between pt-5 px-5 pr-10 w-full ">
            <div className="flex justify-start py-3">
              <div className={` flex items-center justify-between`}>
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
              </div>
            </div>
            <div className="w-[30%] flex flex-col items-center">
              <div className="flex w-full justify-between sm:max-w-[50px] min-w-[140px]">
                <BsFillSkipBackwardFill
                  className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out active:fill-white "
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
                  className="cursor-pointer active:scale-90 transition-all duration-200 ease-in-out active:fill-white"
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
          <div className="w-full px-4 relative">
            <h1 className="font-extrabold text-lg py-3">Description</h1>
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
          <div className="flex flex-col gap-4 w-full">
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
                <FiExternalLink />
                View Code
              </Button>
            </Link>
          </div>
        </div>
      </MusicCollapse>
    </div>
  );
};

export default Projects;

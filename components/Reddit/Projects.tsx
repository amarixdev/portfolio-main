import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import RedditPost from "./RedditPost";
import { StaticImageData } from "next/image";
import { RedditAwardsState } from "../../util/types";
import RedditGold from "../../public/assets/reddit-gold.png";
import RedditPlatinum from "../../public/assets/reddit-platinum.png";
import RedditSilver from "../../public/assets/reddit-silver.png";
import Image from "next/image";
import DColor1 from "../../public/assets/promoninja/desktop/desktop-color1.png";
import DColor2 from "../../public/assets/promoninja/desktop/desktop-color2.png";
import DColor3 from "../../public/assets/promoninja/desktop/desktop-color3.png";
import DCategory from "../../public/assets/promoninja/desktop/desktop-category.png";
import DOffers from "../../public/assets/promoninja/desktop/desktop-offers.png";
import DOffers2 from "../../public/assets/promoninja/desktop/desktop-offers2.png";
import DSponsor1 from "../../public/assets/promoninja/desktop/desktop-sponsor1.png";
import DSponsor2 from "../../public/assets/promoninja/desktop/desktop-sponsor2.png";

import MColor1 from "../../public/assets/promoninja/mobile/mobile-color1.png";
import MColor2 from "../../public/assets/promoninja/mobile/mobile-color2.png";
import MColor3 from "../../public/assets/promoninja/mobile/mobile-color3.png";
import MCategory from "../../public/assets/promoninja/mobile/mobile-category.png";
import MOffers from "../../public/assets/promoninja/mobile/mobile-offers.png";
import MOffers2 from "../../public/assets/promoninja/mobile/mobile-offers2.png";
import MSponsor1 from "../../public/assets/promoninja/mobile/mobile-sponsor1.png";
import MSponsor2 from "../../public/assets/promoninja/mobile/mobile-sponsor2.png";
import { Button } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import style from "../../styles/style.module.css";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "../../util/hooks";
import { BsGithub } from "react-icons/bs";

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
  const desktopPreviews = [
    DColor1,
    DColor2,
    DColor3,
    DOffers,
    DOffers2,
    DSponsor1,
    DSponsor2,
    DCategory,
  ];
  const mobilePreviews = [
    MColor1,
    MColor2,
    MColor3,
    MOffers,
    MOffers2,
    MSponsor1,
    MSponsor2,
    MCategory,
  ];

  const [imageIndex, setImageIndex] = useState("0");
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [mobileView, setMobileView] = useState(false);

  const swipe = (direction: string) => {
    if (direction === "right") {
      setImageIndex((prev) => (Number(prev) - 100).toString());
    } else if (direction === "left") {
      setImageIndex((prev) => (Number(prev) + 100).toString());
    }
  };

  const isBreakPoint = useMediaQuery(1023);

  useEffect(() => {
    const translateXValue = `${imageIndex}%`;
    if (imageSliderRef.current) {
      imageSliderRef.current.style.transitionDuration = "400ms";
      imageSliderRef.current.style.transform = `translateX(${translateXValue})`;
    }
  }, [imageIndex]);

  const displayRightArrow = Number(imageIndex) * -1 > 0;
  const displayLeftArrow =
    Number(imageIndex) * -1 < desktopPreviews.length * 100 - 100;
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setMobileView(event.target.checked);
  };
  return (
    <div className="flex flex-col gap-5 select-none ">
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
      >
        <div className="flex absolute lg:right-16 right-5 top-[160px] justify-start py-3">
          <div
            className={` flex items-center font-medium justify-between gap-3`}
          >
            <p className="text-[#aaaaaa] hidden base:block">Toggle View</p>
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
        <div className=" relative overflow-x-hidden min-w-full ">
          <div className="w-full flex items-center justify-between">
            <div className="absolute top-5 right-0 rounded-3xl bg-[#000000b3] py-1 px-2 text-xs z-50">
              {`${1 + (Number(imageIndex) / 100) * -1}  / ${
                desktopPreviews.length
              }`}
            </div>
            {displayRightArrow && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] left-1 lg:left-4"
                onClick={() => swipe("left")}
              >
                <BiChevronLeft size={45} color="#666" />
              </div>
            )}
            {displayLeftArrow && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full bg-[#f2f2f2] z-50 top-[50%] right-1 lg:right-4"
                onClick={() => swipe("right")}
              >
                <BiChevronRight size={45} color="#666" />
              </div>
            )}
          </div>

          <div
            className="flex items-center w-full relative "
            ref={imageSliderRef}
          >
            {mobileView
              ? mobilePreviews.map((preview, index) => (
                  <div className={`flex items min-w-full `} key={index}>
                    <div className="w-full flex items-center justify-center">
                      <Image
                        src={preview}
                        alt="promoninja-preview"
                        className="object-contain h-[300px] "
                        width={200}
                        priority
                      />
                    </div>
                  </div>
                ))
              : desktopPreviews.map((preview, index) => (
                  <div className={`flex items min-w-full`} key={index}>
                    <Image
                      src={preview}
                      alt="promoninja-preview"
                      className="pt-2 h-[300px] object-contain"
                      priority
                    />
                  </div>
                ))}
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
              <span
                className={`font-extrabold ${
                  isBreakPoint
                    ? "active:text-[#279bda]"
                    : "hover:text-[#279bda]"
                }  `}
              >
                {" "}
                {isBreakPoint ? "tap" : "click"} this link.
              </span>
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-4 w-full">
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
        </div>
      </RedditPost>
    </div>
  );
};

export default Projects;

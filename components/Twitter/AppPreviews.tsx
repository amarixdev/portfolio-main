import Image from "next/image";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import Profile from "../../public/assets/twitter-profile.jpg";
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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../util/hooks";
import style from "../../styles/style.module.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsGithub,
} from "react-icons/bs";
import Tweet from "./Tweet";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const AppPreviews = ({
  setPreviewsOpen,
  previewsOpen,
  theme,
  imageIndex,
  setImageIndex,
  setDisplayTweet,
  displayTweet,
}: {
  setPreviewsOpen: (value: boolean) => void;
  previewsOpen: boolean;
  theme: string;
  imageIndex: string;
  setImageIndex: (value: any) => void;
  displayTweet: boolean;
  setDisplayTweet: (value: any) => void;
}) => {
  const desktopPreviews = [
    DColor1,
    DColor2,
    DColor3,
    DCategory,
    DOffers,
    DOffers2,
    DSponsor1,
    DSponsor2,
  ];
  const mobilePreviews = [
    MColor1,
    MColor2,
    MColor3,
    MCategory,
    MOffers,
    MOffers2,
    MSponsor1,
    MSponsor2,
  ];

  // const [imageIndex, setImageIndex] = useState("0");
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [mobileView, setMobileView] = useState(false);

  const swipe = (direction: string) => {
    if (direction === "right") {
      setImageIndex((prev: string) => (Number(prev) - 100).toString());
    } else if (direction === "left") {
      setImageIndex((prev: string) => (Number(prev) + 100).toString());
    }
  };

  const isBreakPoint = useMediaQuery(1023);
  const arrowSize = isBreakPoint ? 40 : 25;
  const iconBreakPoint = useMediaQuery(639);
  const iconSize = iconBreakPoint ? 15 : 20;

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
    <div
      className={`${
        previewsOpen && theme === "twitter" ? "block z-50" : "hidden z-0"
      } select-none fixed h-screen w-full bg-black flex items-center justify-center`}
    >
      {isBreakPoint && (
        <div className="w-full absolute flex items-center justify-between">
          <div className="absolute top-[50%] right-0 rounded-3xl bg-[#0000007d] py-1 px-2 text-xs z-50">
            {`${1 + (Number(imageIndex) / 100) * -1}  / ${
              desktopPreviews.length
            }`}
          </div>
        </div>
      )}

      {isBreakPoint && (
        <div className="w-full top-24 flex items-center justify-between absolute px-4">
          <div
            onClick={() => {
              setPreviewsOpen(false);
              setDisplayTweet(false);
            }}
            className="p-4 rounded-full bg-black active:bg-[#202020] lg:hover:bg-[#202020]"
          >
            <AiOutlineClose
              size={30}
              color="white"
              className="cursor-pointer relative z-[100]"
            />
          </div>
          <div className="flex  justify-start py-3 z-[999]">
            <div
              className={` flex items-center font-medium justify-between gap-4`}
            >
              <p className="text-[#aaaaaa]">Toggle View</p>
              <div className={style.switchContainerTwitter}>
                <input
                  type="checkbox"
                  className={style.checkboxTwitter}
                  id="checkboxTwitter"
                  onChange={(e) => handleToggle(e)}
                />
                <label
                  className={style.switchTwitter}
                  htmlFor="checkboxTwitter"
                >
                  <span className={style.sliderTwitter}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {isBreakPoint || (
        <div
          onClick={() => {
            setPreviewsOpen(false);
            setDisplayTweet(true);
          }}
          className="p-2 absolute top-28 left-8 rounded-full bg-black active:bg-[#202020] lg:hover:bg-[#202020]"
        >
          <AiOutlineClose
            size={20}
            color="white"
            className="cursor-pointer relative z-[100]"
          />
        </div>
      )}

      <div
        className={` w-full h-full flex ${
          displayTweet ? "justify-end" : "justify-center"
        }  `}
      >
        {isBreakPoint && (
          <div>
            {displayRightArrow && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer h-fit rounded-full bg-black hover:bg-[#202020] p-4 lg:p-3  z-50 bottom-[15%] left-[20%]"
                onClick={() => swipe("left")}
              >
                <FaArrowLeft size={arrowSize} color="white" />
              </div>
            )}
            {displayLeftArrow && (
              <div
                className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full h-fit bg-black hover:bg-[#202020] p-4 lg:p-3 z-50 bottom-[15%]  right-[20%]"
                onClick={() => swipe("right")}
              >
                <FaArrowRight size={arrowSize} color="white" />
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center relative w-full items-center min-h-full ">
          {isBreakPoint || (
            <div className="flex absolute right-36 top-[104px] justify-start py-3 z-[999]">
              <div
                className={` flex items-center font-medium justify-between gap-6`}
              >
                <p className="text-[#aaaaaa]">Toggle View</p>
                <div className={style.switchContainerTwitter}>
                  <input
                    type="checkbox"
                    className={style.checkboxTwitter}
                    id="checkboxTwitter"
                    onChange={(e) => handleToggle(e)}
                  />
                  <label
                    className={style.switchTwitter}
                    htmlFor="checkboxTwitter"
                  >
                    <span className={style.sliderTwitter}></span>
                  </label>
                </div>
              </div>
            </div>
          )}
          {isBreakPoint || (
            <div
              onClick={() => {
                setDisplayTweet((prev: boolean) => !prev);
              }}
              className="p-2 cursor-pointer absolute top-28 right-8 rounded-full bg-black active:bg-[#202020] lg:hover:bg-[#202020]"
            >
              {displayTweet ? (
                <BsChevronDoubleRight
                  size={20}
                  color="white"
                  className="relative z-[100]"
                />
              ) : (
                <BsChevronDoubleLeft
                  size={20}
                  color="white"
                  className="relative z-[100]"
                />
              )}
            </div>
          )}
          {isBreakPoint || (
            <div>
              {displayRightArrow && (
                <div
                  className="active:scale-95 lg:active:scale-100 absolute cursor-pointer h-fit rounded-full bg-black hover:bg-[#202020] p-4 lg:p-3  z-50 bottom-[-20%] lg:top-[50%] left-16"
                  onClick={() => swipe("left")}
                >
                  <FaArrowLeft size={arrowSize} color="white" />
                </div>
              )}
              {displayLeftArrow && (
                <div
                  className="active:scale-95 lg:active:scale-100 absolute cursor-pointer rounded-full h-fit bg-black hover:bg-[#202020] p-4 lg:p-3 z-50 bottom-[-20%] lg:top-[50%] right-16"
                  onClick={() => swipe("right")}
                >
                  <FaArrowRight size={arrowSize} color="white" />
                </div>
              )}
            </div>
          )}

          <div className=" w-full sm:max-w-[800px] relative flex flex-col justify-center items-center h-[50%]">
            <div className=" relative overflow-x-clip min-w-full">
              {isBreakPoint || (
                <div className="w-full flex items-center justify-between">
                  <div className="absolute top-10 right-0 rounded-3xl bg-[#000000b3] py-1 px-2 text-xs z-50">
                    {`${1 + (Number(imageIndex) / 100) * -1}  / ${
                      desktopPreviews.length
                    }`}
                  </div>
                </div>
              )}

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
                            className="object-contain h-[50%] lg:h-[500px] "
                            width={300}
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
                          className="pt-2 object-contain"
                          width={2000}
                          priority
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>

        {displayTweet && (
          <div className="min-h-full w-[30%] border-l border-[#41414183] px-4  top-24 relative ">
            <Tweet title="promoninja" preview={true}>
              <p className="pt-2 ">
                PromoNinja is an an all-in-one application for anyone who enjoys
                podcasts and saving money. If you are interested in learning
                more about the project,
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
            </Tweet>
            <div className="flex flex-col gap-4 pt-5 items-center  ">
              <div className=" gap-4 flex flex-col w-[80%] items-center justify-center">
                <Link
                  href={"https://promoninja.io"}
                  target="_blank"
                  className="w-full"
                >
                  <Button className="flex p-3 py-8  items-center justify-center w-full  gap-2 sm:gap-4">
                    <FiExternalLink size={iconSize} />
                    <p className="sm:text-lg">Visit Site</p>
                  </Button>
                </Link>

                <Link
                  href={"https://github.com/amarixdev/promoninja-FE"}
                  target="_blank"
                  className="w-full"
                >
                  <Button className="flex p-3 py-8 items-center justify-start w-full gap-2 sm:gap-4">
                    <BsGithub size={iconSize} />
                    <p className="sm:text-lg">View Code</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppPreviews;

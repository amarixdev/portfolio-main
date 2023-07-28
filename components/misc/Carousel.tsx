import React from "react";
import style from "../../styles/carousel.module.css";
import { HiMusicNote } from "react-icons/hi";
import { FaRedditAlien } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useMediaQuery } from "../../util/hooks";

const Carousel = ({ displayContact }: { displayContact: boolean }) => {
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 25 : 35;
  return (
    <div
      className={`${style.carousel} ${
        displayContact && !isBreakPoint ? "block" : "hidden"
      } h-[50px] top-0 pt-[12px] lg:pt-[6px] w-full lg:w-[400px] bg-gradient-to-r to-[#041b28] shadow-black shadow-2xl from-[#279bda]`}
    >
      <div className={`${style.carouselTrack}`}>
        <div className={`${style.emblem}`}>
          {" "}
          <FaRedditAlien size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <BsTwitter size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          <HiMusicNote size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <FaRedditAlien size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <BsTwitter size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          <HiMusicNote size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <FaRedditAlien size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <BsTwitter size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          <HiMusicNote size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <FaRedditAlien size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <BsTwitter size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          <HiMusicNote size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <FaRedditAlien size={iconSize} />
        </div>
        <div className={`${style.emblem}`}>
          {" "}
          <BsTwitter size={iconSize} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

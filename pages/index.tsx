import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { HiMusicNote } from "react-icons/hi";
import RedditTheme from "../components/RedditTheme";
import ParallaxBg from "../public/assets/profile-bg.png";
import ParallaxFg from "../public/assets/profile-padding.png";
import style from "../styles/style.module.css";
import { capitalizeString } from "../util/functions";
import { useMediaQuery } from "../util/hooks";

type Props = {};

const Home: NextPage = (props: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 45 : 65;
  const [displayTitle, setDisplayTitle] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const handleThemeSelection = (icon: string) => {
    const musicIcon = document.getElementById("music");
    const redditIcon = document.getElementById("reddit");
    const twitterIcon = document.getElementById("twitter");
    setTheme(icon);

    if (icon === "music") {
      musicIcon?.classList.remove(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "reddit") {
      redditIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "twitter") {
      twitterIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "none") {
      musicIcon?.classList.add(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
      if (titleRef.current) {
        const elementRect = titleRef.current.getBoundingClientRect();
        const isPastElement = isBreakPoint
          ? elementRect.top <= 630
          : elementRect.top <= 680;
        setDisplayTitle(isPastElement);
        console.log(elementRect.top);
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [titleRef, isBreakPoint]);

  const [theme, setTheme] = useState("");

  return (
    <div>
      {/* <div className="w-full bg-black h-20 fixed z-[999] "></div> */}
      <div ref={wrapperRef} className={`${style.wrapper}`}>
        <section>
          <Image
            priority
            src={ParallaxBg}
            alt="bg"
            className={`${style.background} ${
              heroLoaded ? "block" : "hidden"
            } h-full lg:h-fit `}
            onLoad={() => setHeroLoaded(true)}
          />
          <div
            className={` absolute h-full lg:h-fit w-full xl:top-[-5%] 2xl:top-[-20%] ${
              style.test
            } ${heroLoaded ? "block" : "hidden"}  `}
          >
            <Image
              src={ParallaxFg}
              alt="fg"
              priority
              quality={100}
              className={`relative object-cover h-full w-full`}
            />

            <div
              className={`w-full relative bottom-20 pt-10 lg:pb-[160px] bg-black flex flex-col justify-top items-center `}
            >
              <div
                ref={titleRef}
                className={`w-full items-center justify-center flex flex-col gap-3 ${
                  displayTitle ? "opacity-100" : "opacity-0"
                } transition duration-500 ease-in-out`}
              >
                <p className=" font-medium  text-3xl lg:text-4xl">
                  {" "}
                  Amari <span className="text-[#87d3fe]">DeV</span>aughn
                </p>
                <p className="font-bold text-5xl lg:text-6xl text-center text-[#87d3fe] ">
                  Software <span className="text-white">DeV</span>eloper
                </p>

                <div
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <h1 className="font-bold text-3xl min-w-[230px] ">
                    {theme ? "Theme: " : "Choose Portfolio Theme"}
                    <span className="font-extrabold">
                      {capitalizeString(theme)}
                    </span>
                  </h1>
                  <div className="flex mt-10 lg:mt-16 justify-evenly w-full">
                    <button
                      id="music"
                      className={`${style.musicIcon} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center cursor-pointer`}
                      onClick={() => {
                        handleThemeSelection("music");
                      }}
                    >
                      <HiMusicNote size={iconSize} />
                    </button>
                    <button
                      id="reddit"
                      className={`${style.redditIcon}  w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl p-2 cursor-pointer`}
                      onClick={() => {
                        handleThemeSelection("reddit");
                      }}
                    >
                      <FaRedditAlien size={iconSize} />
                    </button>

                    <button
                      id="twitter"
                      className={`${style.twitterIcon} w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl p-2 cursor-pointer`}
                      onClick={() => handleThemeSelection("twitter")}
                    >
                      <BsTwitter size={iconSize} />
                    </button>
                  </div>
                  {
                    <div className="mt-14 w-full flex justify-center">
                      <h1
                        className="font-medium text-xl"
                        onClick={() => handleThemeSelection("none")}
                      >
                        No Theme
                      </h1>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div
              ref={themeRef}
              className="w-full absolute bg-black lg:bottom-[-820px]"
            >
              {theme === "reddit" && <RedditTheme />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

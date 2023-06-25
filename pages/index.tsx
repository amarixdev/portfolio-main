import { NextPage } from "next";
import Image from "next/image";
import { ReactElement, useEffect, useRef, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { HiMusicNote } from "react-icons/hi";
import RedditTheme from "../components/Reddit/RedditTheme";
import ParallaxBg from "../public/assets/profile-bg.png";
import ParallaxFg from "../public/assets/profile-padding.png";
import style from "../styles/style.module.css";
import { capitalizeString } from "../util/functions";
import { useMediaQuery } from "../util/hooks";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import MusicThemeDesktop from "../components/Apple/Desktop/MusicTheme";
import MusicThemeMobile from "../components/Apple/Mobile/MusicTheme";

type Props = {};

const Home: NextPage = (props: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const themeSelectionRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState("");
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 45 : 65;
  const iconSizeBanner = isBreakPoint ? 15 : 30;
  const [displayTitle, setDisplayTitle] = useState(false);
  const [displayBanner, setDisplayBanner] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  interface Theme {
    [key: string]: { icon: ReactElement | null; style: string | null };
  }

  const themes: Theme = {
    music: {
      icon: <HiMusicNote size={iconSizeBanner} />,
      style: `${style.musicIconBanner}`,
    },
    reddit: {
      icon: <FaRedditAlien size={iconSizeBanner} />,
      style: `${style.redditIconBanner}`,
    },
    twitter: {
      icon: <BsTwitter size={iconSizeBanner} />,
      style: `${style.twitterIconBanner}`,
    },
    none: {
      icon: null,
      style: null,
    },
  };

  const [themeLoading, setThemeLoading] = useState(false);
  const [menuItems, setMenuItems] = useState(["Twitter", "Music", "None"]);
  const handleThemeSelection = (icon: string) => {
    if (theme === icon) {
      setThemeLoading(false);
      return;
    }
    setTheme(icon);
    setThemeLoading(true);
    const musicIcon = document.getElementById("music");
    const redditIcon = document.getElementById("reddit");
    const twitterIcon = document.getElementById("twitter");
    if (icon === "music") {
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      musicIcon?.classList.remove(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "reddit") {
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      redditIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "twitter") {
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      twitterIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "none") {
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      musicIcon?.classList.add(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }
    setTimeout(() => {
      setThemeLoading(false);
    }, 500);
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
      }

      if (themeSelectionRef.current) {
        const elementRect = themeSelectionRef.current.getBoundingClientRect();
        setDisplayBanner(elementRect.bottom < 140);
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [titleRef, themeSelectionRef, isBreakPoint]);

  return (
    <div>
      {
        <div
          onClick={() => {
            // wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`${
            displayBanner ? "top-0" : "top-[-20%]"
          } cursor-pointer transition-all duration-300 ease-in-out w-full shadow-black shadow-md  bg-[#161616] h-20 lg:gap-10 py-12 lg:p-10 px-4 fixed z-[999] flex justify-between  items-center`}
        >
          <p className="font-extrabold text-sm xs:text-base lg:text-3xl text-center text-[#87d3fe] ">
            Software <span className="text-white">DeV</span>eloper
          </p>
          <Menu>
            <MenuButton>
              <div className="flex items-center gap-4 lg:gap-6">
                <div
                  className={`flex ${themes[theme]?.style} bg-black  rounded-full lg:rounded-2xl  items-center justify-center w-10 h-10  lg:w-14 lg:h-14`}
                >
                  {themes[theme]?.icon}
                </div>

                <div className="flex items-center lg:gap-2 ">
                  <h1 className=" font-medium text-sm lg:text-2xl">Theme</h1>
                  <FiChevronDown size={20} />
                </div>
              </div>
            </MenuButton>
            <MenuList bgColor={"#101010"}>
              {menuItems.map((item) => (
                <MenuItem
                  _hover={{ bgColor: "#333333" }}
                  bgColor={"#101010"}
                  key={item}
                  onClick={() => handleThemeSelection(item)}
                >
                  {capitalizeString(item)}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      }
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
            className={` absolute h-full lg:h-fit w-full xl:top-[-10%] 2xl:top-[-20%] 3xl:top-[-25%] ${
              style.test
            } ${heroLoaded ? "block" : "hidden"}  `}
          >
            <Image
              src={ParallaxFg}
              alt="fg"
              priority
              quality={100}
              className={`relative object-cover h-full lg:h-fit w-full`}
            />

            <div
              className={`w-full relative bottom-20  pt-10 bg-[#080808] flex flex-col justify-top items-center `}
            >
              <div className="absolute top-0 bg-gradient-to-b from-[#87d3fe] to-black h-[4px] w-full z-0"></div>
              <div
                ref={titleRef}
                className={`w-full text-[#dbdbdb] items-center justify-center flex flex-col gap-3 z-10 ${
                  displayTitle ? "opacity-100" : "opacity-0"
                } transition duration-500 ease-in-out`}
              >
                <p className=" font-semibold text-3xl lg:text-4xl">
                  {" "}
                  Amari <span className="text-[#87d3fe]">DeV</span>aughn
                </p>
                <div className="block sm:flex font-extrabold text-5xl px-4 lg:text-6xl text-center text-transparent ">
                  <p className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#4aafea] ">
                    Software
                  </p>{" "}
                  <div className="ml-4 text-[#dbdbdb]">
                    DeV
                    <span className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#4aafea] text-transparent  ">
                      eloper
                    </span>
                  </div>
                </div>

                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <h1 className="font-bold flex items-center gap-2 relative left-2 justify-start text-xl lg:text-3xl min-w-[160px] lg:min-w-[230px] ">
                    {theme ? "Theme: " : "Choose Portfolio Theme"}
                    <span className="font-extrabold text-white">
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
                        setThemeLoading(true);
                        handleThemeSelection("reddit");
                      }}
                    >
                      <FaRedditAlien size={iconSize} />
                    </button>

                    <button
                      id="twitter"
                      className={`${style.twitterIcon} w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl p-2 cursor-pointer`}
                      onClick={() => {
                        handleThemeSelection("twitter");
                      }}
                    >
                      <BsTwitter size={iconSize} />
                    </button>
                  </div>
                  <div className="w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative top-10"></div>
                  {
                    <div className="mt-14 w-full flex justify-center">
                      <div className="from-[#080808] to-black bg-gradient-to-b w-full h-20">
                        {themeLoading && !displayBanner && (
                          <div className="z-[9999] w-full absolute flex items-start justify-center h-screen">
                            <span
                              className={`${style.loader} relative top-5`}
                            ></span>
                          </div>
                        )}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            {themeLoading ? (
              <div
                ref={themeRef}
                className={` w-full absolute h-screen flex items-center justify-center bg-black mt-[-100px] z-[0]`}
              >
                <span
                  className={`${style.loader} ${
                    displayBanner ? "opacity-100" : "opacity-0"
                  } relative top-5`}
                ></span>
              </div>
            ) : (
              <div
                ref={themeRef}
                className="w-full absolute bg-black mt-[-100px] z-[20]"
              >
                {theme === "music" && isBreakPoint && <MusicThemeMobile />}
                {theme === "music" && !isBreakPoint && <MusicThemeDesktop />}
                {theme === "reddit" && <RedditTheme />}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

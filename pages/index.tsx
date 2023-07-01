import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { ReactElement, useEffect, useRef, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiMusicNote } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import MusicThemeDesktop from "../components/Apple/Desktop/MusicTheme";
import MusicThemeMobile from "../components/Apple/Mobile/MusicTheme";
import RedditTheme from "../components/Reddit/RedditTheme";
import ProfilePicture from "../components/Twitter/ProfilePicture";
import TwitterTheme from "../components/Twitter/TwitterTheme";
import ParallaxBg from "../public/assets/profile-bg.png";
import ParallaxFg from "../public/assets/profile-padding.png";
import style from "../styles/style.module.css";
import { capitalizeString } from "../util/functions";
import { useMediaQuery } from "../util/hooks";
import Flower from "../public/assets/reddit-avatar.png";

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
      style: `${style.glowIcon}`,
    },
    reddit: {
      icon: <FaRedditAlien size={iconSizeBanner} />,
      style: `${style.glowIcon}`,
    },
    twitter: {
      icon: <BsTwitter size={iconSizeBanner} />,
      style: `${style.glowIcon}`,
    },
    none: {
      icon: null,
      style: null,
    },
  };

  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showBackdropText, setShowBackdropText] = useState(false);

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

  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let timer: NodeJS.Timeout;
    if (wrapper?.scrollTop === 0 && heroLoaded) {
      setShowBackdropText(true);
    }

    const handleScroll = () => {
      setPageScrolled(true);
      clearTimeout(timer);
      setShowBackdrop(false);
      if (wrapper?.scrollTop === 0) {
        setDisplayTitle(false);
        return;
      }
      if (titleRef.current) {
        const elementRect = titleRef.current.getBoundingClientRect();
        const isPastElement = isBreakPoint
          ? elementRect.top <= 500
          : elementRect.top <= 630;
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
      clearTimeout(timer);
    };
  }, [titleRef, themeSelectionRef, isBreakPoint, heroLoaded]);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div
      className={`${
        profileOpen && theme === "twitter" && "h-screen fixed z-[500]"
      } `}
    >
      <ProfilePicture
        setProfileOpen={setProfileOpen}
        profileOpen={profileOpen}
        theme={theme}
      />
      {
        <div
          onClick={() => {
            // wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`${
            displayBanner ? "top-0" : "top-[-20%]"
          } cursor-pointer transition-all duration-300 ease-in-out w-full shadow-black shadow-md backdrop-blur-lg  bg-[#262626c8] py-3 lg:py-5 lg:gap-10 px-4 fixed z-[999] flex justify-between  items-center`}
        >
          <p className="font-extrabold text-sm xs:text-base lg:text-3xl text-center ">
            {/* Software <span className="text-white">DeV</span>eloper */}
            Portfolio
          </p>
          <Menu>
            <MenuButton>
              <div className="flex items-center gap-4 lg:gap-6">
                <div
                  className={`flex ${themes[theme]?.style} bg-black  rounded-full lg:rounded-2xl  items-center justify-center w-10 h-10  lg:w-14 lg:h-14`}
                >
                  {themes[theme]?.icon}
                </div>

                <div className="flex items-center lg:gap-2 lg:pr-10 ">
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
                  onClick={() => {
                    handleThemeSelection(item);
                    setProfileOpen(false);
                  }}
                >
                  {capitalizeString(item)}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      }
      <div ref={wrapperRef} className={`${style.wrapper}`}>
        {pageScrolled || (
          <div
            className={` z-[999] ${
              showBackdrop ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300 flex text-center justify-center ease-out h-screen fixed bg-[#000000b9] w-full`}
          >
            <div
              className={`${
                showBackdropText ? "opacity-100" : "opacity-0"
              } flex flex-col gap-10 justify-evenly w-[70%]`}
            >
              <h1 className="font-extrabold text-3xl lg:text-5xl">
                Hi, Welcome to my portfolio!
              </h1>
              <div className="flex flex-col items-center gap-4 lg:gap-6">
                <h1 className="font-bold text-2xl lg:text-4xl ">
                  {" "}
                  Scroll Down
                </h1>
                <FiChevronDown size={60} className={style.bounce} />
              </div>
            </div>
          </div>
        )}

        <section className="">
          {
            <Image
              priority
              src={ParallaxBg}
              alt="bg"
              className={`${style.background} ${
                heroLoaded ? "block" : "hidden"
              } h-full lg:h-fit `}
              onLoad={() => setHeroLoaded(true)}
            />
          }

          <div
            className={` absolute h-full lg:h-fit w-full xl:top-[-10%] 2xl:top-[-20%] 3xl:top-[-25%] ${
              style.display
            } ${heroLoaded ? "block" : "hidden"}  `}
          >
            <Image
              src={ParallaxFg}
              alt="fg"
              priority
              quality={100}
              className={`object-cover relative z-0 h-full lg:h-fit w-full`}
            />

            <div
              className={`w-full relative bottom-20  pt-10 bg-gradient-to-b from-[#0c0c0c] to-black flex flex-col justify-top items-center `}
            >
              <div className="absolute w-full top-0 pb-8 flex items-start justify-center">
                {isBreakPoint && (
                  <HiEllipsisHorizontal
                    size={35}
                    color="#aaaaaa"
                    onClick={() =>
                      titleRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="z-[999] relative"
                  />
                )}
              </div>
              {/* <div className="absolute top-0 bg-gradient-to-b from-[#049cf4] to-[black] h-[4px] w-full z-0"></div> */}
              <div
                ref={titleRef}
                className={`w-full mt-2  text-[#dbdbdb] items-center justify-center flex flex-col gap-3 z-10 `}
              >
                <div className={`${style.backgroundContainer}`}>
                  <div className={`${style.stars}`}></div>
                  <div className={`${style.twinkling}`}></div>
                </div>

                <div
                  className={`${
                    displayTitle ? "opacity-100 " : "opacity-0 "
                  } transition-opacity duration-500 ease-in w-full flex flex-col items-center justify-center`}
                >
                  <div className="relative flex font-semibold text-3xl lg:text-6xl text-center text-transparent ">
                    <p className="text-[#dbdbdb] relative ">Amari</p>{" "}
                    <div className="ml-2 bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4]  ">
                      DeV
                    </div>
                    <span className="text-[#dbdbdb] relative right-[1px]">
                      aughn
                    </span>
                  </div>
                  <div className="relative sm:flex font-extrabold text-5xl px-4 lg:text-8xl text-center text-transparent ">
                    <p className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] ">
                      Software
                    </p>{" "}
                    <div className="ml-4 text-[#dbdbdb]">
                      DeV
                      <span className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] text-transparent  ">
                        eloper
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <h1 className=" font-bold flex items-center gap-2 relative left-2 justify-start text-xl lg:text-3xl min-w-[160px] lg:min-w-[230px] ">
                    {"Select portfolio theme"}
                  </h1>
                  <div className="flex mt-10 lg:mt-16 justify-evenly w-full lg:w-[60%]">
                    <Tooltip label="Music Theme" openDelay={1000}>
                      <button
                        id="music"
                        className={`${style.glowIcon} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center cursor-pointer`}
                        onClick={() => {
                          handleThemeSelection("music");
                        }}
                      >
                        <HiMusicNote size={iconSize} />
                      </button>
                    </Tooltip>
                    <Tooltip label="Reddit Theme" openDelay={1000}>
                      <button
                        id="reddit"
                        className={`${style.glowIcon}  w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl p-2 cursor-pointer`}
                        onClick={() => {
                          setThemeLoading(true);
                          handleThemeSelection("reddit");
                        }}
                      >
                        <FaRedditAlien size={iconSize} />
                      </button>
                    </Tooltip>
                    <Tooltip label="Twitter Theme" openDelay={1000}>
                      <button
                        id="twitter"
                        className={`${style.glowIcon} w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl p-2 cursor-pointer`}
                        onClick={() => {
                          handleThemeSelection("twitter");
                        }}
                      >
                        <BsTwitter size={iconSize} />
                      </button>
                    </Tooltip>
                  </div>
                  <div className="w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block lg:top-10 lg:mb-20"></div>

                  {
                    <div className="mt-14 w-full flex justify-center">
                      <div className=" w-full h-20 lg:h-0">
                        {themeLoading && !displayBanner && (
                          <div className="z-100 w-full absolute flex items-start justify-center h-screen">
                            <span
                              className={`${style.loader} top-0 lg:top-[-85px]  relative `}
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
                className={` w-full absolute h-screen flex items-center justify-center bg-black mt-[-100px] z-0`}
              >
                <span
                  className={`${style.loader} ${
                    displayBanner ? "opacity-100" : "opacity-0"
                  } relative top-5 `}
                ></span>
              </div>
            ) : (
              <div
                ref={themeRef}
                className="w-full absolute bg-black b mt-[-90px] z-[20]"
              >
                {theme === "music" && isBreakPoint && <MusicThemeMobile />}
                {theme === "music" && !isBreakPoint && <MusicThemeDesktop />}
                {theme === "reddit" && <RedditTheme />}
                {theme === "twitter" && (
                  <TwitterTheme
                    setProfileOpen={setProfileOpen}
                    profileOpen={profileOpen}
                  />
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

import Image from "next/image";
import { useRef, useState } from "react";
import Meme from "../../public/assets/meme.png";
import ParallaxBg from "../../public/assets/profile-bg.png";
import ParallaxFg from "../../public/assets/profile-padding.png";
import style from "../../styles/style.module.css";
import { useHeroDisplay, useThemeSelection } from "../../util/hooks";
import { RedditAwardsState } from "../../util/types";
import Banner from "../misc/Banner";
import LandingPage from "../misc/LandingPage";
import LoadingScreen from "../misc/LoadingScreen";
import Overlay from "../misc/Overlay";
import MusicThemeMobile from "../music/mobile/MusicTheme";
import AwardMobile from "../reddit/AwardMobile";
import RedditTheme from "../reddit/RedditTheme";
import ProfilePicture from "../twitter/ProfilePicture";
import TwitterTheme from "../twitter/TwitterTheme";
import NightSky from "./NightSky";
import ThemeSelection from "./ThemeSelection";
import Title from "./Title";

const MobileApp = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const themeSelectionRef = useRef<HTMLDivElement>(null);
  const [displayBanner, setDisplayBanner] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const [redditAwards, setRedditAwards] = useState<RedditAwardsState>({
    Summary: [],
    "Beyond Tech": [],
    Promoninja: [],
  });
  const [openAwardsMobile, setOpenAwardsMobile] = useState(false);
  const [section, setSection] = useState("about");
  const [heroImageLoaded, setHeroImageLoaded] = useState({
    background: false,
    foreground: false,
  });
  const { background, foreground } = heroImageLoaded;
  const { menuItems, handleThemeSelection, themeLoading, themes, theme, meme } =
    useThemeSelection();

  const { displayTitle, showBackdrop } = useHeroDisplay(wrapperRef, titleRef);
  const [profileOpen, setProfileOpen] = useState(false);
  const extendRef = useRef<HTMLDivElement>(null);

  const [tutorial, setTutorial] = useState(true);
  return (
    <>
      {/* <Button
        className="fixed"
        onClick={() => document.body.classList.toggle("debug-on")}
      >
        DEBUG
      </Button> */}
      <AwardMobile
        setAwardsArray={setRedditAwards}
        openAwardsMobile={openAwardsMobile}
        setOpenAwardsMobile={setOpenAwardsMobile}
        section={section}
        selectedTitle={selectedTitle}
      />
      {<Overlay openAwardsMobile={openAwardsMobile} />}

      <ProfilePicture
        setProfileOpen={setProfileOpen}
        profileOpen={profileOpen}
        theme={theme}
      />
      <Banner
        displayBanner={displayBanner}
        themes={themes}
        theme={theme}
        menuItems={menuItems}
        handleThemeSelection={handleThemeSelection}
        setProfileOpen={setProfileOpen}
        themeSelectionRef={themeSelectionRef}
        wrapperRef={wrapperRef}
        setDisplayBanner={setDisplayBanner}
        setSection = {setSection}
      />
      <div ref={wrapperRef} className="parallax">
        <LandingPage
          heroImageLoaded={heroImageLoaded}
          showBackdrop={showBackdrop}
        />
        <LoadingScreen heroImageLoaded={heroImageLoaded} />
        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Image
              src={ParallaxFg}
              alt="fg"
              className={`${
                background && foreground ? "block" : "hidden"
              } h-full absolute top-[10%] lg:h-fit w-full object-cover`}
              priority
              onLoad={() =>
                setHeroImageLoaded((prev) => ({ ...prev, foreground: true }))
              }
            />
          </div>
          <div className="parallax__layer parallax__layer--back">
            <Image
              src={ParallaxBg}
              alt="fg"
              className={` ${
                heroImageLoaded.background && heroImageLoaded.foreground
                  ? "block"
                  : "hidden"
              } h-full lg:h-fit w-full object-cover`}
              priority
              onLoad={() =>
                setHeroImageLoaded((prev) => ({ ...prev, background: true }))
              }
            />
          </div>
        </div>
        {background && foreground && (
          <div id="group2" ref={extendRef} className="parallax__group relative">
            <div className="parallax__layer parallax__layer--base "></div>
            <div className="title w-full flex items-center justify-center">
              {
                <div
                  className="w-10 h-1 top-[10px] bg-[#aaaaaa] rounded-2xl z-[999] relative"
                  onClick={() =>
                    titleRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                ></div>
              }
              <div
                ref={titleRef}
                className={`w-full mt-2 pt-14 top-0 absolute lg:px-24 z-10 text-[#dbdbdb] items-center justify-center flex flex-col gap-3 `}
              >
                <NightSky />
                <Title displayTitle={displayTitle} />
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <div className="w-full items-center justify-center lg:items-start flex flex-col lg:flex-row ">
                    <h1 className=" font-bold flex items-center  lg:mt-5 gap-2 relative left-2 justify-start text-xl lg:text-3xl min-w-[160px] lg:w-[40%] ">
                      {"Select portfolio theme"}
                    </h1>
                    <ThemeSelection
                      themes={themes}
                      handleThemeSelection={handleThemeSelection}
                      extendRef={extendRef}
                    />
                  </div>

                  <div className="w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block lg:top-10 lg:mb-20"></div>

                  {
                    <div className="mt-10 lg:mt-6 w-full flex justify-center">
                      <div className=" w-full h-20 lg:h-0">
                        {themeLoading && !displayBanner && (
                          <div className="z-100 w-full lg:w-9/12 absolute flex items-start justify-center">
                            <div className="flex flex-col items-center gap-8">
                              <div
                                className={`${style.loaderSpin} top-0 relative `}
                              ></div>
                              {/* <Image
                                src={Meme}
                                width={80}
                                height={80}
                                alt="meme"
                                priority
                                className={`${
                                  meme
                                    ? "opacity-0 animate-pulse"
                                    : "opacity-0"
                                }`}
                              /> */}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  }
                </div>
              </div>
              {themeLoading ? (
                <div
                  ref={themeRef}
                  className={`w-full absolute  bottom-[150px] z-[20] h-screen flex items-center justify-center`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`  ${style.loaderSpin} ${
                        displayBanner ? "opacity-100" : "opacity-0"
                      } relative border-2`}
                    ></div>
                    <Image
                      src={Meme}
                      width={80}
                      height={80}
                      alt="meme"
                      priority
                      className={`${
                        displayBanner && meme
                          ? "opacity-30 animate-pulse"
                          : "opacity-0"
                      } mt-8`}
                    />
                  </div>
                </div>
              ) : (
                <div
                  ref={themeRef}
                  className="w-full absolute bg-black b top-[480px] z-[20]"
                >
                  {theme === "music" && (
                    <MusicThemeMobile
                      tutorial={tutorial}
                      setTutorial={setTutorial}
                    />
                  )}
                  {theme === "reddit" && (
                    <RedditTheme
                      selectedTitle={selectedTitle}
                      setSelectedTitle={setSelectedTitle}
                      openAwards={setOpenAwardsMobile}
                      setSection={setSection}
                      section={section}
                      awardsArray={redditAwards}
                    />
                  )}
                  {theme === "twitter" && (
                    <TwitterTheme
                      setProfileOpen={setProfileOpen}
                      profileOpen={profileOpen}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileApp;

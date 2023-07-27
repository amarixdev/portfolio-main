import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import Profile from "../../public/assets/album-cover.jpg";
import ParallaxBg from "../../public/assets/profile-bg.png";
import ParallaxFg from "../../public/assets/profile-padding.png";
import style from "../../styles/style.module.css";
import {
  useHeroDisplay,
  useMediaQuery,
  useThemeSelection,
} from "../../util/hooks";
import { RedditAwardsState } from "../../util/types";
import Banner from "../misc/Banner";
import LandingPage from "../misc/LandingPage";
import LoadingScreen from "../misc/LoadingScreen";
import Overlay from "../misc/Overlay";
import AudioPlayer from "../music/AudioPlayerMobile";
import MusicThemeMobile from "../music/mobile/MusicTheme";
import AwardMobile from "../reddit/AwardMobile";
import RedditTheme from "../reddit/RedditTheme";
import AppPreviews from "../twitter/AppPreviews";
import ProfilePicture from "../twitter/ProfilePicture";
import TwitterTheme from "../twitter/TwitterTheme";
import NightSky from "./NightSky";
import ThemeSelection from "./ThemeSelection";
import Title from "./DesktopTitle";
import MobileTitle from "./MobileTitle";

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
    useThemeSelection(setSection);

  const { displayTitle, showBackdrop } = useHeroDisplay(wrapperRef, titleRef);
  const [displayTweet, setDisplayTweet] = useState(false);
  const [displaySection, setDisplaySection] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [previewsOpen, setPreviewsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState("0");
  const extendRef = useRef<HTMLDivElement>(null);
  const [tutorial, setTutorial] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLocked, setAudioLocked] = useState(false);
  const [unlockIcon, setUnlockIcon] = useState(false);
  const mdBreakPoint = useMediaQuery(767);
  const lockIconSize = mdBreakPoint ? 20 : 25;
  const playIconSize = mdBreakPoint ? 30 : 35;

  const togglePlay = () => {
    handleTap("play");
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [tapEffectLock, setTapEffectLock] = useState(false);
  const [tapEffectPlay, setTapEffectPlay] = useState(false);

  const handleTap = (btn: string) => {
    if (btn === "lock") {
      if (!audioLocked && !lockScreenHide) {
        setLockScreen(true);
      }
      setTapEffectLock(true);
      setTimeout(() => {
        setTapEffectLock(false);
      }, 150);
    }

    if (btn === "play") {
      setTapEffectPlay(true);
      setTimeout(() => {
        setTapEffectPlay(false);
      }, 150);
    }
  };

  const [lockScreen, setLockScreen] = useState(false);
  const [lockScreenCheck, setLockScreenCheck] = useState(false);
  const [lockScreenHide, setLockScreenHide] = useState(false);
  const lockScreenCheckRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* <Button
        className="fixed"
        onClick={() => document.body.classList.toggle("debug-on")}
      >
        DEBUG
      </Button> */}
      {theme === "music" || audioLocked ? (
        <AudioPlayer audioRef={audioRef} />
      ) : null}
      {lockScreenHide || (
        <div
          className={` ${
            lockScreen ? "opacity-100 z-[999]" : "opacity-0 z-0 "
          } select-none transition-all duration-300 ease-in-out min-h-screen w-full fixed backdrop-blur-lg bg-[#000000bb] flex items-center justify-center flex-col gap-8`}
        >
          <div className="flex flex-col justify-center items-center w-[80%] ">
            <p className="text-xl md:text-2xl font-semibold">Display Locked</p>
            <p className="text-[#aaaaaa] text-lg md:text-xl text-center">
              Audio player will persist across themes
            </p>
          </div>

          <Button
            p={6}
            onClick={() => {
              if (lockScreenCheck) {
                setLockScreenHide(true);
              }
              setLockScreen(false);
            }}
          >
            OK
          </Button>
          <div
            className="flex items-center relative top-[100px] gap-2"
            onClick={() => {
              if (lockScreenCheckRef.current) {
                lockScreenCheckRef.current.click();
              }
            }}
          >
            <p className=" font-medium ">Don&apos;t show again</p>
            <input
              onClick={() => {
                if (lockScreenCheckRef.current) {
                  lockScreenCheckRef.current.click();
                }
              }}
              type="checkbox"
              onChange={() => setLockScreenCheck((prev) => !prev)}
              ref={lockScreenCheckRef}
            />
          </div>
        </div>
      )}
      <AwardMobile
        setAwardsArray={setRedditAwards}
        openAwardsMobile={openAwardsMobile}
        setOpenAwardsMobile={setOpenAwardsMobile}
        section={section}
        selectedTitle={selectedTitle}
      />
      {<Overlay openAwardsMobile={openAwardsMobile} />}

      {/* Twitter Theme Only */}
      <ProfilePicture
        setProfileOpen={setProfileOpen}
        profileOpen={profileOpen}
        theme={theme}
      />

      <AppPreviews
        displayTweet={displayTweet}
        setDisplayTweet={setDisplayTweet}
        setPreviewsOpen={setPreviewsOpen}
        previewsOpen={previewsOpen}
        theme={theme}
        setImageIndex={setImageIndex}
        imageIndex={imageIndex}
      />
      <Banner
        themeLoading={themeLoading}
        displayBanner={displayBanner}
        setDisplayTweet={setDisplayTweet}
        themes={themes}
        theme={theme}
        menuItems={menuItems}
        handleThemeSelection={handleThemeSelection}
        profileOpen={profileOpen}
        previewsOpen={previewsOpen}
        setProfileOpen={setProfileOpen}
        setPreviewOpen={setPreviewsOpen}
        themeSelectionRef={themeSelectionRef}
        wrapperRef={wrapperRef}
        setDisplayBanner={setDisplayBanner}
        setSection={setSection}
        section={section}
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
        setIsPlaying={setIsPlaying}
      />
      {themeLoading && !audioLocked ? (
        <></>
      ) : (
        <div
          className={`${
            theme === "music" ? "block" : audioLocked ? "block" : "hidden"
          } ${
            previewsOpen ? "opacity-0 z-0" : "opacity-100  z-[9990]"
          } fixed bottom-0 overflow-hidden h-[65px] md:h-[80px] flex items-center justify-between px-4 border-t-[0.5px] border-[#353535ad] w-full bg-[#0000007c] backdrop-blur-md`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={Profile}
              alt="album-cover"
              width={60}
              priority
              className="rounded-xl p-2 md:min-w-[80px]"
            />
            <p className=" font-medium md:text-lg">Coding Music </p>
          </div>

          <button
            disabled={unlockIcon || lockScreen}
            className={` ${
              tapEffectLock
                ? "bg-[#84848487] scale-90"
                : "bg-[#00000000] scale-100"
            } min-h-[50px] transition-all duration-150 ease-in-out group rounded-full min-w-[50px] flex items-center justify-center `}
            onClick={() => {
              handleTap("lock");
              if (audioLocked && theme !== "music") {
                setUnlockIcon(true);
                setTimeout(() => {
                  setAudioLocked(false);
                  setUnlockIcon(false);
                  setIsPlaying(false);
                }, 750);
              } else {
                setAudioLocked((prev) => !prev);
              }
            }}
          >
            {unlockIcon ? (
              <FaUnlockAlt
                size={lockIconSize}
                className=" transition-transform duration-150"
              />
            ) : audioLocked ? (
              <FaLock
                size={lockIconSize}
                className={`${
                  tapEffectLock ? "scale-[0.85]" : "scale-100"
                } transition-transform duration-150`}
              />
            ) : (
              <FaUnlockAlt
                size={lockIconSize}
                className={`${
                  tapEffectLock ? "scale-[0.85]" : "scale-100"
                } transition-transform duration-150`}
              />
            )}
          </button>

          <button
            className={` ${
              tapEffectPlay
                ? "bg-[#84848487] scale-90"
                : "bg-[#00000000] scale-100"
            } min-h-[50px] transition-all duration-150 ease-in-out group rounded-full min-w-[50px] flex items-center justify-center `}
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <BsPauseFill
                size={playIconSize}
                className="group-active:scale-90 transition-transform duration-150"
              />
            ) : (
              <BsPlayFill
                size={playIconSize}
                className="group-active:scale-90 transition-transform duration-150"
              />
            )}
          </button>
        </div>
      )}
      <div
        ref={wrapperRef}
        className={`parallax ${
          background && foreground ? "overflow-y-auto" : "overflow-y-hidden"
        } `}
      >
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
              quality={50}
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
                <MobileTitle displayTitle={displayTitle} />
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <div className="w-full items-center justify-center lg:items-start flex flex-col lg:flex-row ">
                    <h1 className=" font-light flex items-center  lg:mt-5 gap-2 relative left-2 justify-start text-xl lg:text-3xl min-w-[160px] lg:w-[40%] ">
                      {"Select portfolio theme"}
                    </h1>
                    <ThemeSelection
                      themes={themes}
                      handleThemeSelection={handleThemeSelection}
                      extendRef={extendRef}
                      setIsPlaying={setIsPlaying}
                      audioLocked={audioLocked}
                    />
                  </div>

                  {themeLoading ? (
                    <span
                      className={`${style.loaderSlide} w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative  top-[38px]  `}
                    ></span>
                  ) : (
                    <div
                      className={` ${
                        theme || displayBanner || "opacity-0"
                      } w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative  top-[38px]`}
                    ></div>
                  )}
                </div>
              </div>
              {themeLoading ? (
                <div ref={themeRef}></div>
              ) : (
                <div
                  ref={themeRef}
                  className="w-full absolute bg-black b top-[480px] z-[20]"
                >
                  {theme === "music" && (
                    <MusicThemeMobile
                      tutorial={tutorial}
                      setTutorial={setTutorial}
                      setSection={setSection}
                      section={section}
                      setDisplaySection={setDisplaySection}
                      wrapperRef={wrapperRef}
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
                      wrapperRef={wrapperRef}
                      setDisplaySection={setDisplaySection}
                    />
                  )}
                  {theme === "twitter" && (
                    <TwitterTheme
                      setProfileOpen={setProfileOpen}
                      profileOpen={profileOpen}
                      previewsOpen={previewsOpen}
                      setPreviewsOpen={setPreviewsOpen}
                      setImageIndex={setImageIndex}
                      setSection={setSection}
                      section={section}
                      wrapperRef={wrapperRef}
                      setDisplaySection={setDisplaySection}
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

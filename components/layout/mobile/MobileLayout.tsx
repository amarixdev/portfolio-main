import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import Profile from "../../../public/images/music/album-cover.jpg";
import ParallaxBg from "../../../public/images/hero-bg.jpg";
import ParallaxFg from "../../../public/images/hero-fg.png";
import loaders from "../../../styles/loaders.module.css";

import {
  useHeroDisplay,
  useMediaQuery,
  useThemeSelection,
} from "../../../util/hooks";
import { RedditAwardsState } from "../../../util/types";
import Banner from "../../misc/Banner";
import ContactForm from "../../misc/ContactForm";
import LandingPage from "../../misc/LandingPage";
import LoadingScreen from "../../misc/LoadingScreen";
import Overlay from "../../misc/Overlay";
import AudioPlayer from "../../music/shared/AudioPlayerMobile";
import MusicThemeMobile from "../../music/mobile/MusicTheme";
import AwardMobile from "../../reddit/mobile/AwardMobile";
import RedditTheme from "../../reddit/mobile/RedditTheme";
import AppPreviews from "../../twitter/shared/AppPreviews";
import ProfilePicture from "../../twitter/shared/ProfilePicture";
import TwitterTheme from "../../twitter/mobile/TwitterTheme";
import MobileTitle from "./MobileTitle";
import ThemeSelection from "../shared/ThemeSelection";

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
  const [easeIn, setEaseIn] = useState(false);
  const { menuItems, handleThemeSelection, themeLoading, themes, theme, meme } =
    useThemeSelection(setSection, setEaseIn);

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    const playVideo = () => {
      if (video?.paused) {
        video?.play();
      }
    };
    wrapper?.addEventListener("scroll", playVideo);
    return () => wrapper?.removeEventListener("scroll", playVideo);
  }, [displayTitle]);

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

  const [tapEffect, setTapEffect] = useState({
    lock: false,
    play: false,
    chat: false,
  });

  const handleTap = (btn: string) => {
    if (btn === "lock") {
      setTapEffect((prev) => ({ ...prev, lock: true }));
      setTimeout(() => {
        setTapEffect((prev) => ({ ...prev, lock: false }));
      }, 150);
    }

    if (btn === "play") {
      setTapEffect((prev) => ({ ...prev, play: true }));
      setTimeout(() => {
        setTapEffect((prev) => ({ ...prev, play: false }));
      }, 150);
    }

    if (btn === "chat") {
      setTapEffect((prev) => ({ ...prev, chat: true }));
      setTimeout(() => {
        setTapEffect((prev) => ({ ...prev, chat: false }));
      }, 150);
    }
  };

  const [displayContact, setDisplayContact] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <>
      {/* <Button
        className="fixed"
        onClick={() => document.body.classList.toggle("debug-on")}
      >
        DEBUG
      </Button> */}
      <button
        onClick={() => {
          handleTap("chat");
          setDisplayContact((prev) => !prev);
        }}
        className={`${
          (displayTitle && theme) || displayContact
            ? "opacity-100"
            : "opacity-0 "
        } backdrop-blur-md fixed ${
          theme === "music" || audioLocked ? "bottom-20" : "bottom-5"
        } ${
          tapEffect.chat ? "scale-90 bg-[#29aaf4]" : "scale-100 bg-[#29aaf4a0]"
        } text-base font-medium shadow-2xl shadow-black transition-all duration-150 ease-in-out flex items-center justify-center right-5 w-16 h-10 rounded-full z-[9999]`}
      >
        <p onClick={() => setCopied(false)}>
          {displayContact ? (
            <AiOutlineClose size={20} />
          ) : (
            <LuMailPlus size={20} />
          )}
        </p>
      </button>
      <div
        className={`${
          displayContact ? "opacity-100 z-[9998] " : "opacity-0 z-0"
        } fixed h-full w-full transition-all duration-300 ease-in-out backdrop-blur-lg bg-[#000000cd] flex`}
      >
        <ContactForm copied={copied} setCopied={setCopied} />
      </div>
      {theme === "music" || audioLocked ? (
        <AudioPlayer audioRef={audioRef} />
      ) : null}

      <AwardMobile
        setAwardsArray={setRedditAwards}
        openAwardsMobile={openAwardsMobile}
        setOpenAwardsMobile={setOpenAwardsMobile}
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
        displayContact={displayContact}
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
            previewsOpen || displayContact
              ? "opacity-0 z-0"
              : "opacity-100  z-[9990]"
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
            disabled={unlockIcon}
            className={` ${
              tapEffect.lock
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
                  tapEffect.lock ? "scale-[0.85]" : "scale-100"
                } transition-transform duration-150`}
              />
            ) : (
              <FaUnlockAlt
                size={lockIconSize}
                className={`${
                  tapEffect.lock ? "scale-[0.85]" : "scale-100"
                } transition-transform duration-150`}
              />
            )}
          </button>

          <button
            className={` ${
              tapEffect.play
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
              } h-full absolute top-[10%]  w-full object-cover`}
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
              } h-full  w-full object-cover`}
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
                className={`w-full mt-2 pt-14 top-0 absolute z-10 text-[#dbdbdb] items-center justify-center flex flex-col gap-3 `}
              >
                <video
                  className="top w-full h-full top-0 absolute"
                  src={"/video/space-bg.mp4"}
                  muted
                  loop
                  playsInline
                  controls={false}
                  ref={videoRef}
                ></video>
                <MobileTitle displayTitle={displayTitle} />
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full mt-10 flex flex-col items-center justify-center`}
                >
                  <div className="w-full items-center justify-center flex flex-col ">
                    <h1 className=" font-light flex items-center gap-2 relative left-2 justify-start text-xl min-w-[160px] ">
                      {"Select portfolio theme"}
                    </h1>
                    <ThemeSelection
                      themes={themes}
                      handleThemeSelection={handleThemeSelection}
                      extendRef={extendRef}
                      setIsPlaying={setIsPlaying}
                      audioLocked={audioLocked}
                      videoRef={videoRef}
                    />
                  </div>

                  {themeLoading ? (
                    <span
                      className={`${loaders.loaderSlide} w-[90%] h-[1px] bg-[#444444] relative  top-[38px]  `}
                    ></span>
                  ) : (
                    <div
                      className={` ${
                        theme || displayBanner || "opacity-0"
                      } w-[90%] h-[1px] bg-[#444444] relative  top-[38px]`}
                    ></div>
                  )}
                </div>
              </div>
              {themeLoading ? (
                <div ref={themeRef}></div>
              ) : (
                <div
                  ref={themeRef}
                  className="w-full absolute top-[480px] z-[20]"
                >
                  {theme === "music" && (
                    <MusicThemeMobile
                      tutorial={tutorial}
                      setTutorial={setTutorial}
                      setSection={setSection}
                      section={section}
                      setDisplaySection={setDisplaySection}
                      wrapperRef={wrapperRef}
                      easeIn={easeIn}
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
                      audioLocked={audioLocked}
                      easeIn={easeIn}
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
                      audioLocked={audioLocked}
                      easeIn={easeIn}
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

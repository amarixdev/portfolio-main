import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import Meme from "../../public/assets/meme.png";
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
import MusicThemeDesktop from "../music/desktop/MusicTheme";
import AwardDesktop from "../reddit/AwardDesktop";
import RedditTheme from "../reddit/RedditTheme";
import ProfilePicture from "../twitter/ProfilePicture";
import TwitterTheme from "../twitter/TwitterTheme";
import NightSky from "./NightSky";
import ThemeSelection from "./ThemeSelection";
import Title from "./Title";
import AppPreviews from "../twitter/AppPreviews";

const DesktopApp = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const themeSelectionRef = useRef<HTMLDivElement>(null);
  const isBreakPoint = useMediaQuery(1023);
  const [displayBanner, setDisplayBanner] = useState(false);
  const [displaySection, setDisplaySection] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [previewsOpen, setPreviewsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState("0");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [heroImageLoaded, setHeroImageLoaded] = useState({
    background: false,
    foreground: false,
  });
  const { background, foreground } = heroImageLoaded;
  const [redditAwards, setRedditAwards] = useState<RedditAwardsState>({
    Summary: [],
    "Beyond Tech": [],
    Promoninja: [],
  });

  const {
    isOpen: isOpenAwardsDesktop,
    onClose: onCloseAwardsDesktop,
    onOpen: onOpenAwardsDesktop,
  } = useDisclosure();
  const [section, setSection] = useState("about");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { displayTitle, showBackdrop } = useHeroDisplay(wrapperRef, titleRef);
  const { menuItems, handleThemeSelection, themeLoading, themes, theme, meme } =
    useThemeSelection();
  const [displayTweet, setDisplayTweet] = useState(true);
  return (
    <div
      className={`${
        profileOpen && theme === "twitter" && "h-screen fixed z-[500]"
      } bg-black `}
    >
      <AwardDesktop
        setAwardsArray={setRedditAwards}
        onClose={onCloseAwardsDesktop}
        isOpen={isOpenAwardsDesktop}
        section={section}
        selectedTitle={selectedTitle}
      />
      <ProfilePicture
        setProfileOpen={setProfileOpen}
        profileOpen={profileOpen}
        theme={theme}
      />
      <AppPreviews
        setPreviewsOpen={setPreviewsOpen}
        previewsOpen={previewsOpen}
        displayTweet={displayTweet}
        setDisplayTweet={setDisplayTweet}
        theme={theme}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
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
        setSection={setSection}
        section={section}
        themeSelectionRef={themeSelectionRef}
        wrapperRef={wrapperRef}
        setDisplayBanner={setDisplayBanner}
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
      />
      <LoadingScreen heroImageLoaded={heroImageLoaded} />
      <div ref={wrapperRef} className={`${style.wrapper}`}>
        <LandingPage
          heroImageLoaded={heroImageLoaded}
          showBackdrop={showBackdrop}
        />
        <section>
          {
            <Image
              priority
              src={ParallaxBg}
              alt="bg"
              className={`${style.background} ${
                background && foreground ? "block" : "hidden"
              } h-full lg:h-fit `}
              onLoad={() =>
                setHeroImageLoaded((prev) => ({ ...prev, background: true }))
              }
            />
          }

          <div
            className={` absolute h-full lg:h-fit w-full xl:top-[-10%] 2xl:top-[-20%] 3xl:top-[-25%] ${
              style.display
            } ${background && foreground ? "block" : "hidden"}  `}
          >
            <Image
              src={ParallaxFg}
              alt="fg"
              priority
              className={` ${
                background && foreground ? "block" : "hidden"
              } object-cover relative z-0 h-full lg:h-fit w-full`}
              onLoad={() =>
                setHeroImageLoaded((prev) => ({ ...prev, foreground: true }))
              }
            />

            <div
              className={`w-full relative bottom-20  pt-10 bg-black flex flex-col justify-top items-center `}
            >
              <div className="absolute w-full top-3 pb-8 flex items-start justify-center">
                {isBreakPoint && (
                  <div
                    className="w-10 h-1 bg-[#aaaaaa] rounded-2xl z-[999] relative"
                    onClick={() =>
                      titleRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></div>
                )}
              </div>
              <div
                ref={titleRef}
                className={`w-full mt-2 relative lg:px-24 z-10   text-[#dbdbdb] items-center justify-center flex flex-col gap-3 `}
              >
                <NightSky />
                <Title displayTitle={displayTitle} />
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full mt-10 lg:mt-14 flex flex-col items-center justify-center`}
                >
                  <div className="w-full  flex-col lg:flex-row lg:justify-start flex items-center justify-center pb-[250px]">
                    <div className="w-full justify-start items-start flex gap-14 ">
                      <h1 className=" font-bold whitespace-nowrap flex items-center mt-5 gap-2 relative left-2 justify-start text-xl lg:text-3xl ">
                        {"Select portfolio theme"}
                      </h1>
                      <ThemeSelection
                        themes={themes}
                        handleThemeSelection={handleThemeSelection}
                      />
                    </div>
                  </div>
                  {themeLoading ? (
                    <span
                      className={`${style.loaderSlide} w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block bottom-[160px] lg:mb-20`}
                    ></span>
                  ) : (
                    <div className="w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block bottom-[160px] lg:mb-20"></div>
                  )}
                </div>
              </div>
            </div>
            {themeLoading ? (
              <div
                ref={themeRef}
                className={` ${
                  displayBanner ? "opacity-100" : "opacity-0"
                } w-full absolute h-screen flex items-center justify-center z-0`}
              ></div>
            ) : (
              <div
                ref={themeRef}
                className="w-full absolute bg-black b mt-[-230px] z-[20]"
              >
                {theme === "music" && (
                  <MusicThemeDesktop
                    section={section}
                    setSection={setSection}
                    wrapperRef={wrapperRef}
                    setDisplaySection={setDisplaySection}
                  />
                )}
                {theme === "reddit" && (
                  <RedditTheme
                    openAwards={onOpenAwardsDesktop}
                    setSection={setSection}
                    section={section}
                    selectedTitle={selectedTitle}
                    setSelectedTitle={setSelectedTitle}
                    awardsArray={redditAwards}
                    setDisplaySection={setDisplaySection}
                    wrapperRef={wrapperRef}
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
                    setDisplaySection={setDisplaySection}
                    wrapperRef={wrapperRef}
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

export default DesktopApp;

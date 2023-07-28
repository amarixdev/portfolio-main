import {
  Button,
  Input,
  Spinner,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import Title from "./DesktopTitle";
import AppPreviews from "../twitter/AppPreviews";
import DesktopTitle from "./DesktopTitle";
import Carousel from "../misc/Carousel";
import ContactForm from "../misc/ContactForm";

const DesktopApp = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const themeSelectionRef = useRef<HTMLDivElement>(null);
  const isBreakPoint = useMediaQuery(1023);
  const [displayBanner, setDisplayBanner] = useState(false);
  const [displaySection, setDisplaySection] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
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
    useThemeSelection(setSection);
  const [displayTweet, setDisplayTweet] = useState(true);
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={`${
        profileOpen && theme === "twitter" && "h-screen fixed z-[500]"
      } bg-black `}
    >
      <button
        onClick={() => setDisplayContact((prev) => !prev)}
        className={`${
          (displayTitle && theme) || displayContact
            ? "opacity-100"
            : "opacity-0 "
        } backdrop-blur-md active:scale-90 fixed bottom-5 font-normal shadow-2xl shadow-black text-lg bg-[#29aaf4c0] hover:bg-[#2fb3ff] cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center right-5 w-32 h-10 rounded-full z-[9999]`}
      >
        <p onClick={() => setCopied(false)}>
          {displayContact ? "Close" : "Contact"}{" "}
        </p>
      </button>

      <div
        className={`${
          displayContact
            ? "opacity-100 z-[9999] bottom-[80px] scale-100 "
            : "opacity-0 z-0 bottom-[-200px] scale-50"
        }  rounded-2xl fixed border-[0.5px] right-5 h-[550px] w-[400px] transition-all duration-300 ease-in-out  backdrop-blur-lg bg-[#0000008f] flex`}
      >
        {<Carousel displayContact={displayContact} />}
        <ContactForm copied={copied} setCopied={setCopied} />
      </div>
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
              quality={20}
            />
          }

          <div
            className={`absolute h-full lg:h-fit w-full xl:top-[-10%] 2xl:top-[-20%] 3xl:top-[-25%] ${
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
              className={`w-full relative bottom-24  pt-10 bg-gradient-to-tr bg-black flex flex-col justify-top items-center `}
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
                className={`w-full mt-2 relative z-10  pb-[250px]  text-[#dbdbdb] flex flex-col gap-3 `}
              >
                <NightSky />
                <DesktopTitle displayTitle={displayTitle} />
                <div
                  ref={themeSelectionRef}
                  className={`${
                    displayTitle ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in z-50 w-full flex flex-col items-center justify-center`}
                >
                  <div className="flex w-[30%] pb-10">
                    <div className="w-full justify-center items-center flex flex-col gap-14 ">
                      <h1 className="  font-light whitespace-nowrap flex items-center mt-5 gap-2 relative left-2 justify-start text-xl lg:text-3xl ">
                        {"Select portfolio theme"}
                      </h1>
                      <ThemeSelection
                        themes={themes}
                        handleThemeSelection={handleThemeSelection}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  {themeLoading ? (
                    <span
                      className={`${style.loaderSlide} ${
                        displayBanner ? "opacity-0" : "opacity-100"
                      } w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block`}
                    ></span>
                  ) : (
                    <div
                      className={` ${
                        displayBanner ? "opacity-0" : "opacity-100"
                      } w-[90%] lg:w-[80%] h-[1px] bg-[#444444] relative hidden lg:block `}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            {themeLoading ? (
              <div
                ref={themeRef}
                className={` ${
                  displayBanner ? "opacity-100" : "opacity-100"
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

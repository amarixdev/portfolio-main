import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Theme } from "./types";
import style from "../styles/style.module.css";
import { HiMusicNote } from "react-icons/hi";
import { FaRedditAlien } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(true);
  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);
      if (media.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }

      return () => media.removeEventListener("change", updateTarget);
    }
  }, [width, updateTarget]);

  return targetReached;
};

export const useHeroDisplay = (
  wrapperRef: RefObject<HTMLDivElement>,
  titleRef: RefObject<HTMLDivElement>
) => {
  const isBreakPoint = useMediaQuery(1023);
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [displayTitle, setDisplayTitle] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
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
    };

    wrapper?.addEventListener("scroll", handleScroll);
    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [titleRef, wrapperRef, isBreakPoint]);

  return { showBackdrop, displayTitle };
};

export const useThemeSelection = (
  setSection: Dispatch<SetStateAction<string>>,
  setEaseIn: (easeIn: boolean) => void
) => {
  const isBreakPoint = useMediaQuery(1023);
  const [theme, setTheme] = useState("");
  const [meme, setMeme] = useState(false);
  const iconSize = isBreakPoint ? 45 : 65;
  const iconSizeBanner = isBreakPoint ? 15 : 30;
  const themes: Theme = {
    music: {
      icon: <HiMusicNote size={iconSize} />,
      iconBanner: <HiMusicNote size={iconSizeBanner} />,
      style: `${style.glowIconBanner}`,
    },
    reddit: {
      icon: <FaRedditAlien size={iconSize} />,
      iconBanner: <FaRedditAlien size={iconSizeBanner} />,
      style: `${style.glowIconBanner}`,
    },
    twitter: {
      icon: <BsTwitter size={iconSize} />,
      iconBanner: <BsTwitter size={iconSizeBanner} />,
      style: `${style.glowIconBanner}`,
    },
  };
  const [themeLoading, setThemeLoading] = useState(false);
  const [menuItems, setMenuItems] = useState(["twitter", "music"]);

  const handleThemeSelection = (icon: string) => {
    if (theme === icon) {
      setThemeLoading(false);
      return;
    }
    setSection("about");
    setTheme(icon);
    setThemeLoading(true);
    const musicIcon = document.getElementById("music");
    const redditIcon = document.getElementById("reddit");
    const twitterIcon = document.getElementById("twitter");
    if (icon === "music") {
      setMeme(false);
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      musicIcon?.classList.remove(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "reddit") {
      setMeme(true);
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      redditIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      twitterIcon?.classList.add(`${style.deselectIcon}`);
    }

    if (icon === "twitter") {
      setMeme(false);
      setMenuItems(Object.keys(themes).filter((theme) => theme !== icon));
      twitterIcon?.classList.remove(`${style.deselectIcon}`);
      musicIcon?.classList.add(`${style.deselectIcon}`);
      redditIcon?.classList.add(`${style.deselectIcon}`);
    }

    setTimeout(
      () => {
        setThemeLoading(false);
        if (setEaseIn) {
          setEaseIn(true);
          setTimeout(() => {
            setEaseIn(false);
          }, 25);
        }
      },
      isBreakPoint ? 350 : 400
    );
  };

  return {
    menuItems,
    handleThemeSelection,
    themeLoading,
    themes,
    theme,
    meme,
  };
};

export const useDisplaySection = (
  wrapper: HTMLDivElement | null,
  section: HTMLDivElement | null,
  setDisplaySection: (displaySection: boolean) => void
) => {
  const isBreakPoint = useMediaQuery(1023);
  useEffect(() => {
    const handleScroll = () => {
      if (section) {
        const elementRect = section.getBoundingClientRect();
        setDisplaySection(
          isBreakPoint ? elementRect.top < 20 : elementRect.top < 50
        );
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  });
};

export const useContactIcon = (
  wrapper: HTMLDivElement | null,
  setDisplayContactIcon: (value: boolean) => void
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        wrapper &&
        wrapper.clientHeight !== undefined &&
        wrapper.scrollTop !== undefined &&
        wrapper.scrollHeight !== undefined &&
        wrapper.clientHeight + wrapper.scrollTop >= wrapper.scrollHeight - 20
      ) {
        if (setDisplayContactIcon) {
          setDisplayContactIcon(false);
        }
      } else {
        if (setDisplayContactIcon) {
          setDisplayContactIcon(true);
        }
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);
    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  });
};

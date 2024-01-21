import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { RefObject, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import loaders from "../../styles/loaders.module.css";
import { capitalizeString } from "../../util/functions";
import { useMediaQuery } from "../../util/hooks";
import { Theme } from "../../util/types";

const Banner = ({
  displayBanner,
  themes,
  theme,
  menuItems,
  handleThemeSelection,
  setProfileOpen,
  setPreviewOpen,
  wrapperRef,
  themeSelectionRef,
  setDisplayBanner,
  setDisplayTweet,
  profileOpen,
  previewsOpen,
  setSection,
  section,
  displaySection,
  setDisplaySection,
  themeLoading,
  setIsPlaying,
  displayContact,
}: {
  displayBanner: boolean;
  themes: Theme;
  theme: string;
  menuItems: string[];
  wrapperRef: RefObject<HTMLDivElement>;
  themeSelectionRef: RefObject<HTMLDivElement>;
  handleThemeSelection: (icon: string) => void;
  profileOpen: boolean;
  previewsOpen: boolean;
  setProfileOpen: (profileOpen: boolean) => void;
  setPreviewOpen: (previewOpen: boolean) => void;
  setDisplayBanner: (displayBanner: boolean) => void;
  setDisplayTweet: (displayTweet: boolean) => void;
  section: string;
  setSection: (section: string) => void;
  displaySection: boolean;
  setDisplaySection: (displaySection: boolean) => void;
  themeLoading: boolean;
  setIsPlaying?: (isPlaying: boolean) => void;
  displayContact?: boolean;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
      const breakPointMobile = 50;
      const breakPointDesktop = 110;

      if (themeSelectionRef.current) {
        const elementRect = themeSelectionRef.current.getBoundingClientRect();
        if (isBreakPoint) {
          setDisplayBanner(elementRect.bottom < breakPointMobile);
        } else {
          setDisplayBanner(elementRect.bottom < breakPointDesktop);
        }
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [themeSelectionRef, wrapperRef, setDisplayBanner, isBreakPoint, theme]);


  // const { setColorMode } = useColorMode();
  //   setColorMode("dark")


  const bannerStyle = `${
    displayBanner && !displayContact
      ? `z-[9998] opacity-100`
      : displayBanner && displayContact
      ? "z-[999] opacity-100"
      : " z-0 opacity-0"
  }  transition-all duration-150 ease-in-out  w-full bg-[#000000b0] backdrop-blur-md 
   border-b-[0.5px] border-[#aaaaaa50]
   py-3 lg:py-5 lg:gap-10 px-4 fixed flex justify-between  items-center`;

  return (
    <>
      {displayBanner && themeLoading && (
        <div
          className={`${
            isBreakPoint ? " top-[46.5px]" : "hidden"
          } min-w-full absolute z-[9999] `}
        >
          <span
            className={`${loaders.loaderSlide}  w-full h-[0.5px] bg-[#444444]`}
          ></span>
        </div>
      )}
      <div className={`${bannerStyle} select-none`}>
        {
          <h2
            onClick={() => {
              if (previewsOpen || profileOpen) {
                return;
              } else {
                wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-white font-extrabold text-sm xs:text-base lg:text-3xl text-center cursor-pointer "
          >
            Portfolio
          </h2>
        }
        <Menu>
          <div className="text-white flex items-center gap-4 lg:gap-6 cursor-pointer">
            <div
              className={`flex ${themes[theme]?.style} absolute ${
                displaySection && section === "about"
                  ? "right-[188px] lg:right-[265px]"
                  : displaySection && section === "projects"
                  ? "right-[203px] lg:right-[290px]"
                  : displaySection && section === "skills"
                  ? "right-[183px] lg:right-[250px]"
                  : "right-[132px] lg:right-[170px]"
              } transition-all duration-300 ease-in-out items-center justify-center w-8 h-8  xs:w-10 xs:h-10  lg:w-14 lg:h-14`}
            >
              {themes[theme]?.iconBanner}
            </div>
            {
              <h2
                className={`text-[#26a7de] ${
                  displaySection ? "opacity-100" : "opacity-0"
                }  absolute right-[132px] lg:right-[170px] transition-all duration-300 ease-in-out text-sm lg:text-2xl font-bold`}
              >
                {capitalizeString(section)}
              </h2>
            }
          </div>
          <MenuButton
            as={Button}
            rightIcon={<FiChevronDown />}
            className="lg:gap-2 lg:pr-10"
            fontSize={isBreakPoint ? "sm" : "xl"}
            fontWeight={"medium"}
          >
            Theme
          </MenuButton>
          <MenuList bgColor={"#101010"}>
            {menuItems.map((item) => (
              <MenuItem
                _hover={{ bgColor: "#333333" }}
                bgColor={"#101010"}
                key={item}
                onClick={() => {
                  if (themeSelectionRef.current && wrapperRef.current) {
                    const wrapperRect =
                      wrapperRef.current.getBoundingClientRect();
                    const elementRect =
                      themeSelectionRef.current.getBoundingClientRect();
                    const scrollPosition =
                      elementRect.top -
                      wrapperRect.top +
                      wrapperRef.current.scrollTop;

                    if (isBreakPoint) {
                      wrapperRef.current.scrollTo({
                        top: scrollPosition + 150,
                        behavior: "instant",
                      });
                    }
                    if (!isBreakPoint) {
                      wrapperRef.current.scrollTo({
                        top: scrollPosition - 260,
                        behavior: "instant",
                      });
                    }
                  }

                  setDisplaySection(false);
                  handleThemeSelection(item);
                  setProfileOpen(false);
                  if (!isBreakPoint) {
                    setDisplayTweet(true);
                  } else {
                    setDisplayTweet(false);
                  }
                  if (setIsPlaying) {
                    setIsPlaying(false);
                  }
                  setPreviewOpen(false);
                  setSection("about");
                }}
              >
                {capitalizeString(item)}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default Banner;

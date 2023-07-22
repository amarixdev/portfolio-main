import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RefObject, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { capitalizeString } from "../../util/functions";
import { Theme } from "../../util/types";
import { useMediaQuery } from "../../util/hooks";
import style from "../../styles/style.module.css";

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
}) => {
  const isBreakPoint = useMediaQuery(1023);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
      const breakPointMobile = 50;
      const breakPointDesktop = 350;
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

  const bannerStyle = `${
    displayBanner ? `z-[9998]  opacity-100` : " z-0 opacity-0"
  }  transition-all duration-150 ease-in-out  w-full bg-[#000000b0] backdrop-blur-md 
   border-b-[0.5px] border-[#aaaaaa50]
   py-3 lg:py-5 lg:gap-10 px-4 fixed flex justify-between  items-center`;

  return (
    <>
      {displayBanner && themeLoading && (
        <div
          className={`${
            isBreakPoint ? " top-[27px] xs:top-[30.5px]" : "top-[59px]"
          } min-w-full absolute z-[9999] `}
        >
          <span
            className={`${style.loaderSlide} w-full h-[0.5px] bg-[#444444]`}
          ></span>
        </div>
      )}
      <div className={`${bannerStyle} select-none`}>
        {
          <p
            onClick={() => {
              if (previewsOpen || profileOpen) {
                return;
              } else {
                wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="font-extrabold text-sm xs:text-base lg:text-3xl text-center cursor-pointer "
          >
            Portfolio
          </p>
        }
        <Menu>
          <MenuButton>
            <div className="flex items-center gap-4 lg:gap-6 cursor-pointer">
              <div
                className={`flex ${themes[theme]?.style} absolute ${
                  displaySection && section === "about"
                    ? "right-[154px] lg:right-[275px]"
                    : displaySection && section === "projects"
                    ? "right-[170px] lg:right-[300px]"
                    : displaySection && section === "skills"
                    ? "right-[150px] lg:right-[260px]"
                    : "right-24 lg:right-[180px]"
                } transition-all duration-300 ease-in-out items-center justify-center w-8 h-8  xs:w-10 xs:h-10  lg:w-14 lg:h-14`}
              >
                {themes[theme]?.iconBanner}
              </div>
              {
                <p
                  className={`text-[#26a7de] ${
                    displaySection ? "opacity-100" : "opacity-0"
                  }  absolute right-24 lg:right-[180px] transition-all duration-300 ease-in-out text-sm lg:text-2xl font-bold`}
                >
                  {capitalizeString(section)}
                </p>
              }
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
                      console.log("running...");
                      wrapperRef.current.scrollTo({
                        top: scrollPosition + 150,
                        behavior: "instant",
                      });
                    }
                    if (!isBreakPoint) {
                      console.log("running....");
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

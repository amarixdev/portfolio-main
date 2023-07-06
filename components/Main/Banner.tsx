import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { ReactElement, RefObject, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { capitalizeString } from "../../util/functions";
import { useMediaQuery } from "../../util/hooks";

interface Theme {
  [key: string]: { icon: ReactElement | null; style: string | null };
}

const Banner = ({
  displayBanner,
  themes,
  theme,
  menuItems,
  handleThemeSelection,
  setProfileOpen,
  wrapperRef,
  themeSelectionRef,
  setDisplayBanner,
}: {
  displayBanner: boolean;
  themes: Theme;
  theme: string;
  menuItems: string[];
  wrapperRef: RefObject<HTMLDivElement>;
  themeSelectionRef: RefObject<HTMLDivElement>;
  handleThemeSelection: (icon: string) => void;
  setProfileOpen: (profileOpen: boolean) => void;
  setDisplayBanner: (displayBanner: boolean) => void;
}) => {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
      if (themeSelectionRef.current) {
        const elementRect = themeSelectionRef.current.getBoundingClientRect();
        setDisplayBanner(elementRect.bottom < 140);
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [themeSelectionRef, wrapperRef, setDisplayBanner]);

  const isBreakPoint = useMediaQuery(1023);

  const bannerStyle = `${
    displayBanner ? "top-0" : "top-[-20%]"
  }  cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#000000b0] backdrop-blur-md border-b-[0.5px] border-[#aaaaaa50] py-3 lg:py-5 lg:gap-10 px-4 fixed z-[999] flex justify-between  items-center`;

  return (
    <div className={` ${bannerStyle} `}>
      <p
        onClick={() => {
          wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-extrabold text-sm xs:text-base lg:text-3xl text-center "
      >
        Portfolio
      </p>
      <Menu>
        <MenuButton>
          <div className="flex items-center gap-4 lg:gap-6">
            <div
              className={`flex ${themes[theme]?.style} rounded-full lg:rounded-2xl  items-center justify-center w-10 h-10  lg:w-14 lg:h-14`}
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
  );
};

export default Banner;

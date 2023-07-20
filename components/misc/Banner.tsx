import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RefObject, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { capitalizeString } from "../../util/functions";
import { Theme } from "../../util/types";
import { useMediaQuery } from "../../util/hooks";

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

  setSection: (section: string) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const handleScroll = () => {
      if (themeSelectionRef.current) {
        const elementRect = themeSelectionRef.current.getBoundingClientRect();
        if (isBreakPoint) {
          setDisplayBanner(elementRect.bottom < 140);
        } else {
          setDisplayBanner(elementRect.bottom < 350);
        }
      }
    };

    wrapper?.addEventListener("scroll", handleScroll);

    return () => {
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, [themeSelectionRef, wrapperRef, setDisplayBanner, isBreakPoint]);

  const bannerStyle = `${
    displayBanner ? `z-[9999]  opacity-100 ` : " z-0 opacity-0"
  }  transition-all duration-150 ease-in-out  w-full bg-[#000000b0] backdrop-blur-md border-b-[0.5px] border-[#aaaaaa50] py-3 lg:py-5 lg:gap-10 px-4 fixed flex justify-between  items-center`;

  return (
    <div className={`${bannerStyle} select-none `}>
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
              className={`flex ${themes[theme]?.style} rounded-full lg:rounded-2xl  items-center justify-center w-10 h-10  lg:w-14 lg:h-14`}
            >
              {themes[theme]?.iconBanner}
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
                if (!isBreakPoint) {
                  setDisplayTweet(true);
                } else {
                  setDisplayTweet(false);
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
  );
};

export default Banner;

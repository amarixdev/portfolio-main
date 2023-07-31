import {
  Menu,
  MenuButton,
  MenuList,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { BsCalendar3, BsLinkedin } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import Backdrop from "../../public/assets/twitter-backdrop2.jpg";
import Profile from "../../public/assets/twitter-profile.jpg";
import { useDisplaySection, useMediaQuery } from "../../util/hooks";
import Tweet from "./Tweet";
import About from "./About";
import Projects from "./Projects";
import Link from "next/link";
import Skills from "./Skills";

const TwitterTheme = ({
  profileOpen,
  setProfileOpen,
  previewsOpen,
  setPreviewsOpen,
  setImageIndex,
  setSection,
  section,
  setDisplaySection,
  wrapperRef,
  audioLocked,
}: {
  profileOpen: boolean;
  setProfileOpen: (profileOpen: boolean) => void;
  previewsOpen: boolean;
  setPreviewsOpen: (profileOpen: boolean) => void;
  setImageIndex: (imageIndex: string) => void;
  setSection: (section: string) => void;
  section: string;
  setDisplaySection: (tutorial: boolean) => void;
  wrapperRef: RefObject<HTMLDivElement>;
  audioLocked?: boolean;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const [following, setFollowing] = useState(false);
  const avatarSizeMain = isBreakPoint ? 70 : 120;
  const sectionRef = useRef<HTMLDivElement>(null);
  useDisplaySection(wrapperRef.current, sectionRef.current, setDisplaySection);
  const handleSelect = (section: string) => {
    setSection(section);
  };
  const verifiedIconSize = isBreakPoint ? 18 : 20;
  const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    setReloadFlag(true);
  }, []);

  return (
    <div className="flex">
      <div
        className={`${
          isBreakPoint && audioLocked ? "pb-40" : "pb-0"
        } w-full overflow-scroll flex items-center justify-center relative`}
      >
        <div
          className={`lg:w-[650px] 2xl:w-[900px] bg-[#060606]  ${
            profileOpen ? "opacity-0 z-0" : "opacity-100 z-50"
          } `}
        >
          <div className="h-[160px] sm:h-[190px] md:h-[220px] lg:h-[250px]">
            <Image
              src={Backdrop}
              alt="backdrop"
              className="object-cover object-top h-full w-full"
              priority
              loading="eager"
            />
          </div>
          <div className=" relative">
            <div className=" bottom-8 px-4 relative mt-1 flex w-full justify-between items-center">
              <Image
                src={Profile}
                alt="profile"
                height={avatarSizeMain}
                width={avatarSizeMain}
                className="rounded-full cursor-pointer relative"
                priority
                loading="eager"
                onClick={() => {
                  setProfileOpen(true);
                }}
              />
              {following ? (
                <Menu>
                  {
                    <MenuButton
                      as={"button"}
                      className={`px-4 rounded-2xl mt-10 lg:mt-2  border-[1px] border-[#aaaaaa86] "bg-black w-[100px] h-[30px] text-black `}
                    >
                      {" "}
                      <p className={` ${"text-white"} text-sm font-semibold`}>
                        Following
                      </p>
                    </MenuButton>
                  }
                  <MenuList
                    bgColor={"#1f1f20"}
                    border={"none"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"4px"}
                    cursor={"pointer"}
                    onClick={() => setFollowing(false)}
                  >
                    <p className="text-[#ff3300]">Unfollow @amarixdev</p>
                    <RiUserUnfollowLine color="#ff3300" />
                  </MenuList>
                </Menu>
              ) : (
                <button
                  className={` rounded-2xl 
           bg-white
             w-[100px] h-[30px] mt-10 lg:mt-2 `}
                  onClick={() => setFollowing((prev) => !prev)}
                >
                  <p className={` text-black text-sm font-semibold`}>
                    {"Follow"}
                  </p>
                </button>
              )}
            </div>
            <div className="px-4 w-full">
              <div className="flex flex-col items-start justify-center mt-[-20px]">
                <div className="flex items-center gap-1">
                  <h1 className="font-extrabold text-xl ">Amari DeVaughn</h1>
                  <MdVerified color="#26a7de" size={verifiedIconSize} />
                </div>
                <h3 className="text-[#777777]">@amarixdev</h3>
                <p className="text-sm lg:text-base">
                  Software Developer. Tar Heel{" "}
                </p>
                <div className="flex gap-2 w-full items-center mt-1">
                  <div className="flex gap-[2px] items-center">
                    <HiOutlineLocationMarker color="#777" size={13} />
                    <p className="text-xs lg:text-sm text-[#777777]">NC</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <AiOutlineLink color="#777" size={13} />
                    <p className="text-xs lg:text-sm text-[#26a7de]">
                      amaridevaughn.com
                    </p>
                  </div>
                  <div className="flex gap-[3px] items-center">
                    <BsCalendar3 color="#777" size={10} />
                    <p className="text-xs lg:text-sm text-[#777777]">
                      Joined October 1996
                    </p>
                  </div>
                </div>
                <div className="flex mt-2 gap-3">
                  <div className="flex items-center">
                    <p className="text-white font-bold mr-1 text-xs lg:text-sm">
                      999
                    </p>
                    <h1 className="text-xs lg:text-sm text-[#777777]">
                      Following
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white font-bold mr-1 text-xs lg:text-sm">
                      {following ? "1000" : "999"}
                    </p>
                    <h1 className="text-xs lg:text-sm text-[#777777]">
                      Followers
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <Tabs
              ref={sectionRef}
              position="relative"
              variant="unstyled"
              className="mt-3"
            >
              <TabList
                display={"flex"}
                w="full"
                justifyContent={"space-evenly"}
              >
                <Tab
                  onClick={() => handleSelect("about")}
                  className="lg:hover:bg-[#aaaaaa28] w-[80%]"
                >
                  <p
                    onClick={() => handleSelect("about")}
                    className={`${
                      section === "about" ? "text-white" : "text-[#777777]"
                    }  font-semibold text-xs xs:text-sm lg:text-base  active:text-[#222222] transition-colors duration-[400ms] ease-in-out`}
                  >
                    About
                  </p>
                </Tab>
                <Tab
                  margin={0}
                  onClick={() => handleSelect("projects")}
                  className="lg:hover:bg-[#aaaaaa28]  w-[80%]"
                >
                  {" "}
                  <p
                    onClick={() => handleSelect("projects")}
                    className={`${
                      section === "projects" ? "text-white" : "text-[#777777]"
                    } font-semibold text-xs xs:text-sm lg:text-base  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
                  >
                    Projects
                  </p>
                </Tab>
                <Tab
                  onClick={() => handleSelect("skills")}
                  className="lg:hover:bg-[#aaaaaa28] w-[80%]"
                >
                  {" "}
                  <p
                    className={`${
                      section === "skills" ? "text-white" : "text-[#777777]"
                    } font-semibold text-xs xs:text-sm lg:text-base  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
                  >
                    Skills
                  </p>
                </Tab>
              </TabList>
              <div className=" bg-[#aaaaaa71] min-h-[0.5px] relative"></div>

              <TabIndicator
                mt="-1.5px"
                height="3px"
                bg="#26a7de"
                borderRadius="5px"
              />
              <TabPanels>
                <TabPanel padding={0}>
                  <About />
                </TabPanel>
                <TabPanel padding={0}>
                  <Projects
                    previewsOpen={previewsOpen}
                    setPreviewsOpen={setPreviewsOpen}
                    setImageIndex={setImageIndex}
                  />
                </TabPanel>
                <TabPanel padding={0}>
                  <Skills />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-blue-500 hidden lg:block">test</div>
    </div>
  );
};

export default TwitterTheme;

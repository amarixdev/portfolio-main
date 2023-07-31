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
import { AiOutlineLink } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import DCategory from "../../public/assets/promoninja/desktop/desktop-category.png";
import DColor1 from "../../public/assets/promoninja/desktop/desktop-color1.png";
import DColor2 from "../../public/assets/promoninja/desktop/desktop-color2.png";
import DColor3 from "../../public/assets/promoninja/desktop/desktop-color3.png";
import DOffers from "../../public/assets/promoninja/desktop/desktop-offers.png";
import DOffers2 from "../../public/assets/promoninja/desktop/desktop-offers2.png";
import Backdrop from "../../public/assets/twitter-backdrop2.jpg";
import HomeIcon from "../../public/assets/home-test-PhotoRoom.png-PhotoRoom.png";
import MessageIcon from "../../public/assets/message-test-PhotoRoom.png-PhotoRoom.png";

import Profile from "../../public/assets/twitter-profile.jpg";
import { useDisplaySection, useMediaQuery } from "../../util/hooks";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import AppleProfile from "../../public/assets/apple-profile.jpeg";
import MicrosoftProfile from "../../public/assets/microsoft-profile.jpeg";
import GoogleProfile from "../../public/assets/google-profile.jpeg";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const TwitterThemeDesktop = ({
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
  setDisplayContact,
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
  setDisplayContact: (displayContact: any) => void;
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
  const media = [DColor1, DColor2, DColor3, DCategory, DOffers, DOffers2];
  useEffect(() => {
    setReloadFlag(true);
  }, []);

  const transformIndex = (index: number) => {
    return (index * -100).toString();
  };

  const trendingTopics = [
    { title: "Trending in United States", topic: "UFOs", tweets: "249K" },
    { title: "Music • Trending", topic: "SZA", tweets: "51.2K" },
    { title: "Sports • Trending", topic: "Skip Bayless", tweets: "4,532" },
    { title: "Science • Trending", topic: "#SuperMoon", tweets: "11.1K" },
    { title: "Technology • Trending", topic: "#AG1", tweets: "6,085" },
    { title: "Trending", topic: "X", tweets: "102K" },
  ];

  const whoToFollow = [
    { image: AppleProfile, title: "Apple" },
    { image: MicrosoftProfile, title: "Microsoft" },
    { image: GoogleProfile, title: "Google" },
  ];

  const [follow, setFollow] = useState<{
    [key: string]: { hover: boolean; following: boolean; mouseLeave: boolean };
  }>({
    apple: { hover: false, following: false, mouseLeave: false },
    microsoft: { hover: false, following: false, mouseLeave: false },
    google: { hover: false, following: false, mouseLeave: false },
  });
  return (
    <div className="flex w-full">
      <div className="w-full min-h-full max-w-[25%] border-r-[1px] clear-left flex justify-center">
        <div className=" select-none h-full  w-full flex flex-col items-center relative ">
          <div className=" flex flex-col items-start justify-center">
            <div className=" flex items-center relative  left-6 rounded-3xl">
              <FaTwitter size={35} />
            </div>
            <div className="px-3 py-2 mt-5 justify-start w-full flex items-center relative  hover:bg-[#1d1d1da4] rounded-3xl">
              <Image
                src={HomeIcon}
                alt="home"
                width={48}
                height={48}
                priority
              />

              <h2 className="text-2xl font-semibold bottom-[2px] relative ">
                Home
              </h2>
              <div className="h-[7px] w-[7px] bg-[#29aaf4] rounded-full absolute top-[9px] left-[44px]"></div>
            </div>
            <button
              onMouseDown={() => setDisplayContact((prev: any) => !prev)}
              className="px-3 py-2 cursor-pointer justify-start flex items-center relative cursor:pointer active:scale-95 transition-all duration-150 ease-in-out hover:bg-[#1d1d1da4] rounded-3xl"
            >
              <Image
                src={MessageIcon}
                alt="home"
                width={45}
                height={45}
                className="bg-[#ff000000]"
                priority
              />
              <h2 className="text-2xl font-semibold bottom-[2px] relative ">
                Message
              </h2>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isBreakPoint && audioLocked ? "pb-40" : "pb-0"
        } w-[40%] overflow-scroll flex items-center justify-center relative`}
      >
        <div
          className={`lg:w-full bg-[#060606] ${
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
      <div className="max-w-[30%] min-h-full border-l-[1px] flex justify-start pl-6">
        <div className="w-[90%] flex flex-col items-center gap-5">
          <div className="h-[200px] cursor-pointer w-[90%] rounded-3xl grid grid-cols-3 grid-rows-2 gap-1 overflow-hidden">
            {media.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  setImageIndex(transformIndex(index));
                  setPreviewsOpen(true);
                }}
              >
                <Image
                  alt={img.src}
                  src={img}
                  className="w-full h-full object-cover "
                  priority
                />
              </div>
            ))}
          </div>
          <div className="bg-[#16181C] rounded-3xl  w-[90%] flex flex-col p-4 pb-6">
            <h1 className="text-xl font-extrabold">What&apos;s happening</h1>
            {trendingTopics.map((trending) => (
              <div key={trending.topic}>
                <h3 className="pt-6 text-sm text-[#999]">{trending.title}</h3>
                <h1 className="font-bold">{trending.topic}</h1>
                <h3 className="text-sm text-[#999]">
                  {trending.tweets} Tweets
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-[#16181C] rounded-3xl pb-5 w-[90%] flex flex-col ">
            <h1 className="text-xl font-extrabold mb-6 p-4">Who to follow</h1>
            {whoToFollow.map((account) => (
              <div
                key={account.title}
                className="flex items-center justify-between py-2 p-4 hover:bg-[#23262cac]   transition-all duration-150 ease-in-out"
              >
                <div className="flex items-center w-full gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={account.image}
                    alt={account.title}
                    className="rounded-full"
                    priority
                  />
                  <div className="flex flex-col">
                    <div className="items-center flex gap-1">
                      <h3 className="font-bold">{account.title}</h3>
                      <MdVerified color="#ecc526" size={18} />
                    </div>
                    <h3 className="text-[#999]">{`@${account.title.toLowerCase()} `}</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setFollow((prev) => ({
                      ...prev,
                      [`${account.title.toLowerCase()}`]: {
                        ...prev[account.title.toLowerCase()],
                        following: !prev[account.title.toLowerCase()].following,
                      },
                    }));

                    if (follow[account.title.toLowerCase()].following) {
                      setFollow((prev) => ({
                        ...prev,
                        [`${account.title.toLowerCase()}`]: {
                          ...prev[account.title.toLowerCase()],
                          hover: false,
                          mouseLeave: false,
                        },
                      }));
                    }
                  }}
                  onMouseOver={() => {
                    if (follow[account.title.toLowerCase()].following) {
                      setFollow((prev) => ({
                        ...prev,
                        [`${account.title.toLowerCase()}`]: {
                          ...prev[account.title.toLowerCase()],
                          hover: true,
                        },
                      }));
                    }
                  }}
                  onMouseLeave={() => {
                    if (follow[account.title.toLowerCase()].following)
                      setFollow((prev) => ({
                        ...prev,
                        [`${account.title.toLowerCase()}`]: {
                          ...prev[account.title.toLowerCase()],
                          hover: false,
                          mouseLeave: true,
                        },
                      }));
                  }}
                  className={`${
                    follow[account.title.toLowerCase()].following &&
                    !follow[account.title.toLowerCase()].mouseLeave
                      ? "bg-white text-[#16181C]"
                      : follow[account.title.toLowerCase()].following &&
                        !follow[account.title.toLowerCase()].hover
                      ? "bg-[#16181C] border-[1px] border-[#999] text-white"
                      : follow[account.title.toLowerCase()].following &&
                        follow[account.title.toLowerCase()].mouseLeave
                      ? "bg-[#ff000013] border-[1px] border-[#6b0303] text-[red]"
                      : "bg-white text-[#16181C] hover:bg-[#e9e9e9]"
                  } cursor-pointer rounded-3xl text-sm py-[6px] px-4 font-bold `}
                >
                  {follow[account.title.toLowerCase()].following &&
                  !follow[account.title.toLowerCase()].hover
                    ? "Following"
                    : follow[account.title.toLowerCase()].mouseLeave &&
                      follow[account.title.toLowerCase()].hover
                    ? "Unfollow"
                    : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterThemeDesktop;

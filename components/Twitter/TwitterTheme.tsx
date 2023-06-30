import {
  Button,
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
import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Profile from "../../public/assets/twitter-profile.jpg";
import Backdrop from "../../public/assets/twitter-backdrop2.jpg";
import { RiUserUnfollowLine } from "react-icons/ri";
import { useMediaQuery } from "../../util/hooks";
import Tweet from "./Tweet";
import ProfilePicture from "./ProfilePicture";

const TwitterTheme = ({
  profileOpen,
  setProfileOpen,
}: {
  profileOpen: boolean;
  setProfileOpen: (profileOpen: boolean) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const [following, setFollowing] = useState(false);
  const [section, setSection] = useState("about");
  const avatarSizeMain = isBreakPoint ? 70 : 120;

  const handleSelect = (section: string) => {
    setSection(section);
  };

  return (
    <>
      <div
        className={`lg:px-[160px] xl:px-[280px] bg-[#060606]  ${
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
        <div className="bottom-5 relative">
          <div className=" px-4 relative mt-1 flex w-full justify-between items-center">
            <Image
              src={Profile}
              alt="profile"
              height={avatarSizeMain}
              width={avatarSizeMain}
              className="rounded-full cursor-pointer"
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
                    className={`px-4 rounded-2xl  border-[1px] border-[#aaaaaa86] "bg-black w-[100px] h-[30px] text-black `}
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
             w-[100px] h-[30px]`}
                onClick={() => setFollowing((prev) => !prev)}
              >
                <p className={` text-black text-sm  font-semibold`}>
                  {"Follow"}
                </p>
              </button>
            )}
          </div>
          <div className="px-4 w-full">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center gap-1">
                <h1 className="font-extrabold text-xl">Amari DeVaughn</h1>
                <MdVerified color="#26a7de" />
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
          <Tabs position="relative" variant="unstyled" className="mt-3">
            <TabList display={"flex"} w="full" justifyContent={"space-evenly"}>
              <Tab
                onClick={() => handleSelect("about")}
                className="lg:hover:bg-[#aaaaaa28]"
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
                onClick={() => handleSelect("experience")}
                className="lg:hover:bg-[#aaaaaa28]"
              >
                {" "}
                <p
                  onClick={() => handleSelect("experience")}
                  className={`${
                    section === "experience" ? "text-white" : "text-[#777777]"
                  } font-semibold text-xs xs:text-sm lg:text-base  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
                >
                  Experience
                </p>
              </Tab>
              <Tab
                onClick={() => handleSelect("skills")}
                className="lg:hover:bg-[#aaaaaa28]"
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
              <TabPanel>
                <div className="flex flex-col gap-2">
                  <Tweet title="summary">
                    <p className="text-xs xs:text-sm lg:text-base mt-4">
                      A software developer based in North Carolina. I attended
                      the University of North Carolina - Chapel Hill from 2015
                      to 2019, where I competed in track and field, was a
                      pre-dental student, and medical researcher. I was grateful
                      to receive an invitation to attend Dental School in 2021,
                      but after long consideration and some time off during the
                      pandemic I ultimately decided healthcare was not for me.{" "}
                    </p>
                    <p className="text-xs xs:text-sm lg:text-base mt-4">
                      Since the career change, I have worked on a number of web
                      applications for both myself and others. As a software
                      developer, I get enjoyment out out of seeing my ideas
                      manifest at every scale and take pride in devoting my full
                      attention and energy to each project I undertake. Thank
                      you for taking some time to learn more about me and I look
                      forward to connecting.
                    </p>
                  </Tweet>
                  <Tweet title="beyondTech">
                    <div className="text-xs xs:text-sm flex flex-col gap-2 lg:text-base mt-4">
                      <p>
                        Published co-author in the American Heart Association
                      </p>
                      <p>Atlantic Coast Conference (ACC) Silver Medalist</p>
                      <p>Nature Enthusiast </p>
                    </div>
                  </Tweet>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col gap-2">
                  <Tweet title="summary">
                    <p className="text-xs xs:text-sm lg:text-base mt-4">
                      A software developer based in North Carolina. I attended
                      the University of North Carolina - Chapel Hill from 2015
                      to 2019, where I competed in track and field, was a
                      pre-dental student, and medical researcher. I was grateful
                      to receive an invitation to attend Dental School in 2021,
                      but after long consideration and some time off during the
                      pandemic I ultimately decided healthcare was not for me.{" "}
                    </p>
                    <p className="text-xs xs:text-sm lg:text-base mt-4">
                      Since the career change, I have worked on a number of web
                      applications for both myself and others. As a software
                      developer, I get enjoyment out out of seeing my ideas
                      manifest at every scale and take pride in devoting my full
                      attention and energy to each project I undertake. Thank
                      you for taking some time to learn more about me and I look
                      forward to connecting.
                    </p>
                  </Tweet>
                  <Tweet title="beyondTech">
                    <ul className="text-xs xs:text-sm lg:text-base list-disc mt-4">
                      <li>
                        Published co-author in the American Heart Association
                      </li>
                      <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
                      <li>Nature Enthusiast </li>
                    </ul>
                  </Tweet>
                </div>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default TwitterTheme;

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
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Profile from "../public/assets/profile.jpg";
import { RiUserUnfollowLine } from "react-icons/ri";

const Twitter = () => {
  const [following, setFollowing] = useState(true);

  const [section, setSection] = useState("");

  const handleSelect = (section: string) => {
    setSection(section);
  };

  return (
    <div className="h-screen bg-[#060606]">
      <div className="h-[110px] bg-[#26a7de]"></div>
      <div className="px-4 bottom-5 relative">
        <div className="relative mt-1 flex w-full justify-between items-center">
          <Image
            src={Profile}
            alt="profile"
            height={70}
            width={70}
            className="rounded-full"
          />
          {following ? (
            <Menu>
              {
                <MenuButton
                  as={"button"}
                  className={` rounded-2xl  border-[0.5px] border-[#aaaaaa] "bg-black w-[100px] h-[30px] text-black `}
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
              <p className={` text-black text-sm font-semibold`}>{"Follow"}</p>
            </button>
          )}
        </div>
        <div className="w-full">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center gap-1">
              <h1 className="font-extrabold text-xl">Amari DeVaughn</h1>
              <MdVerified color="#26a7de" />
            </div>
            <h3 className="text-[#777777]">@amarixdev</h3>
            <p className="text-sm">Software Developer. Tar Heel </p>
            <div className="flex gap-2 w-full items-center mt-1">
              <div className="flex gap-[2px] items-center">
                <HiOutlineLocationMarker color="#777" size={13} />
                <p className="text-xs text-[#777777]">NC</p>
              </div>
              <div className="flex gap-[2px] items-center">
                <AiOutlineLink color="#777" size={13} />
                <p className="text-xs text-[#26a7de]">amaridevaughn.com</p>
              </div>
              <div className="flex gap-[3px] items-center">
                <BsCalendar3 color="#777" size={10} />
                <p className="text-xs text-[#777777]">Joined October 1996</p>
              </div>
            </div>
            <div className="flex mt-2 gap-3">
              <div className="flex items-center">
                <p className="text-white font-bold mr-1 text-xs">999</p>
                <h1 className="text-xs text-[#777777]">Following</h1>
              </div>
              <div className="flex items-center">
                <p className="text-white font-bold mr-1 text-xs">
                  {following ? "1000" : "999"}
                </p>
                <h1 className="text-xs text-[#777777]">Followers</h1>
              </div>
            </div>
          </div>
        </div>
        <Tabs position="relative" variant="unstyled" className="mt-3">
          <TabList display={"flex"} w="full" justifyContent={"space-evenly"}>
            <Tab onClick={() => handleSelect("summary")}>
              <p
                className={`${
                  section === "summary" ? "text-white" : "text-[#777777]"
                } font-semibold text-xs  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
              >
                Summary
              </p>
            </Tab>
            <Tab onClick={() => handleSelect("experience")}>
              {" "}
              <p
                className={`${
                  section === "experience" ? "text-white" : "text-[#777777]"
                } font-semibold text-xs  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
              >
                Experience
              </p>
            </Tab>
            <Tab onClick={() => handleSelect("skills")}>
              {" "}
              <p
                className={`${
                  section === "skills" ? "text-white" : "text-[#777777]"
                } font-semibold text-xs  active:text-[#222222] transition-all duration-[400ms] ease-in-out`}
              >
                Skills
              </p>
            </Tab>
          </TabList>
          <div className="w-full bg-[#aaaaaa71] min-h-[0.5px] relative"></div>

          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="#26a7de"
            borderRadius="5px"
          />
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Twitter;

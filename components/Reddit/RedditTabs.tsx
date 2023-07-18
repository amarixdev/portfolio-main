import { Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../util/hooks";
import { BsPerson } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { GrGraphQl } from "react-icons/gr";

const RedditTabs = ({
  section,
  handleSelect,
}: {
  section: string;
  handleSelect: (value: string) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const justifyContent = isBreakPoint ? "space-between" : "start";
  const paddingY = isBreakPoint ? 1 : 3;
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    switch (section) {
      case "about":
        setTabIndex(0);
      case "projects":
        setTabIndex(1);
      case "skills":
        setTabIndex(2);
      default:
        setTabIndex(0);
    }
  }, [section]);
  return (
    <>
      <Tabs
        position="relative"
        minW={"100%"}
        variant="unstyled"
        className="mt-3 bg-[#151515] text-[#808080] font-semibold border-b-[0.5px] lg:border-b-0 border-[#3a3a3aba]"
        defaultIndex={tabIndex}
      >
        <TabList
          display={"flex"}
          w="full"
          justifyContent={justifyContent}
          className="rounded-sm px-10 lg:px-0 py-2 lg:py-0 lg:border-[1px] hover:lg:border-[#777]"
        >
          <Tab px={1} py={paddingY} onClick={() => handleSelect("about")}>
            <div
              className={` ${
                section === "about" && "lg:bg-[#4d4d4d] lg:hover:bg-[#4d4d4d]"
              } flex items-center rounded-3xl lg:hover:bg-[#2c2c2c] text-sm lg:font-bold  lg:px-2 lg:py-1 gap-1`}
            >
              {isBreakPoint || (
                <IoPersonCircleOutline
                  size={25}
                  color={section === "about" ? "#d6d6d6" : "#777777"}
                />
              )}
              <p
                className={`${
                  section === "about" ? "text-[#d6d6d6]" : "text-[#777777]"
                } transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
              >
                About
              </p>
            </div>
          </Tab>
          <Tab px={1} py={paddingY} onClick={() => handleSelect("projects")}>
            {" "}
            <div
              className={` ${
                section === "projects" &&
                "lg:bg-[#4d4d4d] lg:hover:bg-[#4d4d4d]"
              } flex items-center rounded-3xl lg:font-bold text-sm  lg:hover:bg-[#2c2c2c] lg:px-2 lg:py-1 gap-1`}
            >
              {isBreakPoint || (
                <HiOutlineCodeBracketSquare
                  size={25}
                  color={section === "projects" ? "#d6d6d6" : "#777777"}
                />
              )}
              <p
                className={`${
                  section === "projects" ? "text-[#d6d6d6]" : "text-[#777777]"
                } transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
              >
                Projects
              </p>
            </div>
          </Tab>
          <Tab px={1} py={paddingY} onClick={() => handleSelect("skills")}>
            {" "}
            <div
              className={` ${
                section === "skills" && "lg:bg-[#4d4d4d] lg:hover:bg-[#4d4d4d]"
              } lg:font-bold text-sm flex items-center rounded-3xl lg:hover:bg-[#2c2c2c] lg:px-2 lg:py-1 gap-1`}
            >
              {isBreakPoint || (
                <GrGraphQl
                  size={23}
                  color={section === "skills" ? "#d6d6d6" : "#777777"}
                />
              )}
              <p
                className={`${
                  section === "skills" ? "text-[#d6d6d6]" : "text-[#777777]"
                } font-semibold transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
              >
                Skills
              </p>
            </div>
          </Tab>
        </TabList>
        {isBreakPoint && (
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="#26a7de"
            borderRadius="5px"
          />
        )}
      </Tabs>
    </>
  );
};

export default RedditTabs;

import { Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../util/hooks";

type Props = {};

const RedditTabs = ({
  section,
  handleSelect,
}: {
  section: string;
  handleSelect: (value: string) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const justifyContent = isBreakPoint ? "space-evenly" : "start";

  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    switch (section) {
      case "about":
        setTabIndex(0);
      case "experience":
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
        w={"100%"}
        variant="unstyled"
        className="mt-3 bg-[#151515] text-[#808080] font-semibold "
        defaultIndex={tabIndex}
      >
        <TabList
          display={"flex"}
          w="full"
          justifyContent={justifyContent}
          className="rounded-sm py-2 lg:py-0 lg:border-[1px] hover:lg:border-[#777]"
        >
          <Tab onClick={() => handleSelect("about")}>
            <p
              className={`${
                section === "about" ? "text-white" : "text-[#777777]"
              }  rounded-lg lg:p-2 font-semibold transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
            >
              About
            </p>
          </Tab>
          <Tab onClick={() => handleSelect("experience")}>
            {" "}
            <p
              className={`${
                section === "experience" ? "text-white" : "text-[#777777]"
              } font-semibold transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
            >
              Experience
            </p>
          </Tab>
          <Tab onClick={() => handleSelect("skills")}>
            {" "}
            <p
              className={`${
                section === "skills" ? "text-white" : "text-[#777777]"
              } font-semibold  transition-colors lg:transition-none duration-[400ms] lg:duration-0 ease-in-out`}
            >
              Skills
            </p>
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

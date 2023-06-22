import { Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Props = {};

const RedditTabs = ({
  section,
  handleSelect,
}: {
  section: string;
  handleSelect: (value: string) => void;
}) => {
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
          justifyContent={"space-evenly"}
          className="rounded-sm py-2 lg:py-4 lg:border-2"
        >
          <Tab onClick={() => handleSelect("about")}>
            <p
              className={`${
                section === "about" ? "text-white" : "text-[#777777]"
              } lg:text-xl font-semibold transition-all duration-[400ms] ease-in-out`}
            >
              About
            </p>
          </Tab>
          <Tab onClick={() => handleSelect("experience")}>
            {" "}
            <p
              className={`${
                section === "experience" ? "text-white" : "text-[#777777]"
              } lg:text-xl font-semibold  transition-all duration-[400ms] ease-in-out`}
            >
              Experience
            </p>
          </Tab>
          <Tab onClick={() => handleSelect("skills")}>
            {" "}
            <p
              className={`${
                section === "skills" ? "text-white" : "text-[#777777]"
              } lg:text-xl font-semibold transition-all duration-[400ms] ease-in-out`}
            >
              Skills
            </p>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#26a7de"
          borderRadius="5px"
        />
      </Tabs>
    </>
  );
};

export default RedditTabs;

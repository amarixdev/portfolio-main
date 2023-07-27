import Image from "next/image";
import { RefObject, memo, useEffect, useRef, useState } from "react";
import { BsFire, BsLinkedin } from "react-icons/bs";
import Avatar from "../../public/assets/reddit-avatar.png";

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import Grid from "../../public/assets/grid.png";
import { RedditAwardsState } from "../../util/types";
import About from "./About";
import Projects from "./Projects";
import RedditTabs from "./RedditTabs";
import { useDisplaySection, useMediaQuery } from "../../util/hooks";
import Skills from "./Skills";
import { GrGraphQl } from "react-icons/gr";

const RedditTheme = ({
  openAwards,
  section,
  setSection,
  awardsArray,
  selectedTitle,
  setSelectedTitle,
  wrapperRef,
  setDisplaySection,
}: {
  openAwards: any;
  section: string;
  setSection: (value: string) => void;
  setSelectedTitle: (value: string) => void;
  selectedTitle: string;
  awardsArray: RedditAwardsState;
  setDisplaySection: (tutorial: boolean) => void;
  wrapperRef: RefObject<HTMLDivElement>;
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleSelect = (section: string) => {
    setSection(section);
  };

  const isBreakPoint = useMediaQuery(1023);
  const sectionRef = useRef<HTMLDivElement>(null);
  useDisplaySection(wrapperRef.current, sectionRef.current, setDisplaySection);
  const socialIconSize = isBreakPoint ? 30 : 50;

  const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    setReloadFlag(true);
  }, []);

  return (
    <>
      <div className="flex min-w-full relative items-center justify-center overflow-hidden pb-20 lg:pb-0 ">
        <div className=" w-full absolute top-0 z-[100] bg-gradient-to-b from-black  via-[#04385fd9] to-[#00000000] h-[110px]"></div>
        <Image
          src={Grid}
          priority
          alt="backdrop-grid"
          className="absolute top-0  w-full h-[280px]"
        />

        {openDrawer && (
          <div className="h-screen bg-[#0000006b] fixed z-[150] w-full"></div>
        )}
        {/* <RedditGrid /> */}
        <div className={`flex flex-col relative pt-4`}>
          <Image
            height={180}
            width={180}
            alt="avatar"
            src={Avatar}
            priority
            className={`relative z-[100]`}
          />
          <h1 className="text-2xl font-bold text-white px-4 relative bottom-2">
            Amari DeVaughn
          </h1>
          <p className="px-4 text-xs lg:text-sm lg:font-semibold">
            u/amarixdev&#x2022; 2,132 karma &#x2022; Oct 1, 2016
          </p>
          <div
            ref={sectionRef}
            className="w-screen sm:w-[650px] mt-6 flex flex-col bg-black relative"
          >
            <RedditTabs section={section} handleSelect={handleSelect} />
            <>
              <div
                className={`flex items-center w-full gap-1 py-3 ${
                  section === "skills" ? "pl-4" : "pl-2"
                } bg-[#010101]`}
              >
                {section === "skills" || <BsFire color="#aaaaaa" size={18} />}
                <div className="flex items-center gap-1">
                  <p className=" text-xs font-bold text-[#aaaaaa]">
                    {section === "skills" ? "TROPHIES" : "HOT POSTS"}
                  </p>
                </div>
              </div>

              {section === "about" ? (
                <About
                  awardsArray={awardsArray}
                  openAwards={openAwards}
                  setSection={setSection}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              ) : section === "projects" ? (
                <Projects
                  awardsArray={awardsArray}
                  openAwards={openAwards}
                  setSection={setSection}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              ) : section === "skills" ? (
                <Skills
                  awardsArray={awardsArray}
                  openAwards={openAwards}
                  setSection={setSection}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              ) : (
                <About
                  awardsArray={awardsArray}
                  openAwards={openAwards}
                  setSection={setSection}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              )}
            </>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-10 lg:pt-5">
        <h1 className="font-extrabold text-2xl text-[#555555]">Contact Me</h1>
        <div
          className={` pb-[200px] lg:pb-[80px] w-[40%] lg:w-[20%] flex items-center justify-evenly`}
        >
          <Link
            href={"https://www.linkedin.com/in/amari-devaughn-319582191/"}
            target="_blank"
          >
            <BsLinkedin size={socialIconSize} color="#555555" />
          </Link>
          <AiOutlineMail size={socialIconSize} color="#555555" />
        </div>
      </div>
    </>
  );
};

export default memo(RedditTheme);

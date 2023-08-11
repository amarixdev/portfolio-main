import Image from "next/image";
import { RefObject, memo, useEffect, useRef, useState } from "react";
import { BsFire } from "react-icons/bs";
import Avatar from "../../../public/images/reddit/redditstyle1.png";

import Grid from "../../../public/images/reddit/grid.png";
import { useDisplaySection, useMediaQuery } from "../../../util/hooks";
import { RedditAwardsState } from "../../../util/types";
import About from "../shared/About";
import Projects from "../shared/Projects";
import RedditTabs from "../shared/RedditTabs";
import Skills from "../shared/Skills";
import { getCurrentDate } from "../../../util/functions";

const RedditTheme = ({
  openAwards,
  section,
  setSection,
  awardsArray,
  selectedTitle,
  setSelectedTitle,
  wrapperRef,
  setDisplaySection,
  audioLocked,
  easeIn,
}: {
  openAwards: any;
  section: string;
  setSection: (value: string) => void;
  setSelectedTitle: (value: string) => void;
  selectedTitle: string;
  awardsArray: RedditAwardsState;
  setDisplaySection: (tutorial: boolean) => void;
  wrapperRef: RefObject<HTMLDivElement>;
  audioLocked?: boolean;
  easeIn: boolean;
}) => {
  const handleSelect = (section: string) => {
    setSection(section);
  };

  const isBreakPoint = useMediaQuery(1023);
  const sectionRef = useRef<HTMLDivElement>(null);
  useDisplaySection(wrapperRef.current, sectionRef.current, setDisplaySection);

  const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    setReloadFlag(true);
  }, []);

  return (
    <>
      <div
        className={`${
          easeIn ? "opacity-20" : "opacity-100"
        } transition-all duration-200 ease-in-out  bg-gradient-to-b from-black flex min-w-full relative items-center justify-center overflow-hidden ${
          isBreakPoint && audioLocked ? "pb-40" : "pb-24"
        } `}
      >
        <div className="w-full  absolute top-0 z-[100] bg-gradient-to-b from-black via-[#04385fd9] to-[#00000000] h-[90px]"></div>
        <Image
          src={Grid}
          priority
          alt="backdrop-grid"
          className="absolute top-0 w-full h-[280px]"
          placeholder="blur"
        />
        <div className="absolute top-[140px] w-full bg-gradient-to-b from-[#00000000] to-black h-28"></div>

        <div className={`flex flex-col relative `}>
          <Image
            height={160}
            width={160}
            alt="avatar"
            src={Avatar}
            priority
            className={`relative z-[100]`}
            placeholder="blur"
          />
          <h1 className="text-2xl font-bold text-white px-4 relative bottom-2 ">
            Amari DeVaughn
          </h1>
          <p className="px-4 text-xs ">
            {` u/amarixdev • 2,132 karma • ${getCurrentDate().fullDate}`}
          </p>
          <div
            ref={sectionRef}
            className="w-screen mt-6 flex flex-col bg-black relative"
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
    </>
  );
};

export default memo(RedditTheme);

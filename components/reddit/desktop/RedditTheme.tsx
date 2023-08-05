import Image from "next/image";
import { RefObject, memo, useEffect, useRef, useState } from "react";
import { BsFillPersonFill, BsFire } from "react-icons/bs";
import Avatar1 from "../../../public/images/reddit/redditstyle1.png";
import Avatar2 from "../../../public/images/reddit/redditstyle2.png";
import Avatar3 from "../../../public/images/reddit/redditstyle3.png";

import { GiCakeSlice, GiTShirt, GiTwirlyFlower } from "react-icons/gi";
import Grid from "../../../public/images/reddit/grid-desktop.png";
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
  const [openDrawer, setOpenDrawer] = useState(false);
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

  const avatarStyles = [Avatar1, Avatar2, Avatar3];
  const [styleIndex, setStyleIndex] = useState(0);

  const changeStyle = () => {
    if (styleIndex === 2) {
      setStyleIndex(0);
    } else {
      setStyleIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`${
        easeIn ? "opacity-40" : "opacity-100"
      } transition-all duration-200 ease-in`}
    >
      <div
        className={` bg-gradient-to-b from-black flex min-w-full  justify-center items-center relative overflow-hidden pb-0 `}
      >
        {openDrawer && (
          <div className="h-screen bg-[#0000006b]  fixed z-[150] w-full"></div>
        )}
        <div className={`flex flex-col relative `}>
          <div className="flex w-full justify-center gap-4 ">
            <div
              ref={sectionRef}
              className=" max-w-[700px] flex flex-col bg-black relative"
            >
              <RedditTabs section={section} handleSelect={handleSelect} />
              <div>
                <div
                  className={`flex items-center w-full gap-1 py-3 ${
                    section === "skills" ? "pl-4" : "pl-2"
                  } bg-[#010101] `}
                >
                  {section === "skills" || <BsFire color="#aaaaaa" size={18} />}
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-[#aaaaaa]">
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
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-[1px] h-[400px] overflow-hidden w-[350px] relative rounded-md mr-10 justify-center bg-[#161616]">
                <Image
                  src={Grid}
                  priority
                  alt="backdrop-grid"
                  className="w-full h-[125px]"
                />
                <div className="w-full flex flex-col items-center absolute top-4">
                  <Image
                    height={160}
                    width={160}
                    alt="avatar"
                    src={avatarStyles[styleIndex]}
                    priority
                    className={`z-[100] right-2 relative `}
                  />
                  {/* <div className="bg-[#060606] w-[60px] h-[28px] right-[140px] top-[135px] rounded-[50%] absolute"></div> */}
                  <div className="w-full flex-col flex items-center relative">
                    <h1 className="text-2xl font-semibold text-[#c6c6c6] px-4">
                      Amari DeVaughn
                    </h1>
                    <p className="px-4 text-xs font-medium  text-[#696969]">
                      u/amarixdev
                    </p>
                    <button
                      onClick={() => changeStyle()}
                      className="w-[90%] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out   rounded-full justify-center relative bg-[#333] flex items-center h-8 mt-1 bg-gradient-to-r from-[#0467f1] to-[#18a9fd] hover:from-[#0359d2] hover:to-[#1595df]"
                    >
                      <GiTShirt size={18} className="absolute left-5" />
                      <p className="font-bold text-sm">Style Avatar</p>
                    </button>
                    <div className=" font-semibold text-sm w-full flex gap-20 mt-3 px-4 ">
                      <div className="flex flex-col">
                        <h3 className="">Karma</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <GiTwirlyFlower size={12} color="#29aaf4" />
                          <p className="text-[#8a8a8a] text-xs font-normal">
                            2,123
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="">Cake Day</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <GiCakeSlice size={12} color="#29aaf4" />
                          <p className="text-[#8a8a8a] text-xs font-normal">
                            {getCurrentDate()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" font-semibold text-sm w-full flex gap-20 px-4 mt-5">
                      <div className="flex flex-col">
                        <h3 className="">Followers</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <BsFillPersonFill size={12} color="#29aaf4" />
                          <p className="text-[#8a8a8a] text-xs font-normal">
                            15
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-[1px] hover:border-[#777] pb-5 w-[350px] h-[440px] overflow-y-scroll relative rounded-md mr-10 justify-center bg-[#161616]">
                <h2 className="px-4 rounded-t-md font-bold text-[#777] text-base py-2 sticky top-0 bg-[#161616]">
                  Skill Case (18)
                </h2>
                <Skills
                  awardsArray={awardsArray}
                  openAwards={openAwards}
                  setSection={setSection}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RedditTheme);

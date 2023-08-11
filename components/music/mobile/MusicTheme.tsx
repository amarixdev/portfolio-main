import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import Profile from "../../../public/images/music/album-cover.jpg";
import { capitalizeString } from "../../../util/functions";
import { useDisplaySection, useMediaQuery } from "../../../util/hooks";
import About from "./About";
import Projects from "./Projects";
import Skills from "../shared/Skills";

const MusicThemeMobile = ({
  tutorial,
  setTutorial,
  section,
  setSection,
  setDisplaySection,
  wrapperRef,
  easeIn,
}: {
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;
  section: string;
  setSection: (section: string) => void;
  setDisplaySection: (tutorial: boolean) => void;
  wrapperRef: RefObject<HTMLDivElement>;
  easeIn: boolean;
}) => {
  const isBreakPoint = useMediaQuery(389);
  const iconSize = isBreakPoint ? 12 : 16;
  const musicThemeColor = "#279bda";
  const [opened, setOpened] = useState([""]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useDisplaySection(wrapperRef.current, sectionRef.current, setDisplaySection);

  const sections = [
    {
      name: "about",
      icon: (
        <BsFillPersonFill
          size={iconSize}
          color={section === "about" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },

    {
      name: "projects",
      icon: (
        <MdWork
          size={iconSize}
          color={section === "projects" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },
    {
      name: "skills",
      icon: (
        <GrGraphQl
          size={iconSize}
          color={section === "skills" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },
  ];

  return (
    <div
      className={`${
        easeIn ? "opacity-20" : "opacity-100"
      } transition-all duration-200 ease-in-out  bg-[black] pb-[200px] lg:pb-0`}
    >
      <div className="flex items-center justify-center lg:pt-6">
        <Image
          alt="profile"
          src={Profile}
          width={240}
          height={240}
          className="rounded-lg"
          priority
          placeholder="blur"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4 mt-6 mb-3">
        <p className="text-white font-medium text-xl">Amari DeVaughn</p>
        <p className={`text-[#279bda] font-normal text-xl `}>
          Software Developer
        </p>
        <div
          ref={sectionRef}
          className="mt-4 flex justify-center gap-4 scroll-smooth  scrollbar-hide py-4 w-full"
        >
          {sections.map((sections) => (
            <button
              key={sections.name}
              className={`${
                sections.name === section ? `bg-[#279bda]` : "bg-[#1f1f20]"
              } w-[150px] active:scale-95 transition-transform duration-200 ease-in-out px-2 py-[10px] rounded-lg`}
              onClick={() => {
                setSection(sections.name);
              }}
            >
              <div className="flex w-full items-center justify-center gap-1">
                {sections.icon}
                <p
                  className={` ${
                    sections.name === section
                      ? "text-[#1f1f20]"
                      : `text-[#279bda]`
                  }  font-medium text-xs xs:text-sm`}
                >
                  {capitalizeString(sections.name)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {section === "about" ? (
        <About
          tutorial={tutorial}
          setTutorial={setTutorial}
          opened={opened}
          setOpened={setOpened}
        />
      ) : section === "projects" ? (
        <Projects
          setTutorial={setTutorial}
          tutorial={tutorial}
          opened={opened}
          setOpened={setOpened}
        />
      ) : section === "skills" ? (
        <Skills />
      ) : (
        ""
      )}
    </div>
  );
};

export default MusicThemeMobile;

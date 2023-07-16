import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import Profile from "../../../public/assets/album-cover.jpg";
import { capitalizeString } from "../../../util/functions";
import { useMediaQuery } from "../../../util/hooks";
import MusicCollapse from "./MusicCollapse";
import About from "./About";
import Projects from "./Projects";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const MusicThemeMobile = ({
  tutorial,
  setTutorial,
}: {
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;
}) => {
  const isBreakPoint = useMediaQuery(389);
  const iconSize = isBreakPoint ? 12 : 16;
  const musicThemeColor = "#279bda";
  const [currentSection, setCurrentSection] = useState("about");
  const [opened, setOpened] = useState([""]);
  const [displaySocials, setDisplaySocials] = useState(false);

  const sections = [
    {
      name: "about",
      icon: (
        <BsFillPersonFill
          size={iconSize}
          color={currentSection === "about" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },

    {
      name: "projects",
      icon: (
        <MdWork
          size={iconSize}
          color={currentSection === "projects" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },
    {
      name: "skills",
      icon: (
        <GrGraphQl
          size={iconSize}
          color={currentSection === "skills" ? "#1f1f20" : musicThemeColor}
        />
      ),
    },
  ];

  return (
    <div className="bg-[black] pb-20 lg:pb-0">
      <div className="flex items-center justify-center lg:pt-6">
        <Image
          alt="profile"
          src={Profile}
          width={240}
          height={240}
          className="rounded-lg"
          priority
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4 mt-6 mb-3">
        <p className="text-white font-medium text-xl">Amari DeVaughn</p>
        <p className={`text-[#279bda] font-normal text-xl `}>
          Software Developer
        </p>
        <div className="mt-4 flex justify-center gap-4 scroll-smooth  scrollbar-hide py-4 w-full">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`${
                section.name === currentSection
                  ? `bg-[#279bda]`
                  : "bg-[#1f1f20]"
              } w-[150px] active:scale-95 transition-transform duration-200 ease-in-out px-2 py-[10px] rounded-lg`}
              onClick={() => {
                setCurrentSection(section.name);
              }}
            >
              <div className="flex w-full items-center justify-center gap-1">
                {section.icon}
                <p
                  className={` ${
                    section.name === currentSection
                      ? "text-[#1f1f20]"
                      : `text-[#279bda]`
                  }  font-medium text-xs xs:text-sm`}
                >
                  {capitalizeString(section.name)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {currentSection === "about" ? (
        <About
          tutorial={tutorial}
          setTutorial={setTutorial}
          opened={opened}
          setOpened={setOpened}
        />
      ) : currentSection === "projects" ? (
        <Projects      setTutorial={setTutorial}
        tutorial={tutorial} opened={opened} setOpened={setOpened} />
      ) : (
        ""
      )}
      {
        <div className="flex flex-col w-full justify-center items-center mt-[80px] gap-10">
          <h1 className="font-extrabold text-2xl text-[#555555]">Contact Me</h1>
          <div className={` pb-20 w-[50%] flex items-center justify-evenly`}>
            <Link
              href={"https://www.linkedin.com/in/amari-devaughn-319582191/"}
              target="_blank"
            >
              <BsLinkedin size={30} color="#555555" />
            </Link>
            <AiOutlineMail size={30} color="#555555" />
          </div>
        </div>
      }
    </div>
  );
};

export default MusicThemeMobile;

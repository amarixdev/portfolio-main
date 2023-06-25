import { Collapse, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import Profile from "../../../public/assets/album-cover.jpg";
import MusicBars from "../MusicBars";
import MusicFooter from "./MusicFooter";
import MusicCollapse from "./MusicCollapse";
import { useMediaQuery } from "../../../util/hooks";
import { GrGraphQl } from "react-icons/gr";
import { capitalizeString } from "../../../util/functions";

/* Mobile */

const MusicThemeMobile = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const [footer, setFooter] = useState("");
  const isBreakPoint = useMediaQuery(389);
  const iconSize = isBreakPoint ? 12 : 16;
  const musicThemeColor = "#da2742";
  const [currentSection, setCurrentSection] = useState("about");

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
      name: "experience",
      icon: (
        <MdWork
          size={iconSize}
          color={currentSection === "experience" ? "#1f1f20" : musicThemeColor}
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

  useEffect(() => {
    const handleScroll = () => {
      console.log("running");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen bg-[black]">
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
        <p className={`text-[#da2742] font-normal text-xl `}>
          Software Developer
        </p>
        <div className="mt-4 flex justify-center gap-4 scroll-smooth  scrollbar-hide py-4 w-full">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`${
                section.name === currentSection
                  ? `bg-[#da2742]`
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
                      : `text-[#da2742]`
                  }  font-medium text-xs xs:text-sm`}
                >
                  {capitalizeString(section.name)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <MusicCollapse title="summary" count={1} top={true}>
          <p>
            A software developer based in North Carolina. I attended the
            University of North Carolina - Chapel Hill from 2015 to 2019, where
            I competed in track and field, was a pre-dental student, and medical
            researcher. I was grateful to receive an invitation to attend Dental
            School in 2021, but after long consideration and some time off
            during the pandemic I ultimately decided healthcare was not for me.{" "}
          </p>
          <p>
            Since the career change, I have worked on a number of web
            applications for both myself and others. As a software developer, I
            get enjoyment out out of seeing my ideas manifest at every scale and
            take pride in devoting my full attention and energy to each project
            I undertake. Thank you for taking some time to learn more about me
            and I look forward to connecting.
          </p>
        </MusicCollapse>
        <MusicCollapse title="beyond tech" count={2}>
          <ul className=" list-disc">
            <li>Published co-author in the American Heart Association</li>
            <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
            <li>Nature Enthusiast </li>
          </ul>
        </MusicCollapse>
      </div>
      {/* {isOpen && <MusicFooter section={footer} />} */}
    </div>
  );
};

export default MusicThemeMobile;

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import AlbumCover from "../../../public/assets/album-cover.jpg";
import { capitalizeString } from "../../../util/functions";
import MusicCollapse from "./MusicCollapse";

const MusicThemeDesktop = () => {
  const musicThemeColor = "#279bda";
  const [currentSection, setCurrentSection] = useState("about");
  const sections = [
    {
      name: "about",
      icon: (
        <BsFillPersonFill
          size={16}
          color={currentSection === "about" ? musicThemeColor : "white"}
        />
      ),
    },

    {
      name: "experience",
      icon: (
        <MdWork
          size={16}
          color={currentSection === "experience" ? musicThemeColor : "white"}
        />
      ),
    },
    {
      name: "skills",
      icon: (
        <GrGraphQl
          size={16}
          color={currentSection === "skills" ? musicThemeColor : "white"}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="pb-28 pl-20  relative flex flex-col items-center justify-center overflow-auto bg-gradient-to-b from-[#050505] via-[#1c1c1c] to-[#1c1c1c]">
        <div className={`flex flex-col z-[100] relative w-full pl-12`}>
          <div className="flex gap-14 items-center">
            <Image
              height={230}
              width={230}
              alt="avatar"
              src={AlbumCover}
              priority
              className={`relative rounded-md transition-opacity duration-500 ease-in-out `}
            />
            <div className="w-[230px] h-[230px]">
              <h1 className="font-bold text-2xl">Amari DeVaughn</h1>
              <h1 className={`font-medium text-2xl text-[#279bda]`}>
                Software Developer
              </h1>
              <div className="flex items-center mt-1 text-sm font-medium">
                <h3 className="text-[#949494]">Frontend/Backend • 2023</h3>
              </div>
              <div className="flex items-center mt-8 gap-1">
                <FaReact color="#999999" />
                <p className="font-extralight text-xs text-[#c1c1c1]">
                  Made with React
                </p>
              </div>
              <div className="flex gap-2 items-center mt-16">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    className={`min-w-[120px] ${
                      currentSection === section.name
                        ? "bg-white"
                        : `bg-[#279bda]`
                    } py-1 rounded-md`}
                    onClick={() => setCurrentSection(section.name)}
                  >
                    <div className="flex w-full items-center justify-center gap-1">
                      {section.icon}
                      <p
                        className={`${
                          currentSection === section.name
                            ? `text-[#279bda]`
                            : "text-white"
                        } font-medium text-sm`}
                      >
                        {capitalizeString(section.name)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[93%] flex flex-col items-center justify-center mt-8 ">
          <MusicCollapse title="summary" top={true} count={1}>
            <p className="pt-2">
              A software developer based in North Carolina. I attended the
              University of North Carolina - Chapel Hill from 2015 to 2019,
              where I competed in track and field, was a pre-dental student, and
              medical researcher. I was grateful to receive an invitation to
              attend Dental School in 2021, but after long consideration and
              some time off during the pandemic I ultimately decided healthcare
              was not for me.{" "}
            </p>
            <p>
              Since the career change, I have worked on a number of web
              applications for both myself and others. As a software developer,
              I get enjoyment out out of seeing my ideas manifest at every scale
              and take pride in devoting my full attention and energy to each
              project I undertake. Thank you for taking some time to learn more
              about me and I look forward to connecting.
            </p>
          </MusicCollapse>
          <MusicCollapse title="beyond tech" count={2}>
            <div className="w-full text-[#aaaaaa] pt-2 flex flex-col gap-3">
              <ul className="list-disc">
                <li>Published co-author in the American Heart Association</li>
                <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
                <li>Nature Enthusiast </li>
              </ul>
            </div>
          </MusicCollapse>
        </div>
      </div>
    </div>
  );
};

export default MusicThemeDesktop;

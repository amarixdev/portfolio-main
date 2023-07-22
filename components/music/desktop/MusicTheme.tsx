import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { BsFillPersonFill, BsLinkedin } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import AlbumCover from "../../../public/assets/album-cover.jpg";
import { capitalizeString } from "../../../util/functions";
import About from "./About";
import Projects from "./Projects";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { useDisplaySection } from "../../../util/hooks";
import AudioPlayer from "../AudioPlayer";

const MusicThemeDesktop = ({
  section,
  setSection,
  wrapperRef,
  setDisplaySection,
}: {
  section: string;
  setSection: (section: string) => void;
  wrapperRef: RefObject<HTMLDivElement>;
  setDisplaySection: (displaySection: boolean) => void;
}) => {
  const musicThemeColor = "#279bda";
  // const [section, setCurrentSection] = useState("about");
  const [opened, setOpened] = useState([""]);
  const sectionRef = useRef<HTMLDivElement>(null);
  useDisplaySection(wrapperRef.current, sectionRef.current, setDisplaySection);

  const sections = [
    {
      name: "about",
      icon: (
        <BsFillPersonFill
          size={16}
          color={section === "about" ? musicThemeColor : "white"}
        />
      ),
    },

    {
      name: "projects",
      icon: (
        <MdWork
          size={16}
          color={section === "projects" ? musicThemeColor : "white"}
        />
      ),
    },
    {
      name: "skills",
      icon: (
        <GrGraphQl
          size={16}
          color={section === "skills" ? musicThemeColor : "white"}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="pb-28 pl-20  relative flex flex-col items-center justify-center overflow-auto bg-gradient-to-b bg-black">
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
            <div className="absolute right-[200px] top-0">
              <AudioPlayer />
            </div>
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
              <div ref={sectionRef} className="flex gap-2 items-center mt-16">
                {sections.map((sections) => (
                  <button
                    key={sections.name}
                    className={`min-w-[120px] ${
                      section === sections.name ? "bg-white" : `bg-[#279bda]`
                    } py-1 rounded-md`}
                    onClick={() => setSection(sections.name)}
                  >
                    <div className="flex w-full items-center justify-center gap-1">
                      {sections.icon}
                      <p
                        className={`${
                          section === sections.name
                            ? `text-[#279bda]`
                            : "text-white"
                        } font-medium text-sm`}
                      >
                        {capitalizeString(sections.name)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {section === "about" ? (
          <About opened={opened} setOpened={setOpened} />
        ) : section === "projects" ? (
          <Projects opened={opened} setOpened={setOpened} />
        ) : (
          ""
        )}
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full justify-start bg-gradient-to-b ">
          {
            <div className="flex flex-col w-full items-center gap-10">
              <h1 className="font-extrabold text-2xl text-[#555555]">
                Contact Me
              </h1>
              <div
                className={` pb-20 w-[20%] flex items-center justify-evenly`}
              >
                <Link
                  href={"https://www.linkedin.com/in/amari-devaughn-319582191/"}
                  target="_blank"
                >
                  <BsLinkedin size={50} color="#555555" />
                </Link>
                <AiOutlineMail size={50} color="#555555" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MusicThemeDesktop;

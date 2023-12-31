import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import AlbumCover from "../../../public/images/music/album-cover.jpg";
import { capitalizeString, getCurrentDate } from "../../../util/functions";
import { useDisplaySection } from "../../../util/hooks";
import AudioPlayer from "../shared/AudioPlayer";
import Skills from "../shared/Skills";
import About from "./About";
import Projects from "./Projects";

const MusicThemeDesktop = ({
  section,
  setSection,
  wrapperRef,
  setDisplaySection,
  easeIn,
}: {
  section: string;
  setSection: (section: string) => void;
  wrapperRef: RefObject<HTMLDivElement>;
  setDisplaySection: (displaySection: boolean) => void;
  easeIn: boolean;
}) => {
  const musicThemeColor = "#279bda";
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
    <div
      className={`${
        easeIn ? "opacity-40 " : "opacity-100"
      } transition-all duration-200 ease-in`}
    >
      <section className="pb-28 pl-20  relative flex flex-col items-center justify-center overflow-auto bg-gradient-to-b bg-black">
        <div className={` z-[100] relative w-full pl-12`}>
          <header className="flex gap-14 items-center">
            <Image
              height={230}
              width={230}
              alt="avatar"
              src={AlbumCover}
              priority
              placeholder="blur"
              className={`relative rounded-md transition-opacity duration-500 ease-in-out `}
            />
            <div className="absolute right-[200px] top-0">
              <AudioPlayer />
            </div>
            <div className="w-[230px] h-[230px]">
              <h2 className="font-bold text-2xl">Amari DeVaughn</h2>
              <h2 className={`font-medium text-2xl text-[#279bda]`}>
                Software Developer
              </h2>
              <div className="flex items-center mt-1 text-sm font-medium">
                <h3 className="text-[#949494]">{`Frontend/Backend • ${
                  getCurrentDate().year
                }`}</h3>
              </div>
              <div className="flex items-center mt-8 gap-1">
                <FaReact color="#999999" />
                <h4 className="font-extralight text-xs text-[#c1c1c1]">
                  Made with React
                </h4>
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
          </header>
        </div>
        {section === "about" ? (
          <About opened={opened} setOpened={setOpened} />
        ) : section === "projects" ? (
          <Projects opened={opened} setOpened={setOpened} />
        ) : section === "skills" ? (
          <Skills />
        ) : (
          ""
        )}
      </section>
      <div className="h-[40vh] flex items-center justify-center group">
        <p
          className="opacity-0 group-hover:opacity-100 font-medium cursor-pointer text-lg text-[#cecece] hover:text-white active:scale-90 transition-all duration-200 ease-in-out"
          onClick={() =>
            wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          Scroll To Top
        </p>
      </div>
    </div>
  );
};

export default MusicThemeDesktop;

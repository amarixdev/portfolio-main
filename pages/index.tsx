import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Profile from "../public/assets/profile.jpg";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdEmail } from "react-icons/md";
import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import MusicBars from "../components/Apple/MusicBars";
import MusicFooter from "../components/Apple/MusicFooter";
import { FiChevronLeft } from "react-icons/fi";

/* Apple */

const Home: NextPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const [footer, setFooter] = useState("");

  const handleCollapse = (section: string) => {
    onToggle();
    setSelectedCollapse(section);
    setFooter(section);
  };
  const appleThemeColor = "#dc304a";
  return (
    <div className="h-screen bg-[#060606]">
      <div className="p-4 flex items-center">
        <FiChevronLeft color={appleThemeColor} size={20} />
        <p className="text-xs">Change Theme</p>
      </div>
      <div className="flex items-center justify-center pt-10">
        <Image
          alt="profile"
          src={Profile}
          width={240}
          height={240}
          className="rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4 mt-6">
        <p className="text-white font-medium text-xl">Amari DeVaughn</p>
        <p className={`text-[${appleThemeColor}] font-normal text-xl `}>
          Software Developer
        </p>
        {/* About */}
        <div className="mt-4 flex gap-4 overflow-x-scroll scrollbar-hide w-full overflow-scroll ">
          <button
            className={`min-w-[150px] bg-[#1f1f20] text-[#222222] py-2 rounded-lg`}
          >
            <div className="flex w-full items-center justify-center gap-1">
              <BsFillPersonFill size={16} color="#dc304a" />
              <p className={`text-[#dc304a] font-medium text-base`}>About</p>
            </div>
          </button>
          <button
            className={`min-w-[150px] bg-[#1f1f20] text-[#222222] py-2  rounded-lg`}
          >
            <div className="flex w-full items-center justify-center gap-1">
              <MdWork size={16} color="#dc304a" />
              <p className={`text-[#dc304a] font-medium text-base`}>
                Experience
              </p>
            </div>
          </button>
          <button
            className={`min-w-[150px] bg-[#1f1f20] text-[#222222] py-2  rounded-lg`}
          >
            <div className="flex w-full items-center justify-center gap-1">
              <MdWork size={16} color="#dc304a" />
              <p className={`text-[#dc304a] font-medium text-base`}>Skills</p>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <div
          className="border-t-[0.5px] border-[#aaaaaa6a] w-full flex justify-start items-center py-4 mt-8 lg:cursor-pointer"
          onClick={() => handleCollapse("summary")}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="pl-5 text-[#aaaaaa]">
                {" "}
                {isOpen && selectedCollapse === "summary" ? <MusicBars /> : 1}
              </div>
              <p className="text-white absolute left-14">Summary</p>
            </div>

            <Collapse
              in={isOpen && selectedCollapse === "summary"}
              animateOpacity
              animate
            >
              <div className="w-full text-[#aaaaaa] px-10 flex flex-col gap-2 pb-20">
                <p>
                  A software developer based in North Carolina. Initially
                  pursued medicine at the University of North Carolina - Chapel
                  Hill from 2015 to 2019. Received an invitation to dental
                  school in 2021, but took a gap year during the pandemic when I
                  ultimately decided healthcare was not for me.{" "}
                </p>
                <p>
                  Around that time I began to gravitate towards programming and
                  fell in love with the creative process — I found it to be the
                  perfect balance between the intuitive and analytical halves of
                  the brain. Seeing ideas become reality, at every scale, has
                  been the most rewarding aspect of being a software developer.
                </p>
              </div>
            </Collapse>
          </div>
        </div>
        <div
          className="border-t-[0.5px] border-[#aaaaaa6a] w-full flex justify-start items-center py-4 lg:cursor-pointer "
          onClick={() => handleCollapse("achievements")}
        >
          <div className="flex flex-col gap-2 pb-20">
            <div className="flex gap-3 items-center">
              <div className="pl-5 text-[#aaaaaa]">
                {" "}
                {isOpen && selectedCollapse === "achievements" ? (
                  <MusicBars />
                ) : (
                  2
                )}
              </div>
              <p className="text-white absolute left-14 ">
                Personal Achievements
              </p>
            </div>

            <Collapse
              in={isOpen && selectedCollapse === "achievements"}
              animateOpacity
              animate
            >
              <div className="w-full text-[#aaaaaa] px-10 flex flex-col gap-3">
                <ul>
                  <li>Created PromoNinja.io</li>
                  <li>Published co-author in the American Heart Association</li>
                  <li> 2x Atlantic Coast Conference (ACC) Silver Medalist</li>
                </ul>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      {isOpen && <MusicFooter section={footer} />}
    </div>
  );
};

export default Home;

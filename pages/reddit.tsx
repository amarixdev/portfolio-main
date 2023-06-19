import Image from "next/image";
import RedditGrid from "../components/Reddit/RedditGrid";
import Avatar from "../public/assets/reddit-avatar.png";
import Software from "../public/assets/software.jpeg";
import { BsFire } from "react-icons/bs";
import _debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";
import { truncateString } from "../util/functions";
import RedditBanner from "../components/Reddit/RedditBanner";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import RedditPost from "../components/Reddit/RedditPost";
import RedditTabs from "../components/Reddit/RedditTabs";
import RedditSort from "../components/Reddit/RedditSort";

const Reddit = () => {
  const username = "u/amarixdev";
  const headerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [scale, setScale] = useState(0);
  const [showAvatar, setShowAvatar] = useState(true);
  const [section, setSection] = useState("");
  // const { isOpen, onClose, onOpen } = useDisclosure();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleSelect = (section: string) => {
    setSection(section);
  };

  useEffect(() => {
    const translateXStopPoint = 45;
    const translateYStopPoint = 60;
    const scaleStopPoint = 60;
    const handleScroll = _debounce(() => {
      if (window.scrollY > 50) {
        setShowAvatar(false);
      } else {
        setShowAvatar(true);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [translateX]);

  return (
    <>
      <RedditSort onOpenDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {openDrawer && (
        <div className="h-screen bg-[#0000006b] fixed z-[150] w-full"></div>
      )}
      <RedditGrid />
      <div className=" flex flex-col z-[100] relative pt-4">
        <RedditBanner showAvatar={showAvatar} />
        <Image
          height={140}
          width={140}
          alt="avatar"
          src={Avatar}
          className={`relative transition-opacity duration-500 ease-in-out ${
            showAvatar ? "opacity-100" : "opacity-0"
          }`}
        />
        <h1 className="text-2xl font-bold text-white px-4 relative bottom-2">
          Amari DeVaughn
        </h1>
        <p className="px-4 text-xs">
          u/amarixdev&#x2022; 2,132 karma &#x2022; Oct 1, 2016
        </p>
        <div className="w-full mt-6 flex flex-col">
          <RedditTabs section={section} handleSelect={handleSelect} />
          <>
            <div className="flex items-center w-full gap-1 py-3 px-2 bg-[#010101]">
              <BsFire color="#aaaaaa" size={14} />
              <div
                className="flex items-center gap-1"
                onClick={() => setOpenDrawer((prev) => !prev)}
              >
                <p className=" text-xs font-bold text-[#aaaaaa]">HOT POSTS</p>
                <HiOutlineChevronDown color="#aaaaaa" />
              </div>
            </div>
            <RedditPost title="Summary" topPost={true} time="4h">
              <p className="text-sm">
                {truncateString(
                  "A software developer based in North Carolina. I attended the University of North Carolina - Chapel Hill from 2015 to 2019 where I initially pursued medicine in addition to being a full-time athlete. I was thankful to receive an invitation to attend",
                  180
                )}
              </p>
            </RedditPost>
            <RedditPost title="Personal Achievements" time="16d">
              <ul className="text-sm">
                <li>-Developed PromoNinja.io</li>
                <li>-Published co-author in the American Heart Association</li>
                <li> -2x Atlantic Coast Conference (ACC) Silver Medalist</li>
              </ul>
            </RedditPost>
            <RedditPost title="Contact Information" time="3d">
              <ul className="text-sm">
                <li>-Developed PromoNinja.io</li>
                <li>-Published co-author in the American Heart Association</li>
                <li> -2x Atlantic Coast Conference (ACC) Silver Medalist</li>
              </ul>
            </RedditPost>
          </>
        </div>
      </div>
    </>
  );
};

export default Reddit;

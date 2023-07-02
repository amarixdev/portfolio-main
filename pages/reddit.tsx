import Image from "next/image";
import RedditGrid from "../components/Reddit/RedditGrid";
import Avatar from "../public/assets/reddit-avatar.png";
import Software from "../public/assets/software.jpeg";
import { BsFire } from "react-icons/bs";
import _debounce from "lodash/debounce";
import { ReactElement, useEffect, useRef, useState } from "react";
import { truncateString } from "../util/functions";
import { HiOutlineChevronDown } from "react-icons/hi";
import RedditPost from "../components/Reddit/RedditPost";
import RedditTabs from "../components/Reddit/RedditTabs";
import RedditSort from "../components/Reddit/RedditSort";
import { TiStarburstOutline } from "react-icons/ti";
import { TbArrowBigUpLines, TbSword } from "react-icons/tb";
import { IconType } from "react-icons";

const Reddit = () => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [section, setSection] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  interface SortFilter {
    [key: string]: { title: string; icon: ReactElement };
  }
  const sortFilters: SortFilter = {
    hot: { title: "HOT POSTS", icon: <BsFire color="#aaaaaa" size={20} /> },
    new: {
      title: "NEW POSTS",
      icon: <TiStarburstOutline color={"#aaaaaa"} size={20} />,
    },
    top: {
      title: "TOP POSTS",
      icon: <TbArrowBigUpLines color="#aaaaaa" size={20} />,
    },
    controversial: {
      title: "CONTROVERSIAL POSTS",
      icon: <TbSword color="#aaaaaa" size={20} />,
    },
  };
  const [filter, setFilter] = useState("hot");

  const handleSelect = (section: string) => {
    setSection(section);
  };

  useEffect(() => {
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
  }, []);

  // return (
  //   <div>
  //     <RedditSort
  //       onOpenDrawer={openDrawer}
  //       setOpenDrawer={setOpenDrawer}
  //       setFilter={setFilter}
  //       filter={filter}
  //     />
  //     {openDrawer && (
  //       <div className="h-screen bg-[#0000006b] fixed z-[150] w-full"></div>
  //     )}
  //     <RedditGrid />
  //     <div className={`flex flex-col z-[100] relative pt-4`}>
  //       <Image
  //         height={140}
  //         width={140}
  //         alt="avatar"
  //         src={Avatar}
  //         className={`relative transition-opacity duration-500 ease-in-out ${
  //           showAvatar ? "opacity-100" : "opacity-0"
  //         }`}
  //       />
  //       <h1 className="text-2xl font-bold text-white px-4 relative bottom-2">
  //         Amari DeVaughn
  //       </h1>
  //       <p className="px-4 text-xs">
  //         u/amarixdev&#x2022; 2,132 karma &#x2022; Oct 1, 2016
  //       </p>
  //       <div className="w-full mt-6 flex flex-col">
  //         <RedditTabs section={section} handleSelect={handleSelect} />
  //         <>
  //           <div className="flex items-center w-full gap-1 py-3 px-2 bg-[#010101]">
  //             {sortFilters[filter].icon}
  //             <div
  //               className="flex items-center gap-1"
  //               onClick={() => setOpenDrawer((prev) => !prev)}
  //             >
  //               <p className=" text-xs font-bold text-[#aaaaaa]">
  //                 {sortFilters[filter].title}
  //               </p>
  //               <HiOutlineChevronDown color="#aaaaaa" />
  //             </div>
  //           </div>
  //           <RedditPost
  //             title="Summary"
  //             topPost={true}
  //             time="4h"
  //             upvoteCount={42}
  //           >
  //             <p className="text-sm">
  //               {truncateString(
  //                 "A software developer based in North Carolina. I attended the University of North Carolina - Chapel Hill from 2015 to 2019 where I initially pursued medicine in addition to being a full-time athlete. I was thankful to receive an invitation to attend",
  //                 180
  //               )}
  //             </p>
  //           </RedditPost>
  //           <RedditPost
  //             title="Personal Achievements"
  //             time="16d"
  //             upvoteCount={60}
  //           >
  //             <ul className="text-sm">
  //               <li>-Developed PromoNinja.io</li>
  //               <li>-Published co-author in the American Heart Association</li>
  //               <li> -2x Atlantic Coast Conference (ACC) Silver...</li>
  //             </ul>
  //           </RedditPost>
  //           <RedditPost  title="Contact Information" time="3d" upvoteCount={21}>
  //             <ul className="text-sm">
  //               <li>-Developed PromoNinja.io</li>
  //               <li>-Published co-author in the American Heart Association</li>
  //               <li> -2x Atlantic Coast Conference (ACC) Silver Medalist</li>
  //             </ul>
  //           </RedditPost>
  //         </>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Reddit;

import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import RedditSilver from "../../public/assets/reddit-silver.png";
import RedditGold from "../../public/assets/reddit-gold.png";
import RedditPlatinum from "../../public/assets/reddit-platinum.png";
import Image from "next/image";
import { capitalizeString } from "../../util/functions";
import { RedditAwardsState } from "../../util/types";
import { CoinVertical } from "@phosphor-icons/react";

const AwardMobile = ({
  openAwardsMobile,
  setOpenAwardsMobile,
  setAwardsArray,
  section,
  selectedTitle,
}: {
  openAwardsMobile: boolean;
  setOpenAwardsMobile: (value: boolean) => void;
  setAwardsArray: React.Dispatch<React.SetStateAction<RedditAwardsState>>;
  section: string;
  selectedTitle: string;
}) => {
  const awards = [
    { name: "silver", icon: RedditSilver, coins: "100" },
    { name: "gold", icon: RedditGold, coins: "500" },
    { name: "platinum", icon: RedditPlatinum, coins: "1,800" },
  ];

  const awardsRef = useRef<HTMLDivElement>(null);

  const [give, setGive] = useState(false);
  const [selectedAward, setSelectedAward] = useState("");
  const selectAward = (award: string) => {
    setSelectedAward(award);
    setGive(true);
  };

  const giveAward = () => {
    setOpenAwardsMobile(false);
    setAwardsArray((prev: any) => ({
      ...prev,
      [selectedTitle]: [...prev[selectedTitle], selectedAward],
    }));
    setGive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (openAwardsMobile && !awardsRef.current?.contains(event.target)) {
        setOpenAwardsMobile(false);
        setGive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openAwardsMobile, setOpenAwardsMobile]);

  return (
    <>
      {
        <div
          ref={awardsRef}
          className={` text-[#d2d2d2] ${
            openAwardsMobile ? "bottom-0" : "bottom-[-300px]"
          } transition-all duration-300 ease-in-out w-full fixed h-[300px] rounded-t-3xl bg-[#222222]  z-[9999]`}
        >
          <div className="border-b-[1px] py-4  px-4 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 w-fit pl-3">
                <AiOutlineClose
                  size={20}
                  onClick={() => {
                    setGive(false);
                    setOpenAwardsMobile(false);
                  }}
                />
                <p className="font-semibold text-lg"> Awards</p>
              </div>

              <div className="flex items-center gap-2 px-4 py-1 bg-[#151515] rounded-xl">
                <CoinVertical size={18} color="#f7c308" weight="fill" />
                <p className="font-light text-sm">&#8734;</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="flex gap-2 pt-2 pb-[150px] relative px-4">
              {awards.map((award) => (
                <button
                  key={award.name}
                  className="items-center flex flex-col active:scale-95 transition-transform duration-150 ease-in-out"
                  onClick={() => selectAward(award.name)}
                >
                  <Image
                    src={award.icon}
                    priority
                    width={60}
                    height={60}
                    alt={`reddit-${award.name}`}
                  />
                  <p className="font-light text-xs">{award.coins}</p>
                </button>
              ))}
            </div>
            <div
              className={` absolute flex flex-col items-center w-full transition-all duration-300 mb-10 ${
                give ? "bottom-0" : "bottom-[-200px]"
              }`}
            >
              <p className="font-semibold text-sm mb-1 px-3 text-center py-1 ">
                {" "}
                {`Do you like this portfolio? Award u/amarixdev with Reddit ${capitalizeString(
                  selectedAward
                )}!`}
              </p>
              <button
                onClick={() => giveAward()}
                className=" w-[90%] bg-gradient-to-b from-[#ff8401] via-[#ff5500] to-[#ff5500] active:scale-95 duration-150 transition-all  flex items-center justify-center py-2 rounded-3xl"
              >
                <p className="font-semibold">Give</p>
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AwardMobile;

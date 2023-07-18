import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CoinVertical } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import RedditGold from "../../public/assets/reddit-gold.png";
import RedditPlatinum from "../../public/assets/reddit-platinum.png";
import RedditSilver from "../../public/assets/reddit-silver.png";
import { capitalizeString } from "../../util/functions";
import { RedditAwardsState } from "../../util/types";

const AwardDesktop = ({
  isOpen,
  onClose,
  setAwardsArray,
  section,
  selectedTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  setAwardsArray: React.Dispatch<React.SetStateAction<RedditAwardsState>>;
  section: string;
  selectedTitle: string;
}) => {
  const [selectedAward, setSelectedAward] = useState("silver");
  const selectAward = (award: string) => {
    setSelectedAward(award);
  };

  const giveAward = () => {
    onClose();
    setAwardsArray((prev: any) => ({
      ...prev,
      [selectedTitle]: [...prev[selectedTitle], selectedAward],
    }));
  };


  const awards = [
    { name: "silver", icon: RedditSilver, coins: "100" },
    { name: "gold", icon: RedditGold, coins: "500" },
    { name: "platinum", icon: RedditPlatinum, coins: "1,800" },
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"md"} isCentered>
        <ModalOverlay />
        <ModalContent height={"400px"} color={"#d2d2d2"} bgColor={"#222222"}>
          <ModalHeader borderBottomWidth={"1px"}>
            {" "}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 w-full">
                <AiOutlineClose size={20} onClick={() => onClose()} />
                <p className="font-semibold text-lg"> Awards</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-1 bg-[#151515] rounded-xl">
                <CoinVertical size={18} color="#f7c308" weight="fill" />
                <p className="font-light text-sm">&#8734;</p>
              </div>
            </div>
          </ModalHeader>
          <ModalBody padding={0}>
            <div className="w-full flex ">
              <div className="relative ">
                <div className="flex gap-2 pt-2 pb-[248px] border-r-[1px] relative px-2">
                  {awards.map((award) => (
                    <button
                      key={award.name}
                      className={`${
                        selectedAward === award.name && "bg-[#444444d6]"
                      } items-center hover:bg-[#444444d6] p-1 rounded-lg flex flex-col`}
                      onClick={() => selectAward(award.name)}
                    >
                      <Image
                        src={award.icon}
                        priority
                        width={60}
                        height={60}
                        alt={`reddit-${award.name}`}
                        className="min-w-[60px]"
                      />
                      <p className="font-light text-xs">{award.coins}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <Image
                  src={
                    awards.filter((award) => award.name === selectedAward)[0]
                      .icon
                  }
                  priority
                  width={80}
                  height={80}
                  className="max-w-[80px] max-h-[80px]"
                  alt={`reddit-${"Gold"}`}
                />
                <h1 className="font-semibold">
                  {capitalizeString(selectedAward)} Award
                </h1>
                <p className="px-3 my-4 text-center">
                  Do you like this portfolio? Award u/amarixdev with Reddit
                  {capitalizeString(selectedAward)}!
                </p>
                <div className="flex items-center">
                  <CoinVertical size={28} color="#f7c308" weight="fill" />
                  <p className="text-xl font-bold">
                    {
                      awards.filter((award) => award.name === selectedAward)[0]
                        .coins
                    }
                  </p>
                </div>
                <button
                  onClick={() => giveAward()}
                  className=" bg-gradient-to-r hover:grayscale-[20%] from-[#3aafe0] via-[#2a6cdd] to-[#b866c7] mt-10 py-2 rounded-3xl w-[180px]"
                >
                  <p className="font-bold">Give</p>
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AwardDesktop;

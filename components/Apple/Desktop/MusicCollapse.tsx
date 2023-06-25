import { Collapse, useDisclosure } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import MusicBars from "../MusicBars";
import { BsFillPlayFill } from "react-icons/bs";
import { capitalizeString } from "../../../util/functions";

type Props = {};

const MusicCollapse = ({
  children,
  title,
  top,
  count,
}: {
  children: ReactNode;
  title: string;
  top?: boolean;
  count: number;
}) => {
  const handleCollapse = (title: string) => {
    onToggle();
    setSelectedCollapse(title);
  };

  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const [hoverSong, setHoverSong] = useState(false);

  return (
    <div
      className={`border-[#aaaaaa6a] border-b-[0.5px] ${
        top && "border-t-[0.5px]"
      } w-full flex justify-start items-center py-3 lg:cursor-pointer`}
      onClick={() => handleCollapse(title)}
      onMouseEnter={() => {
        setHoverSong(true);
      }}
      onMouseLeave={() => {
        setHoverSong(false);
      }}
    >
      <div className="flex flex-col w-full">
        <div
          className={`flex gap-3 items-center ${
            isOpen && "bg-[#da2742]"
          }  py-4`}
        >
          <div className="pl-5 text-[#aaaaaa] text-xs">
            {isOpen ? (
              <MusicBars />
            ) : hoverSong ? (
              <BsFillPlayFill size={16} color="#dc304a" />
            ) : (
              <p>{count}</p>
            )}
          </div>
          <p className="text-white absolute left-[190px] text-sm">
            {capitalizeString(title)}
          </p>
        </div>

        <Collapse
          in={isOpen && selectedCollapse === title}
          animateOpacity
          animate
        >
          <div className="w-full text-[#aaaaaa] px-10 pt-2 flex flex-col gap-2">
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default MusicCollapse;

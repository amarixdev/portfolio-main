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
  const handleCollapse = (section: string) => {
    onToggle();
    setSelectedCollapse(section);
  };

  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");

  return (
    <div
      className={`${
        top && "border-t-[0.5px]"
      } border-b-[0.5px]  border-[#aaaaaa6a] w-full flex justify-start items-center py-4`}
      onClick={() => handleCollapse(title)}
    >
      <div className="flex flex-col">
        <div className="flex gap-3 items-center">
          <div className="pl-5 text-[#aaaaaa]">
            {" "}
            {isOpen && selectedCollapse === title ? (
              <MusicBars />
            ) : (
              <p>{count}</p>
            )}
          </div>
          <p className="text-white absolute left-14">
            {capitalizeString(title)}
          </p>
        </div>

        <Collapse in={isOpen && selectedCollapse === title} animateOpacity>
          <div className="w-full text-[#aaaaaa] px-10 flex flex-col mt-6 ">
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default MusicCollapse;

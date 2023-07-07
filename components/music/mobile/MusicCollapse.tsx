import { Collapse, useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { capitalizeString } from "../../../util/functions";
import MusicBars from "../MusicBars";

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
      } border-b-[0.5px] border-[#aaaaaa6a] flex justify-start items-center`}
      onClick={() => handleCollapse(title)}
    >
      <div className="flex flex-col">
        <div
          className={`${isOpen && "bg-[#279bda]"} py-3 flex gap-3 w-screen items-center`}
        >
          <div className="pl-5 text-[#aaaaaa]">
            {" "}
            {isOpen ? <MusicBars /> : <p>{count}</p>}
          </div>
          <p className="text-white absolute left-14">
            {capitalizeString(title)}
          </p>
        </div>

        <Collapse in={isOpen && selectedCollapse === title} animateOpacity>
          <div className="w-full text-[#aaaaaa] px-10 flex flex-col mt-3 pb-6 ">
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default MusicCollapse;

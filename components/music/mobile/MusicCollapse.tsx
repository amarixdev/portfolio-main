import { Collapse, useDisclosure } from "@chakra-ui/react";
import { ReactNode, useCallback, useRef, useState } from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import style from "../../../styles/style.module.css";
import { capitalizeString } from "../../../util/functions";
import MusicBars from "../MusicBars";

const MusicCollapse = ({
  children,
  title,
  top,
  count,
  tutorial,
  setTutorial,
}: {
  children: ReactNode;
  title: string;
  top?: boolean;
  count: number;
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const handleCollapseRef = useRef<(section: string) => void>();
  handleCollapseRef.current = useCallback(
    (section: string) => {
      onToggle();
      setTutorial(false);
      setSelectedCollapse(section);
    },
    [onToggle, setSelectedCollapse, setTutorial]
  );

  return (
    <div
      className={`${
        top && "border-t-[0.5px]"
      } border-b-[0.5px] border-[#aaaaaa6a] flex justify-start items-center`}
      onClick={() => {
        if (handleCollapseRef.current) {
          handleCollapseRef?.current(title);
        }
      }}
    >
      <div className="flex flex-col">
        <div
          className={`${
            isOpen && selectedCollapse === title && "bg-[#279bda]"
          } py-3 flex gap-3 w-screen items-center relative`}
        >
          <div className="pl-5 text-[#aaaaaa]">
            {" "}
            {isOpen && selectedCollapse === title ? (
              <MusicBars />
            ) : (
              <p>{count}</p>
            )}
          </div>
          <p className={`text-white absolute left-14 `}>
            {capitalizeString(title)}
          </p>
          {top && (
            <div
              className={`absolute left-[200px] bottom-[-12px] ${
                tutorial ? "block" : "hidden"
              } `}
            >
              <BsHandIndexThumb
                size={18}
                className={`fill-white relative top-9 left-2 ${style.clicking} opacity-70 `}
                color="white"
              />
              <span className={`${style.cursor}`}></span>
            </div>
          )}
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

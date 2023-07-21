import { Collapse, useDisclosure } from "@chakra-ui/react";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { capitalizeString } from "../../../util/functions";
import MusicBars from "../MusicBars";

const MusicCollapse = ({
  children,
  title,
  top,
  count,
  opened,
  setOpened,
}: {
  children: ReactNode;
  title: string;
  top?: boolean;
  count: number;
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleCollapse = (title: string, state: string) => {
    if (isOpen && state === "closed") {
      return;
    }
    if (isOpen && state === "open") {
      onToggle();
    }
    onToggle();
    setSelectedCollapse(title);
    if (!opened.includes(title))
      setOpened((prev) => [...prev, title.toLowerCase()]);
    if (opened.includes(title.toLowerCase()))
      setOpened((prev) => prev.filter((item) => item !== title.toLowerCase()));
  };

  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const [hoverSong, setHoverSong] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (opened.includes(title.toLowerCase())) {
      setTimeout(() => {
        onToggle();
        setSelectedCollapse(title);
      }, 200);
    }
  }, []);

  return (
    <div
      className={`border-[#aaaaaa6a] border-b-[0.5px] ${
        top && "border-t-[0.5px]"
      } w-full flex justify-start items-center py-3 ${
        isOpen || "cursor-pointer"
      }`}
      onClick={() => handleCollapse(title, "closed")}
      onMouseEnter={() => {
        if (!isOpen) {
          setHoverSong(true);
        }
      }}
      onMouseLeave={() => {
        if (!isOpen) {
          setHoverSong(false);
        }
      }}
    >
      <div className="flex flex-col w-full">
        <div
          onClick={() => handleCollapse(title, "open")}
          className={`flex gap-3 items-center select-none ${
            isOpen && "bg-[#279bda] cursor-pointer"
          }  py-4`}
        >
          <div className="pl-5 text-[#aaaaaa] text-xs">
            {isOpen ? (
              <MusicBars />
            ) : hoverSong ? (
              <BsFillPlayFill size={16} color="#279bda" />
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

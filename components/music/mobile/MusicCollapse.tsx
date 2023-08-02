import { Collapse, useDisclosure } from "@chakra-ui/react";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import style from "../../../styles/style.module.css";
import { capitalizeString } from "../../../util/functions";
import MusicBars from "../shared/MusicBars";

const MusicCollapse = ({
  children,
  title,
  top,
  count,
  tutorial,
  setTutorial,
  opened,
  setOpened,
}: {
  children: ReactNode;
  title: string;
  top?: boolean;
  count: number;
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedCollapse, setSelectedCollapse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCollapse = (title: string, state: string) => {
    if (isOpen && state === "closed") {
      return;
    }
    if (isOpen && state === "open") {
      onToggle();
    }
    onToggle();
    setSelectedCollapse(title);
    if (tutorial !== undefined && setTutorial !== undefined) {
      setTutorial(false);
    }

    if (!opened.includes(title))
      setOpened((prev) => [...prev, title.toLowerCase()]);
    if (opened.includes(title.toLowerCase()))
      setOpened((prev) => prev.filter((item) => item !== title.toLowerCase()));
  };

  useEffect(() => {
    if (opened.includes(title.toLowerCase())) {
      onToggle();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setSelectedCollapse(title);
    }
  }, []);

  return (
    <div
      className={`${
        top && "border-t-[0.5px]"
      } border-b-[0.5px] border-[#aaaaaa6a] flex justify-start items-center`}
      onClick={() => {
        handleCollapse(title, "closed");
      }}
    >
      <div className="flex flex-col">
        <div
          onClick={() => {
            handleCollapse(title, "open");
          }}
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

        {loading ? (
          <div className="h-screen animate-pulse bg-gradient-to-b from-[#131313]"></div>
        ) : (
          <Collapse in={isOpen && selectedCollapse === title} animateOpacity>
            <div className={`w-full text-[#aaaaaa] flex flex-col mt-3 pb-6 `}>
              {children}
            </div>
          </Collapse>
        )}
      </div>
    </div>
  );
};

export default MusicCollapse;

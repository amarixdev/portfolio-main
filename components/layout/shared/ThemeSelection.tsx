import { RefObject } from "react";
import style from "../../../styles/style.module.css";
import { useMediaQuery } from "../../../util/hooks";
import { Theme } from "../../../util/types";

const ThemeSelection = ({
  themes,
  handleThemeSelection,
  extendRef,
  setIsPlaying,
  audioLocked,
  videoRef,
}: {
  themes: Theme;
  handleThemeSelection: (theme: string) => void;
  extendRef?: RefObject<HTMLDivElement>;
  setIsPlaying?: (isPlaying: boolean) => void;
  audioLocked?: boolean;
  videoRef: RefObject<HTMLVideoElement>;
}) => {
  const extendDiv = () => {
    if (extendRef?.current) {
      extendRef.current.style.height = "200%";
    }
  };
  const isBreakPoint = useMediaQuery(1023);
  return (
    <div className="flex mt-10 lg:mt-0 lg:gap-14 justify-evenly  w-full ">
      {Object.keys(themes).map((theme) => (
        <div key={theme}>
          {isBreakPoint ? (
            <button
              id={theme}
              className={`${style.glowIcon}  w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center cursor-pointer`}
              onClick={() => {
                handleThemeSelection(theme);
                extendDiv();
                if (videoRef.current && videoRef.current.paused) {
                  videoRef?.current.play();
                }
                if (setIsPlaying && !audioLocked) {
                  setIsPlaying(false);
                }
              }}
            >
              {themes[theme].icon}
            </button>
          ) : (
            <button
              id={theme}
              className={`${style.glowIcon} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center cursor-pointer`}
              onClick={() => {
                handleThemeSelection(theme);
              }}
            >
              {themes[theme].icon}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelection;

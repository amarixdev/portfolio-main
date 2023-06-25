import React from "react";
import style from "../../styles/style.module.css";
import { useMediaQuery } from "../../util/hooks";

const MusicBars = () => {
  const isBreakPoint = useMediaQuery(1023);
  return (
    <div id="music">
      {isBreakPoint ? (
        <>
          <span className={`${style.barMobile} ${style.n1}`}>A</span>
          <span className={`${style.barMobile} ${style.n2}`}>B</span>
          <span className={`${style.barMobile} ${style.n3}`}>C</span>
          <span className={`${style.barMobile} ${style.n4}`}>D</span>
        </>
      ) : (
        <>
          <span className={`${style.bar} ${style.n1}`}>A</span>
          <span className={`${style.bar} ${style.n2}`}>B</span>
          <span className={`${style.bar} ${style.n3}`}>C</span>
          <span className={`${style.bar} ${style.n4}`}>D</span>
        </>
      )}
    </div>
  );
};

export default MusicBars;

import React from "react";
import style from "../../styles/style.module.css";

const MusicBars = () => {
  return (
    <div className={`${style.playing}`} id="music">
      <span className={`${style.bar} ${style.n1}`}>A</span>
      <span className={`${style.bar} ${style.n2}`}>B</span>
      <span className={`${style.bar} ${style.n3}`}>C</span>
      <span className={`${style.bar} ${style.n4}`}>D</span>
    </div>
  );
};

export default MusicBars;

import style from "../../styles/style.module.css";

const NightSky = () => {
  return (
    <div className={`${style.backgroundContainer}`}>
      <div className={`${style.stars}`}></div>
      {/* <div className={`${style.twinkling}`}></div> */}
    </div>
  );
};

export default NightSky;

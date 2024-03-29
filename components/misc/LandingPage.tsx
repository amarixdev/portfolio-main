import { FiChevronDown } from "react-icons/fi";
import style from "../../styles/style.module.css";

const LandingPage = ({
  heroImageLoaded,
  showBackdrop,
}: {
  heroImageLoaded: { background: boolean; foreground: boolean };
  showBackdrop: boolean;
}) => {
  const { background, foreground } = heroImageLoaded;
  return (
    <>
      {background && foreground && (
        <div
          className={`z-[999] ${
            showBackdrop ? "block" : "hidden"
          }  flex text-center justify-center h-screen fixed bg-[#000000b9] backdrop-blur-md w-full`}
        >
          <div
            className={` flex flex-col gap-10 justify-evenly w-[70%] text-white`}
          >
            <h2 className="font-extrabold text-3xl lg:text-5xl text-white ">
              Hi, Welcome to my portfolio!
            </h2>
            <div className="flex flex-col items-center gap-4 lg:gap-6 text-white ">
              <h3 className="font-bold text-2xl lg:text-4xl text-white "> Scroll Down</h3>
              <FiChevronDown size={60} className={style.bounce} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;

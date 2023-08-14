import { useEffect, useState } from "react";
import style from "../../styles/loaders.module.css";

const LoadingScreen = ({
  heroImageLoaded,
}: {
  heroImageLoaded: { background: boolean; foreground: boolean };
}) => {
  const [loading, setLoading] = useState(true);
  const { background, foreground } = heroImageLoaded;

  useEffect(() => {
    if (!background || !foreground) {
      setLoading(true);
    }
    if (background && foreground) {
      setLoading(false);
    }
  }, [background, foreground]);

  return (
    <>
      {loading && (
        <div
          className={`overflow-hidden h-screen z-[999] gap-5 px-10 flex flex-col text-center items-center justify-center fixed bg-black w-full`}
        >
          <div className={`flex flex-col justify-evenly`}>
            <span className={`${style.loaderBrackets}`}></span>
          </div>
          <h2 className="text-center font-extrabold text-3xl text-[#aaaaaa]">
            Portfolio Loading ...
          </h2>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;

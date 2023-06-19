import Image from "next/image";
import Avatar from "../../public/assets/reddit-avatar.png";

const RedditBanner = ({ showAvatar }: { showAvatar: boolean }) => {
  const numRows = 10;
  const numCols = 12;
  const gridItems = Array.from({ length: numRows * numCols });

  return (
    <div
      className={`${
        showAvatar ? "opacity-0" : "opacity-100"
      } w-full bg-[#ff5309] h-[50px] fixed top-0 transition-opacity duration-500 ease-in-out z-[150]`}
    >
      <div className="flex w-full fixed ">
        <div className="top-0 h-[50px] bg-gradient-to-b from-[#00000015] to-[#00000030] fixed z-10 w-full"></div>
        <div className="grid-cols-12 grid-rows-12 grid w-3/12 h-fit ">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] min-h-[5px] min-w-[5px] border-[#ffffff51]"
            >
              <p className="text-[1px]"></p>
            </div>
          ))}
        </div>
        <div className="grid-cols-12 grid-rows-12  grid w-3/12  h-fit ">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] min-h-[5px] min-w-[5px] border-[#ffffff51]"
            >
              <p className="text-[1px]"></p>
            </div>
          ))}
        </div>
        <div className="grid-cols-12 grid-rows-12  grid w-3/12  h-fit ">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] min-h-[5px] min-w-[5px] border-[#ffffff51]"
            >
              <p className="text-[1px]"></p>
            </div>
          ))}
        </div>
        <div className="grid-cols-12 grid-rows-12  grid w-3/12  h-fit ">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] min-h-[5px] min-w-[5px] border-[#ffffff51]"
            >
              <p className="text-[1px]"></p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Avatar}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full relative z-[200]"
        />
        <h1 className="text-xl font-semibold ">u/amarixdev</h1>
      </div>
    </div>
  );
};

export default RedditBanner;

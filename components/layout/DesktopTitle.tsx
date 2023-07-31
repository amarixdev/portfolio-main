const DesktopTitle = ({ displayTitle }: { displayTitle: boolean }) => {
  return (
    <div
      className={`${
        displayTitle ? "opacity-100" : "opacity-0 "
      }  transition-opacity duration-500 ease-in w-full flex flex-col items-center`}
    >
      {/* <div className="  relative flex font-light text-3xl lg:text-8xl 2xl:text-9xl text-center lg:text-left ">
        <p className=" relative ">Amari</p> <div className="ml-2 ">DeV</div>
        <span className="relative right-[1px]">aughn</span>
      </div> */}
      <div className="relative sm:flex text-7xl xl:text-8xl font-extralight 3xl:text-9xl px-4 lg:px-0  text-center text-transparent ">
        <p className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] ">
          Software
        </p>{" "}
        <div className="ml-4 text-[#dbdbdb]">
          DeV
          <span className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] text-transparent relative right-2 px-2">
            eloper
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopTitle;

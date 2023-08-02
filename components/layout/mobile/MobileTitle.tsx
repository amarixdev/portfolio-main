const Title = ({ displayTitle }: { displayTitle: boolean }) => {
  return (
    <div
      className={`${
        displayTitle ? "opacity-100 " : "opacity-0 "
      } transition-opacity duration-500 ease-in w-full flex flex-col items-center justify-center`}
    >
      <div className="relative sm:flex font-extralight text-6xl px-4  text-center text-transparent ">
        <p className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] ">
          Software
        </p>{" "}
        <div className="ml-4 text-[#dbdbdb]">
          DeV
          <span className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] text-transparent px-2 right-2 relative ">
            eloper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;

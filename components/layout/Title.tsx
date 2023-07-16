const Title = ({ displayTitle }: { displayTitle: boolean }) => {
  return (
    <div
      className={`${
        displayTitle ? "opacity-100 " : "opacity-0 "
      } mt-4 transition-opacity duration-500 ease-in w-full flex flex-col items-center lg:items-start justify-center`}
    >
      <div className="relative flex font-semibold text-3xl lg:text-6xl text-center lg:text-left text-transparent ">
        <p className="text-[#dbdbdb] relative ">Amari</p>{" "}
        <div className="ml-2 bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4]  ">
          DeV
        </div>
        <span className="text-[#dbdbdb] relative right-[1px]">aughn</span>
      </div>
      <div className="relative sm:flex font-extrabold text-5xl px-4 lg:px-0 lg:text-8xl text-center text-transparent ">
        <p className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] ">
          Software
        </p>{" "}
        <div className="ml-4 text-[#dbdbdb]">
          DeV
          <span className="bg-clip-text bg-gradient-to-r from-[#b5e0fa] to-[#29aaf4] text-transparent  ">
            eloper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;

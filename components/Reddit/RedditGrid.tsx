const RedditGrid = () => {
  const numRows = 40;
  const numCols = 40;
  const gridItems = Array.from({ length: numRows * numCols });

  return (
    <>
      {/* <div className="top-0 h-[25%] bg-gradient-to-b from-[#00000000] via-[#00000052] to-[black] fixed z-10 w-full"></div> */}

      <div className="flex fixed w-full lg:w-[1000px] z-0 top-[100%] mt-20 lg:mt-24">
        <div className="w-full absolute h-[50%] bg-gradient-to-b from-[#00000000] via-black to-[black]"></div>

        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#00a2f3] h-[screen]">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#00a2f3] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#00a2f3] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#00a2f3] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51]"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RedditGrid;

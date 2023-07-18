const RedditGrid = () => {
  const numRows = 40;
  const numCols = 40;
  const gridItems = Array.from({ length: numRows * numCols });

  return (
    <>
      <div className="flex absolute w-full lg:w-[650px] z-0 h-full">
        {/* <div className="w-full absolute h-[35%] sm:h-[40%] lg:h-[45%] bg-gradient-to-b from-[#00000000] via-black to-[black]"></div> */}
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

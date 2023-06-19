const RedditGrid = () => {
  const numRows = 40;
  const numCols = 40;
  const gridItems = Array.from({ length: numRows * numCols });

  return (
    <>
      <div className="top-0 h-[25%] bg-gradient-to-b from-[#00000000] via-[#00000052] to-[black] fixed z-10 w-full"></div>
      <div className="top-[23%] h-screen bg-black fixed z-[5] w-full"></div>

      <div className="flex fixed w-full z-0">
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#ff5309] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#ff5309] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#ff5309] h-screen">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#ffffff51] "
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-12 w-3/12 grid-rows-[repeat(12)] bg-[#ff5309] h-screen">
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

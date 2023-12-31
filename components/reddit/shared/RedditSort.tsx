import { useEffect, useRef } from "react";
import { BsFire } from "react-icons/bs";
import { TbArrowBigUpLines, TbSword } from "react-icons/tb";
import { TiStarburstOutline } from "react-icons/ti";

const RedditSort = ({
  onOpenDrawer,
  setOpenDrawer,
  setFilter,
  filter,
}: {
  onOpenDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
  setFilter: (value: string) => void;
  filter: string;
}) => {
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (onOpenDrawer && !sortMenuRef.current?.contains(event.target)) {
        setOpenDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenDrawer, setOpenDrawer]);
  return (
    <>
      <div
        ref={sortMenuRef}
        className={`${
          onOpenDrawer ? "bottom-[0px]" : "bottom-[-500px]"
        } transition-all duration-300 ease-in-out bg-gradient-to-l fixed bottom-10 z-[200] w-full px-4 pt-2 pb-4 from-[#161616] via-[#151515] to-[#151515]`}
      >
        <h3 className=" text-sm font-medium text-[#919191]">SORT POSTS BY</h3>
        <div className="h-[1px] bg-[#aaaaaa72] w-full mt-3"></div>
        <div>
          <div
            className="flex items-center gap-3 mt-4"
            onClick={() => {
              setOpenDrawer(false);
              setFilter("hot");
            }}
          >
            <BsFire color={filter === "hot" ? "white" : "#aaaaaa"} size={20} />
            <p
              className={`font-semibold text-base ${
                filter == "hot" ? "text-white" : "text-[#919191] "
              } `}
            >
              Hot
            </p>
          </div>
          <div
            className="flex items-center gap-3 mt-4"
            onClick={() => {
              setOpenDrawer(false);
              setFilter("new");
            }}
          >
            <TiStarburstOutline
              color={filter === "new" ? "white" : "#aaaaaa"}
              size={20}
            />
            <p
              className={`font-semibold text-base ${
                filter == "new" ? "text-white" : "text-[#919191] "
              } `}
            >
              New
            </p>
          </div>
          <div
            className="flex items-center gap-3 mt-4"
            onClick={() => {
              setOpenDrawer(false);
              setFilter("top");
            }}
          >
            <TbArrowBigUpLines
              color={filter === "top" ? "white" : "#aaaaaa"}
              size={20}
            />
            <p
              className={`font-semibold text-base ${
                filter == "top" ? "text-white" : "text-[#919191] "
              } `}
            >
              Top
            </p>
          </div>
          <div
            className="flex items-center gap-3 mt-4"
            onClick={() => {
              setOpenDrawer(false);
              setFilter("controversial");
            }}
          >
            <TbSword
              color={filter === "controversial" ? "white" : "#aaaaaa"}
              size={20}
            />
            <p
              className={`font-semibold text-base ${
                filter == "controversial" ? "text-white" : "text-[#919191] "
              } `}
            >
              Controversial
            </p>
          </div>
          <div
            onClick={() => setOpenDrawer(false)}
            className="bg-[#222] active:text-white text-[#919191] font-bold items-center justify-center mt-3 flex py-2 rounded-3xl w-full"
          >
            <p className="text-sm"> Close</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedditSort;

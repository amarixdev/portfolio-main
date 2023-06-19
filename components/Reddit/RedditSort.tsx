import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsFire } from "react-icons/bs";
import { TiStarburstOutline } from "react-icons/ti";
import { TbArrowBigUpLines } from "react-icons/tb";
import { RiSwordLine } from "react-icons/ri";
import { TbSword } from "react-icons/tb";

const RedditSort = ({
  onOpenDrawer,
  setOpenDrawer,
}: {
  onOpenDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
}) => {
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      setInView(true);
      if (onOpenDrawer && !sortMenuRef.current?.contains(event.target)) {
        setInView(false);
        setOpenDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenDrawer, setOpenDrawer]);
  console.log(inView);
  return (
    <>
      <div
        onClick={() => {
          console.log("clicked");
        }}
        ref={sortMenuRef}
        className={`${
          onOpenDrawer ? "bottom-[0px]" : "bottom-[-500px]"
        } transition-all duration-300 ease-in-out bg-gradient-to-l fixed bottom-10 z-[200] w-full px-4 pt-2 pb-4 from-[#161616] via-[#151515] to-[#151515]`}
      >
        <h1 className=" text-sm font-medium text-[#919191]">SORT POSTS BY</h1>
        <div className="h-[1px] bg-[#aaaaaa72] w-full mt-3"></div>
        <div>
          <div className="flex items-center gap-3 mt-4">
            <BsFire color="#aaaaaa" size={20} />
            <p className="font-semibold text-base text-[#919191]">Hot</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <TiStarburstOutline color="#aaaaaa" size={20} />
            <p className=" font-semibold text-base text-[#919191]">New</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <TbArrowBigUpLines color="#aaaaaa" size={20} />
            <p className="font-semibold text-base text-[#919191]">Top</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <TbSword color="#aaaaaa" size={20} />
            <p className="font-semibold text-base text-[#919191]">
              Controversial
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedditSort;

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Profile from "../public/assets/profile.jpg";
import About from "../public/assets/album.jpg";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { MdPlayCircleFilled } from "react-icons/md";

type Props = {};

const Spotify = (props: Props) => {
  const backdropRef = useRef<HTMLImageElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const slidingDivRef = useRef<HTMLHeadingElement>(null);

  const [showBannerText, setShowBannerText] = useState(false);
  const spotifyGreen = "1DB954";

  const spotifyIconRef = useRef<HTMLDivElement>(null);
  const iconBackdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spotifyIconRef.current && iconBackdrop.current) {
      spotifyIconRef.current.style.position = "absolute";
      spotifyIconRef.current.style.top = "340px";
      spotifyIconRef.current.style.right = "20px";
      spotifyIconRef.current.style.zIndex = "50";

      iconBackdrop.current.style.position = "absolute";
      iconBackdrop.current.style.top = "350px";
      iconBackdrop.current.style.right = "30px";
      iconBackdrop.current.style.zIndex = "45";
      iconBackdrop.current.style.backgroundColor = "black";
    }

    if (backdropRef.current && bannerRef.current) {
      backdropRef.current.style.opacity = "0";
      bannerRef.current.style.opacity = "0";
    }
    const handleScroll = () => {
      if (backdropRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(scrollPosition * 0.0065, 0);
        console.log(opacity);
        backdropRef.current.style.opacity = opacity.toString();
        if (bannerRef.current && opacity >= 1) {
          bannerRef.current.style.opacity = "100";
        }
        if (bannerRef.current && opacity < 1) {
          bannerRef.current.style.opacity = "0";
        }
        if (bannerRef.current && opacity >= 1.3) {
          setShowBannerText(true);
        }
        if (bannerRef.current && opacity < 1.3) {
          setShowBannerText(false);
        }

        if (
          iconBackdrop.current &&
          spotifyIconRef.current &&
          opacity >= 1.755
        ) {
          spotifyIconRef.current.style.position = "fixed";
          spotifyIconRef.current.style.top = "70px";
          spotifyIconRef.current.style.right = "20px";

          iconBackdrop.current.style.position = "fixed";
          iconBackdrop.current.style.top = "80px";
          iconBackdrop.current.style.right = "30px";
          iconBackdrop.current.style.zIndex = "45";
          iconBackdrop.current.style.backgroundColor = "black";
        }
        if (iconBackdrop.current && spotifyIconRef.current && opacity < 1.755) {
          spotifyIconRef.current.style.position = "absolute";
          spotifyIconRef.current.style.top = "340px";
          spotifyIconRef.current.style.right = "20px";
          spotifyIconRef.current.style.zIndex = "50";

          iconBackdrop.current.style.position = "absolute";
          iconBackdrop.current.style.top = "350px";
          iconBackdrop.current.style.right = "30px";
          iconBackdrop.current.style.zIndex = "45";
          iconBackdrop.current.style.backgroundColor = "black";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("scroll", handleSlide);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      //   window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {
        <div
          style={{ opacity: "0" }}
          className="fixed top-0 w-full bg-[#072a62] flex justify-center items-center z-[40] h-[100px]"
          ref={bannerRef}
        >
          <p
            className={`font-bold text-lg  ${
              showBannerText ? "opacity-100 mt-12" : "opacity-0 mt-16"
            } transition-all duration-500 ease-in-out`}
          >
            Amari
          </p>
        </div>
      }
      <div className="bg-[#031b30] h-screen ">
        <div
          style={{ backgroundColor: "rgb(3, 27, 48)" }}
          className="fixed z-10 w-full h-[50%]"
          ref={backdropRef}
        ></div>
        <Image src={Profile} alt="profile" className="w-full fixed z-0"></Image>
        <div className="bg-gradient-to-b from-[#101010] to-[#0c0c0c] w-full h-screen z-[30] absolute top-[330px]">
          <div className="absolute top-0 bg-gradient-to-b from-[#031b30] h-[100px] w-full flex justify-between">
            <div>
              <div className="w-full p-4 gap-2 flex flex-col items-start">
                <p className="text-[#aaaaaa] font-medium text-sm ">
                  55,901,714 monthly listeners
                </p>
                <div className="w-[100px] flex items-center justify-between">
                  <button className="border-[1px] text-white text-xs font-bold border-[#aaaaaa6f] rounded-md px-3 py-[5px]">
                    Follow
                  </button>
                  <HiOutlineEllipsisHorizontal size={24} color="#aaaaaa" />
                </div>
              </div>
            </div>
          </div>

          <h1
            ref={slidingDivRef}
            className="font-extrabold text-6xl ml-2 relative bottom-16"
          >
            Amari
          </h1>
          <div className="flex justify-start flex-wrap">
            <div className="min-w-fit pl-4 text-white mt-10 font-medium text-lg z-[50] relative">
              Amari <span className="text-[#aaaaaa] font-normal">Summary</span>{" "}
              <span className="text-[#aaaaaa] mx-1">&#x2022;</span>
            </div>
            <div className="min-w-fit ml-1 text-white mt-10 font-medium text-lg z-[50] relative">
              Amari{" "}
              <span className="text-[#aaaaaa] font-normal">Experience</span>{" "}
            </div>
            <div className="w-full ml-4 text-white font-medium text-lg z-[50] relative">
              <span className="text-[#aaaaaa] mr-2">&#x2022;</span>
              Amari <span className="text-[#aaaaaa] font-normal">
                Skills
              </span>{" "}
            </div>
          </div>
          <div className="w-full flex flex-col mt-8 pl-4">
            <h1 className="font-bold">Popular Releases</h1>
            <div className="flex gap-3 mt-4 items-center">
              <Image
                src={About}
                width={50}
                height={50}
                alt="album-cover"
                className="w-[80px] h-[80px]"
              />
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-bold text-lg text-white">Summary</h1>
                <p className="text-xs">2023 Single</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <Image
                src={About}
                width={50}
                height={50}
                alt="album-cover"
                className="w-[80px] h-[80px]"
              />
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-bold text-lg text-white">Experience</h1>
                <p className="text-xs">2023 Single</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <Image
                src={About}
                width={50}
                height={50}
                alt="album-cover"
                className="w-[80px] h-[80px]"
              />
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-bold text-lg text-white">Skills</h1>
                <p className="text-xs">2023 Single</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={spotifyIconRef} className="rounded-full">
          <MdPlayCircleFilled size={60} color={spotifyGreen} />
        </div>
        <div ref={iconBackdrop} className="w-10 h-10 rounded-full"></div>
      </div>
    </>
  );
};

export default Spotify;

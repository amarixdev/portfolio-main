import { desktopPreviews } from "../../../util/image-slider";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "../../../util/hooks";
import Tweet from "./Tweet";
import { transformIndex } from "../../../util/functions";

const Projects = ({
  setPreviewsOpen,
  setImageIndex,
}: {
  setPreviewsOpen: (previewOpen: boolean) => void;
  setImageIndex: (imageIndex: string) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const iconBreakPoint = useMediaQuery(639);
  const iconSize = iconBreakPoint ? 15 : 20;

  return (
    <div className="">
      <Tweet title="promoninja">
        <p className=" text-xs xs:text-sm lg:text-base 2xl:text-lg py-4">
          PromoNinja is an an all-in-one application for anyone who enjoys
          podcasts and saving money. If you are interested in learning more
          about the project,
          <Link
            href={"https://github.com/amarixdev/promoninja-FE"}
            target="_blank"
          >
            <span
              className={`font-extrabold ${
                isBreakPoint ? "active:text-[#279bda]" : "hover:text-[#279bda]"
              }  `}
            >
              {" "}
              {isBreakPoint ? "tap" : "visit"} this link.
            </span>
          </Link>
        </p>
        <div className="gap-1 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] w-full grid-cols-2 grid-rows-2 grid rounded-2xl overflow-hidden ">
          {desktopPreviews.slice(0, 4).map((image, index) => (
            <div
              key={image.src}
              className="h-fit"
              onClick={() => {
                setImageIndex(transformIndex(index));
                setPreviewsOpen(true);
              }}
            >
              <Image
                src={image}
                alt="promoninja-previews"
                className="cursor-pointer hover:opacity-80 transition-all duration-300"
                priority
              />
            </div>
          ))}
        </div>
      </Tweet>
      <Tweet title="promoninja" reply={true}>
        <div className="pt-4 gap-1 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] w-full grid-cols-2 grid-rows-2 grid rounded-2xl overflow-hidden ">
          {desktopPreviews.slice(4, 8).map((image, index) => (
            <div
              key={image.src}
              className="h-fit"
              onClick={() => {
                setImageIndex(transformIndex(index + 4));
                setPreviewsOpen(true);
              }}
            >
              <Image
                src={image}
                alt="promoninja-previews"
                className="cursor-pointer hover:opacity-80 transition-all duration-300"
                priority
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-10 w-full items-center">
          <div className="lg:hover:bg-[#141414] transition-all duration-150 ease-in-out w-full border-[1px] px-1 py-1 items-center justify-center rounded-lg flex flex-col gap-5 sm:gap-8">
            <Link
              href={"https://promoninja.io"}
              target="_blank"
              className="w-full"
            >
              <button className="flex flex-col items-start px-2 py-1 gap-1 w-full">
                <h3 className="text-xs xs:text-sm sm:text-base  font-medium text-[#888] ">
                  promoninja.io
                </h3>
                <h3 className="text-xs xs:text-sm sm:text-base">
                  Save Money. Support Creators
                </h3>
              </button>
            </Link>
          </div>
        </div>
      </Tweet>
    </div>
  );
};

export default Projects;

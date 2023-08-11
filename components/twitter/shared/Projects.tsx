import { projectMedia } from "../../../util/project-media";

import { Button } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "../../../util/hooks";
import Tweet from "./Tweet";
import { transformIndex } from "../../../util/functions";
import PortfolioTweet, { PromoninjaTweet } from "./ProjectTweets";

const Projects = ({
  setPreviewsOpen,
  setImageIndex,
  setProjectPreviews,
}: {
  setPreviewsOpen: (previewOpen: boolean) => void;
  setImageIndex: (imageIndex: string) => void;
  setProjectPreviews: (projectPreviews: {
    desktop: StaticImageData[];
    mobile: StaticImageData[];
    project: string;
  }) => void;
}) => {
  const iconBreakPoint = useMediaQuery(639);

  return (
    <div className="">
      <Tweet title="promoninja" thread={true}>
        <PromoninjaTweet />
        <div className="border-[1px] max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] w-full grid-cols-2 grid-rows-2 grid rounded-2xl overflow-hidden ">
          {projectMedia.promoninja.desktop.slice(0, 4).map((image, index) => (
            <div
              key={image.src}
              className="h-fit"
              onClick={() => {
                setImageIndex(transformIndex(index));
                setPreviewsOpen(true);
                setProjectPreviews?.(projectMedia.promoninja);
              }}
            >
              <Image
                src={image}
                alt="promoninja-previews"
                className="cursor-pointer transition-all duration-300"
                priority
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </Tweet>
      <Tweet title="promoninja" reply={true}>
        <div className="border-[1px] relative max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] w-full grid-cols-2 grid-rows-2 grid rounded-2xl overflow-hidden ">
          {projectMedia.promoninja.desktop.slice(4, 8).map((image, index) => (
            <div key={image.src}>
              <div
                key={image.src}
                className="h-fit"
                onClick={() => {
                  setImageIndex(transformIndex(index + 4));
                  setPreviewsOpen(true);
                  setProjectPreviews?.(projectMedia.promoninja);
                }}
              >
                <Image
                  src={image}
                  alt="promoninja-previews"
                  className="cursor-pointer transition-all duration-300"
                  placeholder="blur"
                />
              </div>
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
      <Tweet title="thePortfolio" altTitle={"meta"} bottom={true}>
        <PortfolioTweet />
        <div className=" group relative border-[1px] max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] w-full grid-cols-2 grid-rows-2 grid rounded-2xl overflow-hidden ">
          {projectMedia.portfolio.desktop.map((image, index) => (
            <div key={image.src} className="relative">
              <div
                key={image.src}
                className="h-fit border-[1px] group-hover:border-[#2222229f] border-[#22222200] transition-all ease-in-out duration-75"
                onClick={() => {
                  setImageIndex(transformIndex(index));
                  setPreviewsOpen(true);
                  setProjectPreviews?.(projectMedia.portfolio);
                }}
              >
                <Image
                  src={image}
                  alt="promoninja-previews"
                  className="cursor-pointer transition-all duration-300"
                  placeholder="blur"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-10 w-full items-center">
          <div className="lg:hover:bg-[#141414] transition-all duration-150 ease-in-out w-full border-[1px] px-1 py-1 items-center justify-center rounded-lg flex flex-col gap-5 sm:gap-8">
            <Link
              href={"https://amaridevaughn.com"}
              target="_blank"
              className="w-full"
            >
              <button className="flex flex-col items-start px-2 py-1 gap-1 w-full">
                <h3 className="text-xs xs:text-sm sm:text-base  font-medium text-[#888] ">
                  amaridevaughn.com
                </h3>
                <h3 className="text-xs xs:text-sm sm:text-base">
                  Software Developer
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

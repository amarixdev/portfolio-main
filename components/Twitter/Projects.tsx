import DCategory from "../../public/assets/promoninja/desktop/desktop-category.png";
import DColor1 from "../../public/assets/promoninja/desktop/desktop-color1.png";
import DColor2 from "../../public/assets/promoninja/desktop/desktop-color2.png";
import DColor3 from "../../public/assets/promoninja/desktop/desktop-color3.png";
import DOffers from "../../public/assets/promoninja/desktop/desktop-offers.png";
import DOffers2 from "../../public/assets/promoninja/desktop/desktop-offers2.png";
import DSponsor1 from "../../public/assets/promoninja/desktop/desktop-sponsor1.png";
import DSponsor2 from "../../public/assets/promoninja/desktop/desktop-sponsor2.png";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "../../util/hooks";
import Tweet from "./Tweet";

const Projects = ({
  previewsOpen,
  setPreviewsOpen,
  setImageIndex,
}: {
  previewsOpen: boolean;
  setPreviewsOpen: (previewOpen: boolean) => void;
  setImageIndex: (imageIndex: string) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const iconBreakPoint = useMediaQuery(639);
  const iconSize = iconBreakPoint ? 15 : 20;

  const transformIndex = (index: number) => {
    return (index * -100).toString();
  };

  const desktopPreviews = [
    DColor1,
    DColor2,
    DColor3,
    DCategory,
    DOffers,
    DOffers2,
    DSponsor1,
    DSponsor2,
  ];

  return (
    <div>
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
          <div className="w-[80%] lg:w-[60%] flex flex-col gap-5">
            <Link
              href={"https://promoninja.io"}
              target="_blank"
              className="w-full"
            >
              <Button className="flex p-3 py-8 sm:py-10 lg:py-6 items-center justify-start w-full  gap-2 sm:gap-4">
                <FiExternalLink size={iconSize} />
                <p className="sm:text-lg lg:text-base">Visit Site</p>
              </Button>
            </Link>

            <Link
              href={"https://github.com/amarixdev/promoninja-FE"}
              target="_blank"
              className="w-full"
            >
              <Button className="flex p-3 py-8 sm:py-10 lg:py-6 items-center justify-start w-full gap-2 sm:gap-4">
                <BsGithub size={iconSize} />
                <p className="sm:text-lg lg:text-base">View Code</p>
              </Button>
            </Link>
          </div>
        </div>
      </Tweet>
    </div>
  );
};

export default Projects;

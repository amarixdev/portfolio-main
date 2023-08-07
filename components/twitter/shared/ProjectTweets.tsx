import Link from "next/link";
import React from "react";
import { useMediaQuery } from "../../../util/hooks";

export const PromoninjaTweet = () => {
  const isBreakPoint = useMediaQuery(1023);
  return (
    <>
      {" "}
      <p className="pt-2 pb-5 text-xs xs:text-sm lg:text-base 2xl:text-lg">
        PromoNinja is an an all-in-one application for anyone who enjoys
        podcasts and saving money. If you are interested in learning more about
        the project,
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
    </>
  );
};

export const PortfolioTweet = () => {
  const isBreakPoint = useMediaQuery(1023);
  return (
    <>
      <p className="pt-2 pb-5 text-xs xs:text-sm lg:text-base 2xl:text-lg">
        You’re already here! I had a great time creating this multi-themed
        project. I initially learned frontend development through replicating
        the user interface of popular websites such as Netflix, Youtube, and
        Twitch. I figured it would be a fun challenge to incorporate that
        principle into my personal portfolio.{" "}
        {isBreakPoint && (
          <div className="mt-4">
            If you would like to view the code for this project,
            <Link
              href={"https://github.com/amarixdev/portfolio-main"}
              target="_blank"
            >
              <span
                className={`font-extrabold ${
                  isBreakPoint
                    ? "active:text-[#279bda]"
                    : "hover:text-[#279bda]"
                }  `}
              >
                {" "}
                {isBreakPoint ? "tap" : "visit"} this link.
              </span>
            </Link>
          </div>
        )}
      </p>
    </>
  );
};

export default PortfolioTweet;

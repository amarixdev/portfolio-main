import Image from "next/image";
import { ReactNode } from "react";
import { MdVerified } from "react-icons/md";
import Profile from "../../../public/images/twitter/twitter-profile.jpg";
import { capitalizeString } from "../../../util/functions";
import { useMediaQuery } from "../../../util/hooks";

const Tweet = ({
  children,
  title,
  altTitle,
  reply,
  bottom,
  preview,
  thread,
}: {
  children: ReactNode;
  title: string;
  altTitle?: string;
  reply?: boolean;
  bottom?: boolean;
  preview?: boolean;
  thread?: boolean;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 13 : 18;
  return (
    <div
      className={`w-full flex relative ${reply || "border-t-[1px]"} ${
        bottom && "border-b-[1px]"
      }  ${thread ? "pb-5" : " pb-10"} ${reply || "pt-6"} px-4 gap-4 ${
        preview && "gap-4"
      } `}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src={Profile}
          alt={"profile"}
          height={40}
          width={40}
          priority
          className="rounded-full max-h-[40px] max-w-[40px]  lg:max-h-[45px] lg:max-w-[45px] object-cover h-full w-full"
        />
        {thread && <div className="h-full border-[1px]"></div>}
      </div>

      <div className=" w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="font-bold text-xs xs:text-sm lg:text-base 2xl:text-lg whitespace-nowrap">
              Amari DeVaughn
            </h1>
            <MdVerified color="#26a7de" size={iconSize} />
            {preview || (
              <p className="text-[#838383] text-xs xs:text-sm lg:text-base 2xl:text-lg whitespace-nowrap ">
                @amarixdev • 10h
              </p>
            )}
          </div>

          {reply && (
            <div className="flex items-center gap-1 pb-4">
              <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg text-[#888]">
                Replying to
              </p>
              <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg  text-[#26a7de]">
                @amarixdev
              </p>
            </div>
          )}
          {reply || (
            <div className="flex items-center gap-2">
              <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg  text-[#26a7de]">
                #{capitalizeString(title)}
              </p>
              {altTitle && (
                <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg  text-[#26a7de]">
                  #{altTitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tweet;

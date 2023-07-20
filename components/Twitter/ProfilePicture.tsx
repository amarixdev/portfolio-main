import Image from "next/image";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import Profile from "../../public/assets/twitter-profile.jpg";
import { useMediaQuery } from "../../util/hooks";

const ProfilePicture = ({
  setProfileOpen,
  profileOpen,
  theme,
}: {
  setProfileOpen: (value: boolean) => void;
  profileOpen: boolean;
  theme: string;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 30 : 20;
  return (
    <div
      className={`${
        profileOpen && theme === "twitter" ? "block" : "hidden"
      } fixed z-50 h-screen w-full bg-black flex items-center justify-center`}
    >
      <div className=" w-full sm:max-w-[50%] relative flex flex-col justify-center items-center h-[70%]">
        <div
          onClick={() => {
            setProfileOpen(false);
          }}
          className="cursor-pointer absolute p-2 top-0 left-0 rounded-full bg-black hover:bg-[#202020]"
        >
          <AiOutlineClose size={iconSize} color="white" />
        </div>

        <Image
          src={Profile}
          alt="profile"
          width={300}
          height={300}
          className="max-w-[250px] lg:max-w-[300px] rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;

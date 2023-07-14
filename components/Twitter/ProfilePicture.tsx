import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import Profile from "../../public/assets/twitter-profile.jpg";

const ProfilePicture = ({
  setProfileOpen,
  profileOpen,
  theme,
}: {
  setProfileOpen: (value: boolean) => void;
  profileOpen: boolean;
  theme: string;
}) => {
  return (
    <div
      className={`${
        profileOpen && theme === "twitter"
          ? "opacity-100 z-50"
          : "opacity-0 z-0"
      } fixed h-screen w-full bg-black flex items-center justify-center`}
    >
      <div className=" w-full sm:max-w-[50%] relative flex flex-col justify-center items-center h-[70%]">
        <AiFillCloseCircle
          size={30}
          color="#888"
          className="absolute top-4 left-4 cursor-pointer"
          onClick={() => {
            setProfileOpen(false);
          }}
        />

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

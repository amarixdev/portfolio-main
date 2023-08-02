import { useRef, useState } from "react";
import { HiOutlineSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";

const AudioPlayerMobile = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={"audio/lofibeat.mp3"} loop />
      <button onClick={togglePlay}>
        {isPlaying ? (
          <HiSpeakerWave color="#29aaf4" size={35} />
        ) : (
          <HiOutlineSpeakerXMark size={35} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayerMobile;

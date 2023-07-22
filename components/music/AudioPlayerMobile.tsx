import React, { RefObject, useRef, useState } from "react";

const AudioPlayerMobile = ({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>;
}) => {
  return (
    <div>
      <audio ref={audioRef} src={"audio/lofibeat.mp3"} loop />
    </div>
  );
};

export default AudioPlayerMobile;

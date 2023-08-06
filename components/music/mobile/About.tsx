import React, { Dispatch, SetStateAction, useEffect } from "react";
import MusicCollapse from "./MusicCollapse";

const About = ({
  tutorial,
  setTutorial,
  opened,
  setOpened,
}: {
  tutorial: boolean;
  setTutorial: (tutorial: boolean) => void;

  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div className="w-full flex flex-col justify-center ">
      <MusicCollapse
        opened={opened}
        setOpened={setOpened}
        tutorial={tutorial}
        setTutorial={setTutorial}
        title="summary"
        count={1}
        top={true}
      >
        <div className="flex flex-col gap-4 pt-2 px-10">
          <p className="">
            A 26 year-old software developer based in Greensboro, NC.
          </p>
          <p>
            I attended the University of North Carolina from 2015 to 2019, where
            I competed in track and field, pursued a pre-dental course of study,
            and engaged in medical research. While navigating the 2020 pandemic,
            I began to teach myself programming and, eventually, decided against
            enrolling in dental school to pursue a career in software
            development full-time.
          </p>
          <p>
            Since changing career paths, I have created various websites and
            applications, including my capstone project, Promoninja, a platform
            I developed specifically for the podcasting community. Promoninja
            has helped numerous content creators generate income through
            streamlined affiliate links, and is actively expanding.
          </p>
          <p>
            I am always sharpening my skillset, and looking for opportunities to
            challenge myself and grow. Feel welcome to explore my portfolio, and
            if you wish to connect, don&apos;t hesitate to click the icon in the
            lower-right corner.
          </p>
        </div>
      </MusicCollapse>
      <MusicCollapse
        opened={opened}
        setOpened={setOpened}
        title="beyond tech"
        count={2}
        tutorial={tutorial}
        setTutorial={setTutorial}
      >
        <div className="flex flex-col gap-4 pt-2 px-10">
          <p>Published author in the American Heart Association</p>
          <p>Atlantic Coast Conference (ACC) Silver Medalist</p>
          <p>Nature Enthusiast and Pet Lover</p>
        </div>
      </MusicCollapse>
    </div>
  );
};

export default About;

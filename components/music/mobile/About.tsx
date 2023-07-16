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
        <p className="px-10">
          A software developer based in North Carolina. I attended the
          University of North Carolina - Chapel Hill from 2015 to 2019, where I
          competed in track and field, was a pre-dental student, and medical
          researcher. I was grateful to receive an invitation to attend Dental
          School in 2021, but after long consideration and some time off during
          the pandemic I ultimately decided healthcare was not for me.{" "}
        </p>
        <p className="px-10">
          Since the career change, I have worked on a number of web applications
          for both myself and others. As a software developer, I get enjoyment
          out out of seeing my ideas manifest at every scale and take pride in
          devoting my full attention and energy to each project I undertake.
          Thank you for taking some time to learn more about me and I look
          forward to connecting.
        </p>
      </MusicCollapse>
      <MusicCollapse
        opened={opened}
        setOpened={setOpened}
        title="beyond tech"
        count={2}
        tutorial={tutorial}
        setTutorial={setTutorial}
      >
        <ul className=" list-disc px-10">
          <li>Published co-author in the American Heart Association</li>
          <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
          <li>Nature Enthusiast </li>
        </ul>
      </MusicCollapse>
    </div>
  );
};

export default About;

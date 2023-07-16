import React, { Dispatch, SetStateAction, useEffect } from "react";
import MusicCollapse from "./MusicCollapse";

type Props = {};

const About = ({
  opened,
  setOpened,
}: {
  opened: string[];
  setOpened: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div className="w-[93%] flex flex-col items-center justify-center mt-8 ">
      <MusicCollapse
        title="summary"
        top={true}
        count={1}
        setOpened={setOpened}
        opened={opened}
      >
        <p className="pt-2">
          A software developer based in North Carolina. I attended the
          University of North Carolina - Chapel Hill from 2015 to 2019, where I
          competed in track and field, was a pre-dental student, and medical
          researcher. I was grateful to receive an invitation to attend Dental
          School in 2021, but after long consideration and some time off during
          the pandemic I ultimately decided healthcare was not for me.{" "}
        </p>
        <p>
          Since the career change, I have worked on a number of web applications
          for both myself and others. As a software developer, I get enjoyment
          out out of seeing my ideas manifest at every scale and take pride in
          devoting my full attention and energy to each project I undertake.
          Thank you for taking some time to learn more about me and I look
          forward to connecting.
        </p>
      </MusicCollapse>
      <MusicCollapse
        title="beyond tech"
        count={2}
        setOpened={setOpened}
        opened={opened}
      >
        <div className="w-full text-[#aaaaaa] pt-2 flex flex-col gap-3">
          <ul className="list-disc">
            <li>Published co-author in the American Heart Association</li>
            <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
            <li>Nature Enthusiast </li>
          </ul>
        </div>
      </MusicCollapse>
    </div>
  );
};

export default About;

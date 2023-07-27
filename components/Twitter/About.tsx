import React from "react";
import Tweet from "./Tweet";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Tweet title="summary">
        <p className="text-xs xs:text-sm lg:text-lg mt-4">
          A software developer based in North Carolina. I attended the
          University of North Carolina - Chapel Hill from 2015 to 2019, where I
          competed in track and field, was a pre-dental student, and medical
          researcher. I was grateful to receive an invitation to attend Dental
          School in 2021, but after long consideration and some time off during
          the pandemic I ultimately decided healthcare was not for me.{" "}
        </p>
        <p className="text-xs xs:text-sm lg:text-lg mt-4">
          Since the career change, I have worked on a number of web applications
          for both myself and others. As a software developer, I get enjoyment
          out out of seeing my ideas manifest at every scale and take pride in
          devoting my full attention and energy to each project I undertake.
          Thank you for taking some time to learn more about me and I look
          forward to connecting.
        </p>
      </Tweet>
      <Tweet title="beyondTech">
        <div className="text-xs xs:text-sm flex flex-col gap-2 lg:text-lg mt-4">
          <p>Published co-author in the American Heart Association</p>
          <p>Atlantic Coast Conference (ACC) Silver Medalist</p>
          <p>Nature Enthusiast </p>
        </div>
      </Tweet>
    </div>
  );
};

export default About;

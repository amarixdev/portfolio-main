import React from "react";
import Tweet from "./Tweet";

const About = () => {
  return (
    <div className="flex flex-col ">
      <Tweet title="summary">
        <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg mt-4">
          A 26 year-old software developer based in Greensboro, NC.
        </p>
        <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg mt-4">
          I attended the University of North Carolina from 2015 to 2019, where I
          competed in track and field, pursued a pre-dental course of study, and
          engaged in medical research. While navigating the 2020 pandemic, I
          began to teach myself programming and, eventually, decided against
          enrolling in dental school to pursue a career in software development
          full-time.
        </p>
        <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg mt-4">
          Since changing career paths, I have created various websites and
          applications, including my capstone project, Promoninja, a platform I
          developed specifically for the podcasting community. Promoninja has
          helped numerous content creators generate income through streamlined
          affiliate links, and is actively expanding.
        </p>
        <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg mt-4">
          I am always sharpening my skillset, and looking for opportunities to
          challenge myself and grow. Feel welcome to explore my portfolio, and
          if you wish to connect, don&apos;t hesitate to click the icon in the
          lower-right corner.
        </p>
      </Tweet>
      <Tweet title="beyondTech">
        <div className="text-xs xs:text-sm flex flex-col gap-2 lg:text-base 2xl:text-lg mt-4">
          <p>Published author in the American Heart Association</p>
          <p>Atlantic Coast Conference (ACC) Silver Medalist</p>
          <p>Nature Enthusiast and Pet Lover</p>
        </div>
      </Tweet>
    </div>
  );
};

export default About;

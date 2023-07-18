import React from "react";
import RedditPost from "./RedditPost";
import { StaticImageData } from "next/image";
import { RedditAwardsState } from "../../util/types";
import RedditGold from "../../public/assets/reddit-gold.png";
import RedditPlatinum from "../../public/assets/reddit-platinum.png";
import RedditSilver from "../../public/assets/reddit-silver.png";

type Props = {};

const About = ({
  awardsArray,
  openAwards,
  setSection,
  selectedTitle,
  setSelectedTitle,
}: {
  awardsArray: RedditAwardsState;
  openAwards: any;
  setSection: (value: string) => void;
  setSelectedTitle: (value: string) => void;
  selectedTitle: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <RedditPost
        title="Summary"
        topPost={true}
        time="4h"
        upvoteCount={42}
        defaultAwards={[RedditGold, RedditPlatinum]}
        awardsArray={awardsArray}
        openAwards={openAwards}
        setSection={setSection}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      >
        <p className="text-sm lg:text-base text-[#d2d2d2] px-4">
          A 26 year-old software engineer born and raised in Greensboro, North
          Carolina. I attended the University of North Carolina - Chapel Hill
          from 2015 to 2019, where I competed in track and field, was a
          pre-dental student, and medical researcher. After receiving an invite
          to dental school in 2021, and contemplation during the pandemic, I
          ultimately decided that dentistry was not the career for me.
        </p>
        <p className="mt-4 text-sm lg:text-base text-[#d2d2d2] px-4">
          Since embarking on a new career path, I have been engaged in creating
          a multitude of web applications, among them PromoNinja, a platform
          that has garnered usage nationwide. As a software developer, I get
          enjoyment out of seeing my ideas manifest at every scale and take
          pride in devoting my full attention and energy to each project I
          undertake. I am passionate about the work I do, and eager to engage in
          a conversation about how I can contribute to your needs or the growth
          of your company. If you are interested in connecting, please refer to
          the
          <span className="font-bold"> Contact</span> section for ways to get in
          touch.
        </p>
      </RedditPost>
      <RedditPost
        title="Beyond Tech"
        time="16d"
        upvoteCount={60}
        defaultAwards={[RedditSilver, RedditSilver, RedditGold]}
        awardsArray={awardsArray}
        openAwards={openAwards}
        setSection={setSection}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      >
        <ul className="text-sm lg:text-base text-[#d2d2d2] px-4">
          <li>Published co-author in the American Heart Association</li>
          <li>Atlantic Coast Conference (ACC) Silver Medalist</li>
          <li>Nature Enthusiast</li>
        </ul>
      </RedditPost>
    </div>
  );
};

export default About;

import RedditGold from "../../../public/images/reddit/reddit-gold.png";
import RedditPlatinum from "../../../public/images/reddit/reddit-platinum.png";
import RedditSilver from "../../../public/images/reddit/reddit-silver.png";
import { RedditAwardsState } from "../../../util/types";
import RedditPost from "./RedditPost";
import AboutGraphic from "../../../public/images/reddit/about-graphic.png";
import { RefObject, useEffect } from "react";

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
  const subreddit = { name: "aboutme", image: AboutGraphic };

  return (
    <section className="flex flex-col gap-5">
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
        subreddit={subreddit}
      >
        <section className="gap-4 flex flex-col ">
          <p className="text-sm lg:text-base text-[#d2d2d2] px-4">
            A 26 year-old software developer based in Greensboro, NC.
          </p>
          <p className="text-sm lg:text-base text-[#d2d2d2] px-4">
            I attended the University of North Carolina - Chapel Hill from 2015
            to 2019, where I competed in track and field, pursued a pre-dental
            course of study, and engaged in medical research. While navigating
            the 2020 pandemic, I began to teach myself programming and,
            eventually, decided against enrolling in dental school to pursue a
            career in software development full-time.
          </p>
          <p className="text-sm lg:text-base text-[#d2d2d2] px-4">
            Since changing career paths, I have created various websites and
            applications, including my capstone project, Promoninja, a platform
            I developed specifically for the podcasting community. Promoninja
            has helped numerous content creators generate income through
            streamlined affiliate links, and is actively expanding.
          </p>
          <p className="text-sm lg:text-base text-[#d2d2d2] px-4">
            I am always sharpening my skillset, and looking for opportunities to
            challenge myself and grow. Feel welcome to explore my portfolio, and
            if you wish to connect, don&apos;t hesitate to click the icon in the
            lower-right corner.
          </p>
        </section>
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
        subreddit={subreddit}
      >
        <section className="text-sm lg:text-base text-[#d2d2d2] px-4 flex flex-col gap-2">
          <p>Published author in the American Heart Association</p>
          <p>Atlantic Coast Conference (ACC) Silver Medalist</p>
          <p>Nature Enthusiast and Pet Lover</p>
        </section>
      </RedditPost>
    </section>
  );
};

export default About;

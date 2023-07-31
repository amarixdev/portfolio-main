import React from "react";
import { RedditAwardsState } from "../../util/types";

import Image, { StaticImageData } from "next/image";
import HTML from "../../public/assets/skills/html.jpg";
import CSS from "../../public/assets/skills/css.jpg";
import Firebase from "../../public/assets/skills/firebase.jpg";
import Git from "../../public/assets/skills/git.jpg";
import Github from "../../public/assets/skills/github.jpg";
import GraphQl from "../../public/assets/skills/graphql.jpg";
import Javascript from "../../public/assets/skills/javascript.jpg";
import Next from "../../public/assets/skills/next.jpg";
import Node from "../../public/assets/skills/node.jpg";
import REACT from "../../public/assets/skills/react.jpg";
import SASS from "../../public/assets/skills/sass.jpg";
import Tailwind from "../../public/assets/skills/tailwind.jpg";
import Typescript from "../../public/assets/skills/typescript.jpg";
import Prisma from "../../public/assets/skills/prisma.png";
import PhotoShop from "../../public/assets/skills/photoshop.png";
import Figma from "../../public/assets/skills/figma1.png";

import Wordpress from "../../public/assets/skills/wordpress.png";
import MongoDB from "../../public/assets/skills/mongodb.png";
import { truncateString } from "../../util/functions";
import { BsExplicitFill } from "react-icons/bs";
import { useMediaQuery } from "../../util/hooks";

interface SkillType {
  image: StaticImageData;
  name: string;
  award: string;
}

interface SkillsType {
  [key: string]: SkillType;
}

const Skills = ({
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
  const skills: SkillsType = {
    html: {
      image: HTML,
      name: "HTML5",
      award: "Semantic Savant",
    },
    css: {
      image: CSS,
      name: "CSS3",
      award: "Pixel Picasso",
    },
    javascript: {
      image: Javascript,
      name: "Javascript",
      award: "DOMinator",
    },
    typescript: {
      image: Typescript,
      name: "Typescript",
      award: "Declaration Wizard",
    },
    react: {
      image: REACT,
      name: "React",
      award: "Reactronaut",
    },
    next: {
      image: Next,
      name: "NextJS",
      award: "Next Ninja",
    },
    node: {
      image: Node,
      name: "NodeJS",
      award: "Async Artisan",
    },
    graphql: {
      image: GraphQl,
      name: "GraphQL",
      award: "Schema Sorcerer",
    },
    git: {
      image: Git,
      name: "Git",
      award: "Commit Connoisseur",
    },
    github: {
      image: Github,
      name: "Github",
      award: "Repo Maestro",
    },
    tailwind: {
      image: Tailwind,
      name: "Tailwind",
      award: "Tailwind Titan",
    },
    sass: {
      image: SASS,
      name: "SASS",
      award: "Stylish SASSmaster",
    },
    wordpress: {
      image: Wordpress,
      name: "Wordpress",
      award: "Lord of Pluginsphere",
    },
    prisma: {
      image: Prisma,
      name: "Prisma",
      award: "Prismatic Prodigy",
    },
    photoshop: {
      image: PhotoShop,
      name: "PhotoShop",
      award: "Layer Luminary",
    },
    figma: {
      image: Figma,
      name: "Figma",
      award: "Design Dynamo",
    },
    mongo: {
      image: MongoDB,
      name: "MongoDB",
      award: "NoSQL Oracle",
    },
    firebase: {
      image: Firebase,
      name: "Firebase",
      award: "BaaS Boss",
    },
  };
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 50 : 30;
  return (
    <div className=" bg-[#161616] flex flex-col gap-5 pt-4">
      {Object.keys(skills).map((skillKey) => (
        <div
          key={skills[skillKey].name}
          className="pl-4 flex w-full items-center gap-4 py-2"
        >
          <div className="rounded-2xl p-4 bg-[#222222]">
            <Image
              width={iconSize}
              height={iconSize}
              src={skills[skillKey].image}
              alt="html"
              className="min-h-[50px] lg:min-h-[30px] "
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl text-[#d2d2d2]">
              {skills[skillKey].award}
            </p>
            <p className="font-normal text-base text-[#aaaaaa]">
              {skills[skillKey].name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

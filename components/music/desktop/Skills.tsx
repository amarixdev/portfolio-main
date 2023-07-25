import Image, { StaticImageData } from "next/image";
import React from "react";
import HTML from "../../../public/assets/skills/html.jpg";
import CSS from "../../../public/assets/skills/css.jpg";
import Firebase from "../../../public/assets/skills/firebase.jpg";
import Git from "../../../public/assets/skills/git.jpg";
import Github from "../../../public/assets/skills/github.jpg";
import GraphQl from "../../../public/assets/skills/graphql.jpg";
import Javascript from "../../../public/assets/skills/javascript.jpg";
import Next from "../../../public/assets/skills/next.jpg";
import Node from "../../../public/assets/skills/node.jpg";
import REACT from "../../../public/assets/skills/react.jpg";
import SASS from "../../../public/assets/skills/sass.jpg";
import Tailwind from "../../../public/assets/skills/tailwind.jpg";
import Typescript from "../../../public/assets/skills/typescript.jpg";
import Prisma from "../../../public/assets/skills/prisma.png";
import PhotoShop from "../../../public/assets/skills/photoshop.png";
import Figma from "../../../public/assets/skills/figma1.png";

import Wordpress from "../../../public/assets/skills/wordpress.png";
import MongoDB from "../../../public/assets/skills/mongodb.png";
import { truncateString } from "../../../util/functions";
import { BsExplicitFill } from "react-icons/bs";

interface SkillType {
  image: StaticImageData;
  name: string;
  type: string;
}

interface SkillsType {
  [key: string]: SkillType;
}

const Skills = ({
  opened,
  setOpened,
}: {
  opened: string[];
  setOpened: any;
}) => {
  const skills: SkillsType = {
    html: {
      image: HTML,
      name: "HTML5",
      type: "Frontend",
    },
    css: {
      image: CSS,
      name: "CSS3",
      type: "Frontend",
    },
    javascript: {
      image: Javascript,
      name: "Javascript",
      type: "Fullstack",
    },
    typescript: {
      image: Typescript,
      name: "Typescript",
      type: "Fullstack",
    },
    react: {
      image: REACT,
      name: "React",
      type: "Frontend",
    },
    next: {
      image: Next,
      name: "NextJS",
      type: "Fullstack",
    },
    node: {
      image: Node,
      name: "NodeJS",
      type: "Backend",
    },
    graphql: {
      image: GraphQl,
      name: "GraphQL",
      type: "Fullstack",
    },
    git: {
      image: Git,
      name: "Git",
      type: "Version Control",
    },
    github: {
      image: Github,
      name: "Github",
      type: "Collaboration",
    },
    tailwind: {
      image: Tailwind,
      name: "Tailwind",
      type: "Frontend",
    },
    sass: {
      image: SASS,
      name: "SASS",
      type: "Frontend",
    },
    wordpress: {
      image: Wordpress,
      name: "Wordpress",
      type: "Content Management",
    },
    prisma: {
      image: Prisma,
      name: "Prisma",
      type: "Backend",
    },
    photoshop: {
      image: PhotoShop,
      name: "PhotoShop",
      type: "UI/UX",
    },
    figma: {
      image: Figma,
      name: "Figma",
      type: "UI/UX",
    },
    mongo: {
      image: MongoDB,
      name: "MongoDB",
      type: "Database",
    },
    firebase: {
      image: Firebase,
      name: "Firebase",
      type: "BaaS",
    },
  };

  return (
    <div className="pt-4 px-4 w-full gap-x-[5%] gap-y-8 grid grid-cols-5 3xl:grid-cols-6 place-items-center ">
      {Object.keys(skills).map((skillKey: string) => (
        <div
          key={skills[skillKey].name}
          className=" flex relative flex-col items-start justify-center my-10 rounded-lg h-0 w-[70%] pb-[70%] bg-gradient-to-br from-[#161616] to-[#202020] "
        >
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <Image
              src={skills[skillKey].image}
              alt={`${skills[skillKey].name}`}
              className="object-contain "
            />
          </div>
          <div className="absolute bottom-[-55px]">
            <div className="flex items-center gap-2">
              <p className="text-white font-medium">{skills[skillKey].name}</p>
              <BsExplicitFill size={15} color="#aaaaaa" />{" "}
            </div>

            <p className="text-[#aaaaaa] whitespace-nowrap">
              {truncateString(skills[skillKey].type, 15)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

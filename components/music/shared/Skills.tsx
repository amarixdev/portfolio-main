import Image, { StaticImageData } from "next/image";
import React from "react";
import HTML from "../../../public/images/skills/html.jpg";
import CSS from "../../../public/images/skills/css.jpg";
import Firebase from "../../../public/images/skills/firebase.jpg";
import Git from "../../../public/images/skills/git.jpg";
import Github from "../../../public/images/skills/github.jpg";
import GraphQl from "../../../public/images/skills/graphql.jpg";
import Javascript from "../../../public/images/skills/javascript.jpg";
import Next from "../../../public/images/skills/next.png";
import Node from "../../../public/images/skills/node.jpg";
import REACT from "../../../public/images/skills/react.png";
import SASS from "../../../public/images/skills/sass.jpg";
import Tailwind from "../../../public/images/skills/tailwind.jpg";
import Typescript from "../../../public/images/skills/typescript.jpg";
import Prisma from "../../../public/images/skills/prisma.png";
import PhotoShop from "../../../public/images/skills/photoshop.png";
import Figma from "../../../public/images/skills/figma1.png";
import Wordpress from "../../../public/images/skills/wordpress.png";
import MongoDB from "../../../public/images/skills/mongodb.png";
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

const Skills = ({}: {}) => {
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
    <section className="px-4 lg:pt-4 w-full gap-x-[5%] gap-y-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 3xl:grid-cols-6 place-items-center ">
      {Object.keys(skills).map((skillKey: string) => (
        <div
          key={skills[skillKey].name}
          className=" flex relative flex-col items-start justify-center my-10 rounded-lg h-0 w-[80%] pb-[80%] lg:pb-[70%] lg:w-[70%] bg-gradient-to-br from-[#161616] to-[#202020] "
        >
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <Image
              src={skills[skillKey].image}
              alt={`${skills[skillKey].name}`}
              className="object-contain"
              placeholder="blur"
            />
          </div>
          <div className="absolute bottom-[-55px]">
            <div className="flex items-center gap-2">
              <h3 className="text-white font-medium">{skills[skillKey].name}</h3>
              <BsExplicitFill size={15} color="#aaaaaa" />{" "}
            </div>

            <h4 className="text-[#aaaaaa] whitespace-nowrap">
              {truncateString(skills[skillKey].type, 15)}
            </h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

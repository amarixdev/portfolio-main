import React from "react";
import { MdVerified } from "react-icons/md";

import Image, { StaticImageData } from "next/image";
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
import { FaRetweet } from "react-icons/fa";
import { useMediaQuery } from "../../../util/hooks";
interface SkillType {
  image: StaticImageData;
  name: string;
  tweet: string;
  hashtag?: string;
}

interface SkillsType {
  [key: string]: SkillType;
}

const Skills = () => {
  const isBreakPoint = useMediaQuery(1023);
  const iconSize = isBreakPoint ? 13 : 18;
  const skills: SkillsType = {
    html: {
      image: HTML,
      name: "HTML5",
      tweet:
        "The backbone of the web, providing the structure and content for websites",
    },
    css: {
      image: CSS,
      name: "CSS3",
      tweet:
        "The design wizard that turns plain HTML into visually stunning websites! 🎨✨ ",
    },
    javascript: {
      image: Javascript,
      name: "Javascript",
      tweet:
        "Versatile and widely-used programming language powering interactivity and dynamic content on the web.",
      hashtag: "#Javascript #WebDev",
    },
    typescript: {
      image: Typescript,
      name: "Typescript",
      tweet:
        "A superset of JavaScript that adds static typing and enhanced features, providing better tooling and code reliability.",
    },
    react: {
      image: REACT,
      name: "React",
      tweet:
        "JavaScript library for building dynamic user interfaces with reusable components and virtual DOM.",
      hashtag: "#React #JavaScript #UI",
    },
    next: {
      image: Next,
      name: "NextJS",
      tweet:
        "A powerful and versatile React framework for building fast and SEO-friendly web applications with ease. ",
      hashtag: "#NextJS #React",
    },
    node: {
      image: Node,
      name: "NodeJS",
      tweet:
        "Open-source JavaScript runtime environment that enables server-side execution and facilitates building scalable web applications.",
    },
    graphql: {
      image: GraphQl,
      name: "GraphQL",
      tweet:
        "Flexible and efficient query language for APIs, empowering clients to request exactly the data they need.",
      hashtag: "#GraphQL #APIs",
    },
    git: {
      image: Git,
      name: "Git",
      tweet:
        "Git is a distributed version control system that enables collaboration and tracks changes in code effortlessly.",
      hashtag: "#Git #VersionControl",
    },
    github: {
      image: Github,
      name: "Github",
      tweet:
        "A popular web-based platform for version control and collaborative software development, fostering open-source innovation and community collaboration",
    },
    tailwind: {
      image: Tailwind,
      name: "Tailwind",
      tweet:
        "Utility-first, highly customizable, and developer-friendly CSS framework that streamlines web design like never before!",
      hashtag: "#TailwindCSS #WebDev",
    },
    sass: {
      image: SASS,
      name: "SASS",
      tweet:
        "Syntactically Awesome Style Sheets - a powerful CSS preprocessor that simplifies and enhances the way you write and organize CSS code! 🎨 ",
    },
    wordpress: {
      image: Wordpress,
      name: "Wordpress",
      tweet:
        "Popular and user-friendly open-source platform for creating and managing websites and blogs. 📝💻 ",
      hashtag: "#WebDesign #Blogging #WordPress",
    },
    prisma: {
      image: Prisma,
      name: "Prisma",
      tweet:
        "A modern database toolkit for Node.js and TypeScript that simplifies database access and management.",
      hashtag: " #Prisma #Nodejs #TypeScript",
    },
    photoshop: {
      image: PhotoShop,
      name: "PhotoShop",
      tweet:
        "The industry-standard photo editing software that empowers creativity and transforms images like a pro! 🎨 ",
      hashtag: "#PhotoshopMagic",
    },
    figma: {
      image: Figma,
      name: "Figma",
      tweet:
        "A collaborative design tool that allows teams to create, prototype, and share user interfaces and designs in real-time.",
    },
    mongo: {
      image: MongoDB,
      name: "MongoDB",
      tweet:
        "Flexible and scalable NoSQL database that stores data in JSON-like documents, perfect for modern app development. ",
      hashtag: "#MongoDB #NoSQL",
    },
    firebase: {
      image: Firebase,
      name: "Firebase",
      tweet:
        "Google's all-in-one platform for app developers, offering real-time database, hosting, authentication, and more! 🚀",
    },
  };

  return (
    <section className="pt-6">
      {Object.keys(skills).map((skillKey, index) => (
        <section
          key={skills[skillKey].name}
          className={`w-full flex flex-col border-b-[1px] ${
            index === 0 ? "px-4 pb-4" : "p-4"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-3 pl-10">
              <FaRetweet color="#747474" size={20} />
              <p className="font-bold text-xs xs:text-sm lg:text-base text-[#838383]">
                Amari DeVaughn Retweeted
              </p>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <Image
                src={skills[skillKey].image}
                alt={skills[skillKey].name}
                height={40}
                width={40}
                placeholder="blur"
                className="rounded-full max-h-[40px] max-w-[40px]  lg:max-h-[45px] lg:max-w-[45px] object-cover h-full w-full"
              />
              <div className=" w-full">
                <div className="flex flex-col ">
                  <div className="flex items-center gap-1">
                    <h3 className="font-bold text-xs xs:text-sm lg:text-base 2xl:text-lg whitespace-nowrap">
                      {skills[skillKey].name}
                    </h3>
                    <MdVerified color="#ecc526" size={iconSize} />
                    {
                      <h4 className="text-[#838383] text-xs xs:text-sm lg:text-base 2xl:text-lg whitespace-nowrap ">
                        {`@${skills[skillKey].name.toLowerCase()} • 10h`}
                      </h4>
                    }
                  </div>
                  <p className="text-xs xs:text-sm lg:text-base 2xl:text-lg">
                    {skills[skillKey].tweet}
                    <span className="pl-1 text-[#279bda]">
                      {skills[skillKey].hashtag}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Skills;

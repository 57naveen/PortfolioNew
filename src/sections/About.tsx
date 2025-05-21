"use client";

import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Card from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import nodejs from "@/assets/icons/nodejs-icon.svg";
import expressjs from "@/assets/icons/expressjs-icon.svg";
import redux from "@/assets/icons/redux-svgrepo-com.svg";
import mongodb from "@/assets/icons/mongodb-svgrepo-com.svg";
import postman from "@/assets/icons/postman-svgrepo-com.svg";
import aws from "@/assets/icons/aws-svgrepo-com (1).svg";
import firebase from "@/assets/icons/firebase-svgrepo-com.svg";
import tailwind from "@/assets/icons/tailwind-css-svgrepo-com.svg";
import StarIcon from '@/assets/icons/star.svg'

import mapIamge from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import TechWishlistScrollUp from "@/components/TechWishlistScrollUp";

import {
  SiJavascript,
  SiLangchain,
  SiAmazon,
  SiOpenai,
  SiTensorflow,
  SiGithubactions,
  SiPostman,
  SiApacheairflow,
} from "react-icons/si";
import { FaBrain, FaServer, FaRobot, FaCode,FaAws  } from "react-icons/fa";
import { LiaRobotSolid } from "react-icons/lia";

const TechWishlist = [
  {
    title: "LangChain",
    iconType: SiLangchain,
  },
  {
    title: "LLM Agentic Workflows",
    iconType: FaRobot,
  },
  {
    title: "Automation Pipelines",
    iconType: SiGithubactions,
  },
  {
    title: "RAG",
    iconType: LiaRobotSolid,
  },
  {
    title: "MCP Server",
    iconType: FaServer,
  },
  {
    title: "Prompt Engineering",
    iconType: FaCode,
  },
  {
    title: "Multimodal AI",
    iconType: FaBrain,
  },
  {
    title: "AWS AI Services",
    iconType: FaAws,
  },
];

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "nodejs",
    iconType: nodejs,
  },
  {
    title: "expressjs",
    iconType: expressjs,
  },
  {
    title: "Redux",
    iconType: redux,
  },
  {
    title: "MongoDb",
    iconType: mongodb,
  },
  {
    title: "Postman",
    iconType: postman,
  },
  {
    title: "aws",
    iconType: aws,
  },
  {
    title: "firebase",
    iconType: firebase,
  },
  {
    title: "tailwind",
    iconType: tailwind,
  },
];

const hobbies = [
  {
    title: "Coding",
    emoji: "💻",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Travel",
    emoji: "✈",
    left: "40%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🤸‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Riding",
    emoji: "🚲",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World "
          description="Learn more about who I am, what I do, and what inspires me.  "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1  md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            {/* Tech Wishlist Card */}
            <Card className="h-[320px] col-span-2 mb-8 lg:col-span-1">
              <div>
              <div className="inline-flex  items-center gap-1">
          <StarIcon className='size-9 text-emerald-300  ' />
          <h3 className="font-serif text-3xl">Tech Wishlist</h3>
           </div>
          <p className="text-sm text-white/60 mt-2 mb-2  ml-8 ">What’s next on my radar.</p>
              </div>
  

              <TechWishlistScrollUp
                items={TechWishlist}
                className=""
              />
            </Card>

            <Card className="h-[320px] col-span-3 lg:col-span-2 ">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-5 mb-3 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-5 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col mb-8 md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                    className="
                inline-flex gap-2 items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute
                "
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapIamge}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 
  after:outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 
    -z-20 animate-ping [animation-duration:2s]"
                ></div>

                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 
    -z-10"
                ></div>
                <Image
                  src={smileMemoji}
                  className="size-20"
                  alt="smile emoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

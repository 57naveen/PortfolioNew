import vision from "@/assets/images/vision.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import mansionleaf from "@/assets/images/mansionleaf.png";
import netflix from "@/assets/images/Netflix.png";

const portfolioProjects = [ 
  {
    company: "vision.Ai",
    year: "2025",
    title: "Text To Image Saas",
    results: [
      { title: "Built a sleek, responsive landing page with modern gradient visuals" },
      { title: "Designed interactive UI to showcase real-time AI-generated outputs" },
      { title: "Integrated AI model to convert text prompts into high-quality images" },
    ],
    link: "https://vision-ai-2f5ca.web.app/",
    image: vision,
  },
  {
    company: "Mansion Leafs",
    year: "2025",
    title: "Green Saas Landing Page",
    results: [
      { title: "Visually immersive hero section with 3D plant imagery" },
      { title: "Eco-conscious design with calming green palette and clean typography" },
      { title: "Mobile-first responsive layout with optimized performance" },
      
    ],
    link: "https://mansionleafs.web.app/",
    image: mansionleaf,
  },
  {
    company: "Netflix",
    year: "2025",
    title: "Netflix + GPT Clone",
    results: [
      { title: "Integrated GPT-powered semantic search for smarter content discovery" },
      { title: "Implemented Netflix-style UI with dynamic hero banner and carousels" },
      { title: "Enhanced user engagement with AI-assisted movie recommendations" },
    ],
    link: "https://netflixgpt-242ef.web.app/",
    image: netflix, 
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow=" Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project,index) => (
            <Card
              key={project.title}
              className=" px-8 
                pt-8  md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top:`calc(64px + ${index * 40}px)`
                }}
            >
             

              <div className="lg:grid lg:grid-cols-2 ">
                  <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
            
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-nowrap ">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result,index) => (
                  <li key={index} className="flex gap-2 md:text-base text-sm text-white/50">
                    <CheckCircleIcon className="size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>{" "}
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              </div>
              <div className="relative">
              <Image  src={project.image} alt={project.title} className="mt-3 mx-4 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none" />
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

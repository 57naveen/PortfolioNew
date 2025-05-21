'use client'

import reactjs from "@/assets/images/Reactjs.webp";
import nodejs from "@/assets/images/Nodejs.jpg";
import js from "@/assets/images/JavaScript.jpg";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const certificates = [
  {
    name: "Namaste React.js",
    issuer: "NamasteDev.com",
    description:
      "In-depth course on React.js fundamentals including JSX, component lifecycle, hooks, and performance optimization. Built several real-world projects and learned how React works under the hood.",
    logo: reactjs,
    date: "February 2025",
    link: "https://namastedev.com/naveenkishore65/certificates/namaste-react", 
  },
  {
    name: "Namaste Node.js",
    issuer: "NamasteDev.com",
    description:
      "Hands-on backend development course covering Node.js, Express, RESTful APIs, middleware, authentication, and deployment strategies. Built scalable backend services from scratch.",
    logo: nodejs,
    date: "April 2025",
    link: "https://namastedev.com/naveenkishore65/certificates/namaste-node", 
  },
  {
    name: "Namaste JavaScript",
    issuer: "NamasteDev.com",
    description:
      "Comprehensive JavaScript course exploring execution context, closures, hoisting, async programming, event loop, and the call stack in depth. Strengthened problem-solving and core JS knowledge.",
    logo: js,
    date: "March 2025",
    link: "https://namastedev.com/naveenkishore65/certificates/namaste-javascript", 
  },
];


export const CertificatesSection = () => {
 return (
  <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Certifications"
        title="What I've Earned Along the Way"
        description="Here are some certifications I’ve earned to strengthen my skills and stay updated."
      />
      <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {certificates.map((certificate) => (
                <Card
                  key={`${certificate.name}-${index}`}
                  className="max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-16 rounded-2xl inline-flex items-center justify-center  flex-shrink-0 overflow-hidden">
                      <Image
                        src={certificate.logo}
                        alt={certificate.issuer}
                        className="w-full h-full object-contain "
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{certificate.name}</div>
                      <div className="text-sm text-white/40">{certificate.issuer}</div>
                      <div className="text-xs text-white/50 mt-1">{certificate.date}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm">{certificate.description}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-blue-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

};

'use client';

import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/naveenkishore-s/",
  },
  {
    title: "GitHub",
    href: "https://github.com/57naveen?tab=repositories",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-5 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 
             -translate-x-1/2 bg-emerald-300/30 
             [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] 
             -z-10"
      ></div>

      <div className="container">
        <div className="border-t md:flex-row md:justify-between border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <div>
            <nav className="flex flex-col items-center gap-8 md:flex-row">
              {footerLinks.map((link) => (
                <motion.a
                  href={link.href}
                  key={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

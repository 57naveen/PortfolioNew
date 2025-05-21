// components/Header.tsx
'use client'

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItem = (href: string, label: string) => {
    const isActive = activeSection === href.replace("#", "");
    return (
      <a
        href={href}
        className={`nav-item ${
          isActive ? "bg-white text-gray-900" : "hover:bg-white/70 hover:text-gray-900"
        }`}
      >
        {label}
      </a>
    );
  };

  return (
    <div className="flex items-center justify-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItem("#", "Home")}
        {navItem("#projects", "Projects")}
        {navItem("#about", "About")}
        {navItem("#contact", "Contact")}
      </nav>
    </div>
  );
};

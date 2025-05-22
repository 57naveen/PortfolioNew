import React from "react";
import SectionHeader from "@/components/SectionHeader";

// Type Definitions
interface Role {
  title: string;
  duration: string;
  skills: string[];
}

interface Experience {
  company: string;
  type: string;
  location: string;
  roles: Role[];
}

// Experience Data
const experiences: Experience[] = [
  {
    company: "eSoftLabs",
    type: "Full-time",
    location: "Hyderabad, Telangana, India · On-site",
    roles: [
      {
        title: "Full-stack Developer",
        duration: "Oct 2023 – Present · 1 yr 8 mos",
        skills: ["Front-End Development", "React.js", "JavaScript", "Django", "Node.js"],
      },
      {
        title: "Staff Consultant",
        duration: "Oct 2022 – Sep 2023 · 1 yr",
        skills: ["Supply Chain Management", "Logistics Management", "Technical Support", "Warehouse Operations"],
      },
      {
        title: "Trainee Consultant",
        duration: "Apr 2022 – Oct 2022 · 7 mos",
        skills: ["Inventory Management", "Microsoft SQL Server", "SQL Server Reporting Services (SSRS)", "Warehouse Management Systems", "HighJump"],
      },
    ],
  },
];

// Experience Card Component
const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition">
      <div className="flex gap-2">

      
      <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
      <p className="text-sm mt-1.5 text-white/60">- {experience.type}</p>
</div>
      <div className="relative mt-6 pl-4 border-l border-white/20 space-y-6">
        {experience.roles.map((role, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-white"></div>

            {/* Title + Duration */}
            <div className="text-white">
              <p className="font-medium ml-2.5">{role.title}</p>
              <p className="text-sm text-white/50">{role.duration}</p>
            </div>

            {/* Skills */}
            {/* <ul className=" lg:flex mt-2 text-sm text-white/80 list-disc list-inside ml-1">
              {role.skills.map((skill, i) => (
                <li className="lg:p-2 lg:text-nowrap" key={i}>{skill}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-white/40">Location: {experience.location}</p>
    </div>
  );
};

// Main Export
export const WorkExperience: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="My Work Experience"
          description="Here's my professional journey and contributions."
        />

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

import SectionHeader from "@/components/SectionHeader";
import React from "react";

export const WorkExperience = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="My Work Experience"
          description="Here's my professional journey and contributions."
        />

        <div className="mt-12 space-y-8">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Software Developer
                </h3>
                <p className="text-sm text-white/60">
                  eSoftLabs · Full-time
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-sm text-white/50">
                Apr 2022 – Present · 3 yrs 2 mos
              </div>
            </div>

            <div className="mt-4 text-sm text-white/80">
              <p>
                Started in a HighJump SQL support role and later transitioned into Web Development. Currently focused on building AI-powered products using modern frontend technologies.
              </p>
              <p className="mt-2 text-white/40">
                Location: Hyderabad, Telangana, India · On-site
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import { useState } from "react";
import { teamData, departments, type Department } from "@/data/teamData";
import ClipboardCard from "@/components/clipboard";

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState<Department>("Presidents");

  const filteredMembers = teamData.filter((m) => m.department === activeTab);

  const leads = filteredMembers.filter((m) =>
    ["VP", "Lead", "President", "Founder"].some((title) =>
      m.role.includes(title)
    )
  );

  const executives = filteredMembers.filter(
    (m) =>
      !["VP", "Lead", "President", "Founder"].some((title) =>
        m.role.includes(title)
      )
  );

  return (
    <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center">
      <div className="relative my-12 text-center">
        <div className="absolute -top-7 -left-11 rotate-12 transform">
          <Image
            src="/svgs/accents/bocchiPinkAccent1.svg"
            alt="Decorative Petals"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute -right-6 -bottom-4 rotate-10 transform text-3xl text-pink-300">
          <Image
            src="/svgs/accents/bocchiPinkAccent2.svg"
            alt="Decorative Petals"
            width={25}
            height={25}
          />
        </div>

        <h1 className="font-funnel-display text-royal-purple text-4xl font-bold text-shadow-sm sm:text-6xl">
          Meet the Team!
        </h1>
      </div>

      <nav className="bg-lavender mx-auto mt-2 mb-16 w-4/5 max-w-5xl rounded-2xl p-2 shadow-md lg:w-3/4">
        <ul className="scrollbar-hide flex flex-nowrap items-center gap-2 overflow-x-auto px-4 pb-1">
          {departments.map((dept) => (
            <li key={dept} className="flex-none text-center sm:flex-1">
              <button
                onClick={() => setActiveTab(dept)}
                className={`w-full rounded-xl px-4 py-3 font-bold whitespace-nowrap transition-all duration-200 md:text-xl ${
                  activeTab === dept
                    ? "text-royal-purple bg-purple-100/20 shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-12">
        {/* VP Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
          {leads.map((member) => (
            <ClipboardCard
              key={`${member.department}-${member.id}`}
              member={member}
            />
          ))}
        </div>

        {/* Separator if both groups exist */}
        {leads.length > 0 && executives.length > 0 && (
          <div className="h-1 w-32 rounded-lg bg-gray-500/50" />
        )}

        {/* General Executive Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
          {executives.map((member) => (
            <ClipboardCard
              key={`${member.department}-${member.id}`}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

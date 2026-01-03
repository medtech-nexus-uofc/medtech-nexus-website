"use client";

import ProfileCard from "@/components/profileCard";
import { useState } from "react";

const teams = {
  Admin: [
    { name: "Nhi Luu", title: "Co-President" },
    { name: "Lebron James", title: "Co-President" },
  ],

  Tech: [
    { name: "Jane Doe", title: "VP Tech" },
    { name: "John Smith", title: "Web Developer" },
  ],
  Marketing: [
    { name: "Michael Jordan", title: "VP Marketing" },
    { name: "Lebron James", title: "Marketing Lead" },
  ],
  Events: [{ name: "Malcolm Todd", title: "VP Events" }],
  Finance: [{ name: "Jane Smith", title: "VP Finance" }],
};

export default function OurTeam() {
  const [selectedTeam, setSelectedTeam] = useState<keyof typeof teams>("Admin");

  return (
    <div className="font-funnel-display flex flex-col items-center justify-center">
      <h1 className="font-funnel-display text-royal-purple text-2xl font-bold text-shadow-sm md:text-3xl lg:text-4xl">
        Meet the Team!
      </h1>

      {/* Tabs */}
      <div className="bg-lavender m-2 flex gap-16 rounded-md p-4 px-8">
        {Object.keys(teams).map((team) => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team as keyof typeof teams)}
            className={`pb-2 text-xl font-semibold transition ${
              selectedTeam === team
                ? "border-royal-purple text-royal-purple border-b-2"
                : "hover:text-royal-purple text-white"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {teams[selectedTeam].map((member) => (
          <ProfileCard
            key={member.name}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>
  );
}

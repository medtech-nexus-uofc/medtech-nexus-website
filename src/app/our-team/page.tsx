"use client";

import Image from "next/image";
import { useState } from "react";

// --- Types ---
type Department =
  | "Administration"
  | "Technology"
  | "Events"
  | "Marketing"
  | "Finance";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: Department;
  color: string; // Tailwind color class for the clipboard background
}

// --- Mock Data ---
const teamData: TeamMember[] = [
  // Technology Team (Matches the 5 cards in your image)
  {
    id: 1,
    name: "Jane Doe",
    role: "VP Tech",
    department: "Technology",
    color: "bg-[#F27474]",
  }, // Red/Salmon
  {
    id: 2,
    name: "Jane Doe",
    role: "VP Tech",
    department: "Technology",
    color: "bg-[#FAB1C6]",
  }, // Pink
  {
    id: 3,
    name: "Jane Doe",
    role: "VP Tech",
    department: "Technology",
    color: "bg-[#B5A8D8]",
  }, // Periwinkle
  {
    id: 4,
    name: "Jane Doe",
    role: "VP Tech",
    department: "Technology",
    color: "bg-[#9D7BF3]",
  }, // Purple
  {
    id: 5,
    name: "Jane Doe",
    role: "VP Tech",
    department: "Technology",
    color: "bg-[#C6E6DA]",
  }, // Mint

  // Other Departments (For demo purposes)
  {
    id: 6,
    name: "John Smith",
    role: "Head of Admin",
    department: "Administration",
    color: "bg-[#F27474]",
  },
  {
    id: 7,
    name: "Sarah Lee",
    role: "Event Lead",
    department: "Events",
    color: "bg-[#FAB1C6]",
  },
  {
    id: 8,
    name: "Mike Brown",
    role: "CMO",
    department: "Marketing",
    color: "bg-[#9D7BF3]",
  },
  {
    id: 9,
    name: "Emily White",
    role: "CFO",
    department: "Finance",
    color: "bg-[#C6E6DA]",
  },
];

const departments: Department[] = [
  "Administration",
  "Technology",
  "Events",
  "Marketing",
  "Finance",
];

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState<Department>("Administration");

  // Filter members based on active tab
  const filteredMembers = teamData.filter(
    (member) => member.department === activeTab
  );

  return (
    // <div className="flex flex-row items-center justify-center">
    //   <h1 className="font-funnel-display text-royal-purple text-4xl font-bold text-shadow-sm sm:text-6xl">
    //     Meet the Team!
    //   </h1>
    // </div>

    <div className={`bg-bone-white min-h-screen px-4 py-12`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* --- Header --- */}
        <div className="relative mb-10 text-center">
          {/* Decorative Petals (CSS Shapes) */}
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

        {/* --- Navigation Tabs --- */}
        <nav className="bg-lavender mb-16 w-full max-w-5xl overflow-x-auto rounded-2xl p-2 shadow-md">
          <ul className="flex min-w-[600px] items-center justify-between">
            {departments.map((dept) => (
              <li key={dept} className="flex-1 text-center">
                <button
                  onClick={() => setActiveTab(dept)}
                  className={`w-full rounded-xl px-4 py-3 text-xl font-bold transition-all duration-200 ${
                    activeTab === dept
                      ? "text-royal-purple bg-purple-100/20" // Active: Purple text
                      : "text-white hover:bg-white/10" // Inactive: White text
                  }`}
                >
                  {dept}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Team Grid --- */}
        {/* We use flex-wrap with justify-center to mimic the 2-then-3 layout naturally */}
        <div className="flex flex-wrap justify-center gap-10">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <ClipboardCard key={member.id} member={member} />
            ))
          ) : (
            <div className="mt-10 text-xl text-gray-400">
              No members found in this department.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClipboardCard({ member }: { member: TeamMember }) {
  return (
    <div
      className={`relative w-64 ${member.color} rounded-[2rem] p-3 pb-4 shadow-lg transition-transform duration-300 hover:-translate-y-2`}
    >
      {/* The "Clip" Mechanism */}
      {/* Back part of clip (for depth) */}
      <div className="absolute -top-3 left-1/2 z-0 h-6 w-20 -translate-x-1/2 rounded-t-lg bg-[#D1C4C4]"></div>

      {/* Front part of clip */}
      <div
        className="absolute -top-2 left-1/2 z-20 flex h-10 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-[#E8DQDQ] shadow-sm"
        style={{ backgroundColor: "#ECCFCF" }}
      >
        <div className="mt-1 h-3 w-3 rounded-full border border-gray-300 bg-[#FFF5ED] shadow-inner"></div>
      </div>

      {/* The Paper */}
      <div className="relative z-10 flex h-full w-full flex-col items-center rounded-[1.5rem] bg-white px-4 pt-14 pb-8 text-center">
        {/* Image Placeholder */}
        <div className="mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-300 font-medium text-gray-600 shadow-inner">
          <span className="text-sm">image here</span>
        </div>

        {/* Name & Title */}
        <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
          {member.role}
        </p>
      </div>
    </div>
  );
}

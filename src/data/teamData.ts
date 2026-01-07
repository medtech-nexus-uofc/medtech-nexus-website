export type Department =
  | "Presidents"
  | "Technology"
  | "Events"
  | "Marketing"
  | "Finance";

export interface TeamMember {
  id: number;
  name: string;
  pfp: string;
  role: string;
  department: Department;
  clipboardColor: string;
  textColor: string;
  linkedin: string | null;
}

export const departments: Department[] = [
  "Presidents",
  "Events",
  "Technology",
  "Marketing",
  "Finance",
];

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Nhi Luu",
    pfp: "/headshots/Nhi_Luu.jpeg",
    role: "Co President & Founder",
    department: "Presidents",
    clipboardColor: "bg-rose-pink",
    textColor: "text-bocchi-pink",
    linkedin: "http://www.linkedin.com/in/nhi-luu-986342360",
  },
  {
    id: 2,
    name: "Yuni Woo",
    pfp: "/headshots/default_pfp.svg",
    role: "Co President",
    department: "Presidents",
    clipboardColor: "bg-rose-pink",
    textColor: "text-bocchi-pink",
    linkedin: "",
  },
  {
    id: 1,
    name: "Fiona Truong",
    pfp: "/headshots/Fiona_Truong.png",
    role: "Website Team Lead",
    department: "Technology",
    clipboardColor: "bg-pale-blue",
    textColor: "text-deep-ice-blue",
    linkedin: "https://www.linkedin.com/in/truong-fiona/",
  },
  {
    id: 2,
    name: "Paul Hua",
    pfp: "/headshots/default_pfp.svg",
    role: "Developer",
    department: "Technology",
    clipboardColor: "bg-pale-blue",
    textColor: "text-deep-ice-blue",
    linkedin: "",
  },
  {
    id: 3,
    name: "Timothy Nguy",
    pfp: "/headshots/default_pfp.svg",
    role: "Developer",
    department: "Technology",
    clipboardColor: "bg-pale-blue",
    textColor: "text-deep-ice-blue",
    linkedin: "",
  },
  {
    id: 4,
    name: "Lychelle Pham",
    pfp: "/headshots/default_pfp.svg",
    role: "Developer",
    department: "Technology",
    clipboardColor: "bg-pale-blue",
    textColor: "text-deep-ice-blue",
    linkedin: "https://www.linkedin.com/in/lychelle-pham-4b70332b9/",
  },
  {
    id: 5,
    name: "Catherine Lai",
    pfp: "/headshots/default_pfp.svg",
    role: "Developer",
    department: "Technology",
    clipboardColor: "bg-pale-blue",
    textColor: "text-deep-ice-blue",
    linkedin: "",
  },
  {
    id: 1,
    name: "Ali Raza Baloach",
    pfp: "/headshots/Ali_Raza_Baloach.png",
    role: "Events Executive",
    department: "Events",
    clipboardColor: "bg-bocchi-pink",
    textColor: "text-rose-pink",
    linkedin: "https://www.linkedin.com/in/ali-baloach-11666b342/",
  },
  {
    id: 2,
    name: "Jocelyn Woo",
    pfp: "/headshots/Jocelyn_Woo.png",
    role: "Events Executive",
    department: "Events",
    clipboardColor: "bg-bocchi-pink",
    textColor: "text-rose-pink",
    linkedin: "",
  },
  {
    id: 3,
    name: "Tyler Wong",
    pfp: "/headshots/default_pfp.svg",
    role: "Events Executive",
    department: "Events",
    clipboardColor: "bg-bocchi-pink",
    textColor: "text-rose-pink",
    linkedin: "",
  },
  {
    id: 4,
    name: "Samriddhi Thapa",
    pfp: "/headshots/default_pfp.svg",
    role: "Events Executive",
    department: "Events",
    clipboardColor: "bg-bocchi-pink",
    textColor: "text-rose-pink",
    linkedin: "",
  },
  {
    id: 1,
    name: "Alexander Chen",
    pfp: "/headshots/Alexander_Chen.png",
    role: "VP Marketing",
    department: "Marketing",
    clipboardColor: "bg-pistachio",
    textColor: "text-sea-green",
    linkedin: "",
  },
  {
    id: 2,
    name: "Liam Young",
    pfp: "/headshots/Liam_Young.png",
    role: "Marketing Executive",
    department: "Marketing",
    clipboardColor: "bg-pistachio",
    textColor: "text-sea-green",
    linkedin: "https://www.linkedin.com/in/liamyoung-/",
  },
  {
    id: 3,
    name: "Chloe Mach",
    pfp: "/headshots/Chloe_Mach.png",
    role: "Marketing Executive",
    department: "Marketing",
    clipboardColor: "bg-pistachio",
    textColor: "text-sea-green",
    linkedin: "https://www.linkedin.com/in/chloe-mach-475158325",
  },
  {
    id: 1,
    name: "Symeon Wong",
    pfp: "/headshots/Symeon_Wong.png",
    role: "VP Finance",
    department: "Finance",
    clipboardColor: "bg-sea-green",
    textColor: "text-pistachio",
    linkedin: "",
  },
  {
    id: 2,
    name: "Vince Gold",
    pfp: "/headshots/default_pfp.svg",
    role: "Finance Executive",
    department: "Finance",
    clipboardColor: "bg-sea-green",
    textColor: "text-pistachio",
    linkedin: "",
  },
];

import { RoleProps } from "@/components/joinUs/RoleDescCards";

export const roleData: RoleProps[] = [
  {
    team: "General",
    description:
      "General Members are the heart of the club’s community. This role is open to students who want to explore the intersection of medicine and technology without the commitment of a leadership position.",
    graphicURL: "/svgs/roles/general_members.svg",
    bgColor: "bg-sad-beige/60",
    isOpen: true,
    formLink: "https://forms.gle/7RZnVTnn6SCmLzFP8",
    note: "Note: Registration for General Membership is limited, only opening twice per year during Clubs Week!",
  },
  {
    team: "Events",
    description:
      "The Events Team organizes, sets up, and runs various events, ensuring interactive and dynamic experiences for members. Additionally, the Events Team is responsible for conducting outreach to potential guest speakers and collaborators to expand our professional network and event diversity.",
    graphicURL: "/svgs/roles/events_team.svg",
    bgColor: "bg-bocchi-pink",
    isOpen: false,
    formLink: null,
    note: null,
  },
  {
    team: "Marketing",
    description:
      "The Marketing Team is responsible for creating, designing, and managing social media content - including posts, stories, graphics, and videos to enhance the club’s online presence. They engage with the student community to increase visibility and participation.",
    graphicURL: "/svgs/roles/marketing_team.svg",
    bgColor: "bg-[#D2E9E2]",
    isOpen: true,
    formLink: "https://forms.gle/dr46pCKX1EZiHCAw7",
    note: null,
  },
  {
    team: "Finance",
    description:
      "The Finance Team budgets and maintains accurate expense documentation; assists in managing receipts, fundraising initiatives and sponsorship communications alongside the Events team, helping to secure resources that sustain the club’s activities.",
    graphicURL: "/svgs/roles/finance_team.svg",
    bgColor: "bg-pale-blue",
    isOpen: false,
    formLink: null,
    note: null,
  },
  {
    team: "Developer",
    description:
      "The Developer team is responsible for designing, building, and maintaining digital products such as the official MedTech Nexus Website and tools to aid medical research. You will work with a team to continuously evolve digital solutions through agile development practices to follow technical industry standards. ",
    graphicURL: "/svgs/roles/tech_team.svg",
    bgColor: "bg-lavender",
    isOpen: true,
    formLink: "https://forms.gle/ZUSv6sJrdasejL9B8",
    note: null,
  },
];

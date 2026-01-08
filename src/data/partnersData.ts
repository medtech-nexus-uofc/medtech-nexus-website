export interface PartnerName {
  id: number;
  name: string;
  logo: string;
  link: string | undefined;
}

export const partnersData: PartnerName[] = [
  {
    id: 1,
    name: "Childhood Cancer Canada",
    logo: "/images/logos/childhoodCancer_logo.png",
    link: "https://www.childhoodcancer.ca/",
  },
  {
    id: 2,
    name: "Wellspring Cancer Support Alberta",
    logo: "/images/logos/wellspring_logo.png",
    link: "https://wellspring.ca/alberta/",
  },
  {
    id: 3,
    name: "The Studying Edit",
    logo: "/images/logos/theStudyingEdit_logo.png",
    link: "https://www.thestudyingedit.com/",
  },
];

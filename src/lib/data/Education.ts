export type EducationItem = {
  id: string;
  type: "education";
  start?: string;
  end?: string;
  title: string;
  name: string;
  role?: string;
  description?: string;
  bullets?: string[];
  logo?: string;
  link?: string;
};

export const educationItems: EducationItem[] = [
  {
    id: "btech-2027",
    type: "education",
    start: "2023",
    end: "2027",
    title: "Bachelor of Technology(B.Tech CSE)",
    role: "Computer Science",
    name: "Maharshi Dayanand University",
    bullets: ["Focused on software engineering, algorithms and databases."],
    logo: "/uni.png",
  },
  {
    id: "school-2022",
    type: "education",
    end: "2022",
    start: "2012",
    title: "School",
    bullets: ["Student"],
    name: "Jinvani Bharti Public School",
    logo: "/school.png",
  },
];

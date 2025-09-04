export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
}

export const skillsData: SkillsData = {
  languages: [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 70 },
    { name: 'PHP', level: 65 },
    { name: 'C / C++', level: 80 },
  ],
  frameworks: [
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'FastAPI', level: 65 },
    { name: 'Vue.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  databases: [
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MariaDB', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'SQLite', level: 60 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 70 },
    { name: 'VS Code', level: 100 },
    { name: 'Linux', level: 95 },
    { name: 'Vercel / OVH Cloud', level: 85 },
    { name: 'Figma', level: 80 },
  ],
};
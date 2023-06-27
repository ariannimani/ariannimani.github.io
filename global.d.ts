export {};

declare global {
  interface PortfolioDataProps {
    name: string;
    cvLink: string;
    dateStartedWorking: number;
    dateStartedDeveloper: number;
    image: string;
    profession: string;
    skills: SkillProps[];
    projects: ProjectProps[];
    work: WorkProps[];
    social: SocialProps[];
  }

  interface SkillProps {
    id: number;
    image: string;
    name: string;
    dateStarted: number;
  }

  interface ProjectProps {
    description: string;
    id: number;
    image: string;
    name: string;
    link: string;
    gitLink: string;
  }
  interface WorkProps {
    description: string;
    id: number;
    startDate: number;
  }

  interface SocialProps {
    id: number;
    name: string;
    link: string;
  }
}

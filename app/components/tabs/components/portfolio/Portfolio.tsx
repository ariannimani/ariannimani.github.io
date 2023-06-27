import { PortfolioCard } from "@/components/cards";
import React, { FC } from "react";
interface PortfolioProps {
  data: ProjectProps[];
}

const Portfolio: FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-y-12 gap-x-8 justify-center">
      {data.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;

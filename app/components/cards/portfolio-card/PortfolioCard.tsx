import Image from "next/image";
import React, { FC } from "react";
import { Ellipse } from "./components";
import { BsGithub } from "react-icons/bs";
import { IoLinkOutline } from "react-icons/io5";

interface PortfolioCardProps {
  project: ProjectProps;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ project }) => {
  const { name, image, description, link, gitLink } = project;
  return (
    <div className="relative w-80 h-56 object-cover rounded-xl overflow-hidden  group">
      <Image
        src={image}
        alt=""
        className="object-cover w-full h-56 rounded-xl "
        width={500}
        height={500}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300 dark:bg-yellow-c bg-yellow-d pb-4">
        <div className="text-gray-d flex flex-col items-center gap-4 text-center	cursor-default p-8 h-full">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-sm">{description}</span>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 opacity-0 group-hover:opacity-75">
        {gitLink && (
          <a href={gitLink}>
            <Ellipse icon={<BsGithub />} />
          </a>
        )}
        {link && (
          <a href={link}>
            <Ellipse icon={<IoLinkOutline />} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;

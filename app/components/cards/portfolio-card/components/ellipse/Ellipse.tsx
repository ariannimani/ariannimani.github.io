import React from "react";

interface EllipseProps {
  icon: React.ReactNode;
}
const Ellipse: React.FC<EllipseProps> = ({ icon }) => {
  return (
    <div className="w-9 h9 rounded-full p-2 flex items-center justify-center m-auto bg-white-c text-gray-msd hover:opacity-75 cursor-pointer">
      {icon}
    </div>
  );
};

export default Ellipse;

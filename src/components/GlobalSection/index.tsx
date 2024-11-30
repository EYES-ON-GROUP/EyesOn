import React from "react";

interface GlobalSectionProps {
  children: React.ReactNode;
}

const GlobalSection: React.FC<GlobalSectionProps> = ({ children }) => {
  return (
    <div className="h-auto pb-10 mb-20 bg-[url('../public/assets/images/background.png')] bg-no-repeat bg-cover bg-moving">
      {children}
    </div>
  );
};

export default GlobalSection;

import React from "react";

interface GlobalSectionProps {
  children: React.ReactNode;
}

const GlobalSection: React.FC<GlobalSectionProps> = ({ children }) => {
  return (
    <div className="h-[350vh] mm:max-lm:h-[540vh] md:h-[375vh] min-h-screen bg-[url('../public/assets/images/background.png')] bg-no-repeat bg-cover ">
      {children}
    </div>
  );
};

export default GlobalSection;


import React from "react";

interface Badge {
  texte: string;
  couleur: string;
}

const Badge = ({ texte, couleur }: Badge) => {
  return (
    <small
      className="text-white text-bold text-xl text-right p-2 "
      style={{ backgroundColor: couleur }}
    >
      {texte}
    </small>
  );
};

export default Badge;



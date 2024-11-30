import React from "react";
import Badge from "./Badge";
import { Feature } from "../../pages/Tarifs/TypesInterfaces";

interface CardProps {
  title: string;
  description: string;
  price: string;
  monthlyPrice: string;
  features: Feature[];
  imgSrc: string;
  color: string;
  textColor: string;
  isThirdCard?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  monthlyPrice,
  features,
  imgSrc,
  color,
  textColor,
  isThirdCard = false,
}) => {
  return (
    <div
      className="relative flex flex-col min-h-card max-w-sm rounded-lg mt-5 text-left"
      style={{ backgroundColor: color }}
    >

      {isThirdCard && (
        <div className="absolute -top-1 right-2 ">
          <Badge texte="plus populaire" couleur="orange" />
        </div>
      )}

      <div className="px-6 pt-6">
        <div className="flex items-center space-x-3 py-2">
          <img src={imgSrc} alt={`${title} icon`} className="h-10 w-10" />
          <h2
            className="text-2xl font-bold text-gray-900 text-left"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        </div>
        <p
          className="text-md text-gray-800"
          style={{ color: textColor }}
        >
          {description}
        </p>
        <hr className="mt-5 w-lg mx-auto border-gray-500" />
        <p className="mt-2">
          <span
            className="text-4xl font-extrabold text-gray-900"
            style={{ color: textColor }}
          >
            {price}
          </span>
        </p>
        <h3 className="text-xs font-medium text-white tracking-wide uppercase">
          Pareil que {monthlyPrice}
        </h3>
      </div>

      <ul className="mt-6 px-6 flex-grow flex-shrink-0 flex-col">
        <li className="flex space-x-3 py-2 mt-auto">
          <a
            href="#"
            className="block w-full bg-white border border-orange-600 rounded-md py-2 text-sm font-bold text-gray-800 text-center"
          >
            Buy now
          </a>
        </li>
        <p className="" style={{ color: textColor }}>
          fonctionalites de bases
        </p>
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 py-2"
          >
            <img
              src={feature.imgSrc}
              alt={feature.text}
              className="h-5 w-5 flex-shrink-0"
            />
            <span
              className="text-sm text-gray-800"
              style={{ color: textColor }}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-20"></div>
    </div>
  );
};

export default Card;


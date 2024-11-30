// import React from "react";
// import Card from "../../components/Card/Card";
// import Header from "../../components/Header";
// import Section1 from "../../components/Section1";
// interface Feature {
//   text: string;
//   imgSrc: string;
// }

// interface CardData {
//   title: string;
//   description: string;
//   price: string;
//   monthlyPrice: string;
//   features: Feature[];
//   imgSrc: string;
//   color: string;
//   textColor:string;
// }


// interface CardListProps {
//   data: CardData[];
// }
// const CardList: React.FC<CardListProps> = ({ data }) => {
//   return (
//     <div className="flex flex-wrap justify-center items-center sm:mx-2 ">
//       {data.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   );
// };

// export default CardList;

import React from "react";
import Card from "../../components/Card/Card";

interface Feature {
  text: string;
  imgSrc: string;
}

interface CardData {
  title: string;
  description: string;
  price: string;
  monthlyPrice: string;
  features: Feature[];
  imgSrc: string;
  color: string;
  textColor: string;
}

interface CardListProps {
  data: CardData[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center items-center sm:mx-2">
      {data.map((card, index) => (
        <Card
          key={index}
          {...card}
          isThirdCard={index === 2} // Passe true uniquement pour la troisième carte
        />
      ))}
    </div>
  );
};

export default CardList;



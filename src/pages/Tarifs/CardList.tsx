import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header";
import Section1 from "../../components/Section1";
import { Link, NavLink } from "react-router-dom";
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
  textColor:string;
}


interface CardListProps {
  data: CardData[];
}
const CardList: React.FC<CardListProps> = ({ data }) => {
  return(
<section className='min-h-[10vh]'>
 <div className='w-full h-64 rounded-br-3xl'>
   <img src="/assets/images/kids.jpg" className='relative object-cover w-full h-full rounded-br-3xl ' alt="kids" />
    {/* pour gerer l'opacite  */}
   <div className='absolute top-0 w-full h-64 bg-white rounded-br-3xl opacity-15'></div>   
 </div>

  <div className='w-[90%] flex justify-between mx-auto  left-12 px-4 absolute top-4'>
    {/* icon-shutdown  */}

  </div>

  <div className="absolute flex items-center justify-center w-[90%] md:w-[85%] h-10 px-4 md:px-24 bg-gray-300 left-1/2 transform -translate-x-1/2 top-44 rounded-md">
  <p className="text-sm text-center text-black md:text-lg">
    Choose the good plan for your family
  </p>
</div>
 
      <div className="flex flex-wrap justify-center items-center sm:mx-2 ">
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
</section>
)
}

export default CardList
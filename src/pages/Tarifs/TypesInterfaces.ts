export interface Feature {
    text: string;
    imgSrc: string;
  }
  
  export interface CardData {
    title: string;
    description: string;
    price: string;
    monthlyPrice: string;
    features: Feature[];
    imgSrc: string;
    color: string;
    textColor: string;
  }
  
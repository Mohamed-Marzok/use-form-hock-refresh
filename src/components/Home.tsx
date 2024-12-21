import { useState } from "react";
import Card from "./Card";
import SliderBtn from "./SliderBtn";

interface IData {
  title: string;
  imgUrl: string;
}

// Function to generate random titles
const generateRandomTitle = () => {
  const words = [
    "Amazing",
    "Beautiful",
    "Creative",
    "Dynamic",
    "Elegant",
    "Fascinating",
    "Gorgeous",
    "Heroic",
    "Incredible",
    "Joyful",
    "Kind",
    "Lovely",
    "Majestic",
    "Noble",
    "Outstanding",
    "Powerful",
    "Quirky",
    "Radiant",
    "Stunning",
    "Trendy",
  ];
  return `${words[Math.floor(Math.random() * words.length)]} Card`;
};

// Generate an array of  items with random data
const numberOfItems = 100;
const numberOFItemsInPage = 30;
const data: IData[] = Array.from({ length: numberOfItems }, () => ({
  title: generateRandomTitle(),
  imgUrl: `https://picsum.photos/200/300?random=${Math.floor(
    Math.random() * 1000
  )}`,
}));

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4  ">
        {data
          .slice(
            active * numberOFItemsInPage,
            (active + 1) * numberOFItemsInPage
          )
          .map((d, index) => (
            <Card key={index} imgUrl={d.imgUrl} title={d.title} />
          ))}
      </div>
      <SliderBtn
        active={active}
        setActive={setActive}
        length={Math.ceil(numberOfItems / numberOFItemsInPage)}
      />
    </div>
  );
}

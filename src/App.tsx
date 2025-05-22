import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import ColorButton from "./components/button";
import { FaArrowRight } from "react-icons/fa";

function App() {
  const [color, setColor] = useState("bg-gray-900");

  const cardsData = [
    {
      title: "Work seamlessly",
      subtitle:
        "Work seamlessly across your organization on a platform designed for collaboration.",
      image: "/assets/cardOne.png",
    },
    {
      title: "Transform your culture",
      subtitle:
        "Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.",
      image: "/assets/cardTwo.png",
    },
    {
      title: "Learn as you build",
      subtitle:
        "Get insight into how your team builds today with community-backed KPIs.",
      image: "/assets/cardThree.png",
    },
  ];

  const buttonColors = [
    { label: "Black", color: "bg-gray-900" },
    { label: "Red", color: "bg-red-700" },
    { label: "Green", color: "bg-green-700" },
    { label: "Blue", color: "bg-blue-900" },
  ];

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center transition-colors duration-300 ${color}`}
    >
      <div className="max-w-7xl w-full px-2 sm:px-4 py-10 sm:py-12 bg-blue">
        <h2 className="text-4xl mb-4 font-extrabold text-center leading-[1.25] text-white tracking-[-0.01em]">
          Turn collaboration into innovation
        </h2>
        <div className="text-center text-[#3F83F8] mb-8 sm:mb-10 font-sans font-medium text-base sm:text-[18px] leading-[150%]">
          <a
            href="#"
            className="inline-flex items-center gap-2 hover:underline"
          >
            Learn more about inner source <FaArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  xl:gap-0">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-[27px] mt-8 sm:mt-10">
          {buttonColors.map(({ label, color }) => (
            <ColorButton
              key={label}
              label={label}
              onClick={() => setColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

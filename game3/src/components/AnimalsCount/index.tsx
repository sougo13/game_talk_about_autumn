import React, { useEffect, useState } from "react";
import { animalsCount } from "./animalsCountData";
import AnimalsCountItem from "./animalsCountItem";
import { useNavigate } from "react-router-dom";
import "./animalsCount.css";

const AnimalsCount: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === animalsCount.length) {
      navigate("/final");
    }
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div className="animals-count-page">
      <h1 style={{ margin: "0 110px" }}>
        Посчитай лесных животных — один-два-пять
      </h1>
      <div className="animals-count-column">
        {animalsCount.map((animal, i) => (
          <AnimalsCountItem
            key={i}
            src={animal.src}
            count={animal.count}
            inc={inc}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalsCount;

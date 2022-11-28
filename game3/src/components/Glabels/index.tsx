import React, { useContext, useEffect, useState } from "react";
import "./glabels.css";
import ImageItem from "./ImageItem";
import { glabels, shuffleGlabels } from "./glabelsData";
import { AlertContext } from "../../utils/alert/alertContext";
import { useNavigate } from "react-router-dom";

const Glabels: React.FC = () => {
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const navigate = useNavigate();

  const { hide } = useContext(AlertContext);

  useEffect(() => {
    hide();
  }, []);
  const count = glabels.filter((item) => item.flag).length;

  const inc = () => {
    setCountCorrectAnswer((n) => n + 1);
  };

  if (countCorrectAnswer === count) {
    navigate("/final");
  }

  useEffect(() => {
    console.log("countCorrectAnswer: ", countCorrectAnswer);
  }, [countCorrectAnswer]);

  return (
    <div className="glabels-page">
      <h1 className="h1-title">Что бывает осенью?</h1>
      <div className="glabels-game-container">
        {shuffleGlabels.map((item, index) => (
          <div
            className={`glabels-img-block ${
              item.flag ? "glabels-img-correct" : "glabels-img-incorrect"
            }`}
          >
            <ImageItem key={index} src={item.src} inc={inc} flag={item.flag} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glabels;

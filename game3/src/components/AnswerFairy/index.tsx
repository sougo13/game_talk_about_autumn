import React, { useContext } from "react";
import { AlertContext } from "../../utils/alert/alertContext";
import "./styles.css";
import ok from "../../images/ok.webp";
import wrong from "../../images/wrong.webp";

const AnswerFairy: React.FC = () => {
  const { correct, isShowed, left } = useContext(AlertContext);
  console.log("isShowed: ", isShowed);
  console.log("ok: ", ok);
  return (
    <>
      <div
        className={`answer-fairy ${isShowed && correct ? "active" : ""} ${
          left && correct ? "left" : ""
        }`}
      >
        <img className="answer-fairy-img" src={ok} />
      </div>
      <div
        className={`answer-fairy ${isShowed && !correct ? "active" : ""} ${
          left && !correct ? "left" : ""
        }`}
      >
        <img className="answer-fairy-img" src={wrong} />
      </div>
    </>
  );
};

export default AnswerFairy;

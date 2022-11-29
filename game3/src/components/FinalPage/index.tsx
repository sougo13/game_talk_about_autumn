import React, { useContext, useEffect } from "react";
import { AlertContext } from "../../utils/alert/alertContext";
import "./styled.css";
import butterfly from "../../images/final/butterfly.webp";
import butterfly2 from "../../images/final/butterfly2.webp";
import final_fairy from "../../images/final/final_fairy.webp";

const FinalPage: React.FC = () => {
  const { hide } = useContext(AlertContext);

  useEffect(() => {
    hide();
  }, []);

  return (
    <div className="final-page">
      <h1 className="final-title">Молодец!</h1>
      <div className="final-content-block">
        <img className="final-butterfly1" src={butterfly2} />
        <img className="final-butterfly2" src={butterfly2} />
        <img className="final_fairy" src={final_fairy} />
      </div>
    </div>
  );
};

export default FinalPage;

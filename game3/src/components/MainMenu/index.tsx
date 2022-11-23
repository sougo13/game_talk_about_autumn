import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainMenu.css";
import september from "../../images/mounth/september.webp";
import octember from "../../images/mounth/octember.webp";
import november from "../../images/mounth/november.webp";

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  console.log("september: ", september);
  const handleClick = (number: number) => {
    switch (number) {
      case 1:
        navigate("/glabels");
        break;
      case 2:
        navigate("/animalscount");
        break;
      case 3:
        navigate("/tenderly");
        break;
      case 4:
        navigate("/family");
        break;
      case 5:
        navigate("/onemany");
        break;
    }
  };

  return (
    <div className="main-menu-page">
      <h1>Говорим об осени</h1>
      <div className="images-container">
        <div className="image-block">
          <div className="image-title">Сентябрь</div>
          <img className="month-image" src={september} />
        </div>
        <div className="image-block">
          <div className="image-title">Октябрь</div>
          <img className="month-image" src={octember} />
        </div>
        <div className="image-block">
          <div className="image-title">Ноябрь</div>
          <img className="month-image" src={november} />
        </div>
      </div>
      <div className="main-menu-container">
        <img className="fairy-test-img" src="./static/main_fairy.webp" />
        <div onClick={() => handleClick(1)} className="main-menu-item">
          Полянки весенних цветов
        </div>
        <div onClick={() => handleClick(2)} className="main-menu-item">
          Посчитай лесных животных — один-два-пять
        </div>
        <div onClick={() => handleClick(3)} className="main-menu-item">
          Назови ласково
        </div>
        <div onClick={() => handleClick(4)} className="main-menu-item">
          Семья животных весной
        </div>
        <div onClick={() => handleClick(5)} className="main-menu-item">
          Один-одна-одно-одни
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
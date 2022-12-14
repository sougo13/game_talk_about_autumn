import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : (
        <div className="home-button" onClick={() => navigate("")} />
      )}
    </>
  );
};

export default HomeButton;

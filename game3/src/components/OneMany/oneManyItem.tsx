import React, { useState } from "react";
import "./oneMany.css";

interface OneManyItemProps {
  src1: string;
  src2: string;
}

const OneManyItem: React.FC<OneManyItemProps> = ({ src1, src2 }) => {
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive("one-many-second-img-active");
  };

  return (
    <div className={`one-many-item-block`}>
      <img
        onClick={handleClick}
        className={`one-many-main-img ${active}`}
        src={src1}
      />
      <img className={`one-many-second-img ${active}`} src={src2} />
    </div>
  );
};

export default OneManyItem;

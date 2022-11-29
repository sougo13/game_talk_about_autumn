import React, { useContext, useState } from "react";
import { AlertContext } from "../../utils/alert/alertContext";

interface AnimalsCountItemProps {
  src: string;
  count: number;
  inc: () => void;
}

const AnimalsCountItem: React.FC<AnimalsCountItemProps> = ({
  src,
  count,
  inc,
}) => {
  const { show } = useContext(AlertContext);

  const [active, setActive] = useState(true);

  const handleClick = (answer: number) => {
    if (count === answer) {
      setActive(false);
      show(true, true);
      inc();
    } else {
      show(false, true);
    }
  };

  return (
    <div
      className={`animals-count-block ${
        active ? "" : "animals-count-block-inactive"
      }`}
    >
      <img className="animals-count-img" src={src} />
      <div className="animals-count-answers-block">
        <div
          onClick={() => handleClick(1)}
          className={`animals-count-answer ${
            active ? "" : "animals-count-answer-inactive"
          }`}
        >
          1
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`animals-count-answer ${
            active ? "" : "animals-count-answer-inactive"
          }`}
        >
          2
        </div>
        <div
          onClick={() => handleClick(5)}
          className={`animals-count-answer ${
            active ? "" : "animals-count-answer-inactive"
          }`}
        >
          5
        </div>
      </div>
    </div>
  );
};

export default AnimalsCountItem;

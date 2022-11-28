import React, { useContext, useState } from "react";
import { AlertContext } from "../../utils/alert/alertContext";

interface ImageItemProps {
  src: string;
  flag: boolean;
  inc: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, flag, inc }) => {
  const [check, setCheck] = useState(false);

  const { show } = useContext(AlertContext);

  return (
    <img
      onClick={() => {
        setCheck(true);
        if (!check) {
          if (flag) inc();

          show(flag);
        }
      }}
      className={`glabels-img ${check ? "glabels-img-check" : ""}`}
      src={src}
    />
  );
};

export default ImageItem;

import React from "react";
import styles from "./ToolsImg.module.css";

import welding1 from "../../images/toolsImg/welding1.svg";
import welding2 from "../../images/toolsImg/welding2.svg";
import welding3 from "../../images/toolsImg/welding3.svg";
import welding4 from "../../images/toolsImg/welding4.svg";
import welding5 from "../../images/toolsImg/welding5.svg";
import welding6 from "../../images/toolsImg/welding6.svg";
// import welding7 from "../../images/toolsImg/welding7.svg";
import welding8 from "../../images/toolsImg/welding8.svg";
import welding9 from "../../images/toolsImg/welding9.svg";
import welding10 from "../../images/toolsImg/welding10.svg";

function ToolsImg() {
  const images = [
    { src: welding1, alt: "tool", style: { top: "-250px", left: "50px" } },

    { src: welding2, alt: "tool" },
    { src: welding3, alt: "tool" },

    { src: welding4, alt: "tool" },

    { src: welding5, alt: "tool" },

    { src: welding6, alt: "tool" },

    // { src: welding7, alt: "tool" },

    { src: welding8, alt: "tool" },

    { src: welding9, alt: "tool" },

    { src: welding10, alt: "tool" },
  ];
  return (
    <div className={styles.toolsImgContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.image}>
          <img src={image.src} alt={image.alt} width={50} />
        </div>
      ))}
    </div>
  );
}

export default ToolsImg;

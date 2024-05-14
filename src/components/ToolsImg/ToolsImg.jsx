import React from "react";
import styles from "./ToolsImg.module.css";

import welding1 from "../../images/toolsImg/welding1.svg";
import welding2 from "../../images/toolsImg/welding2.svg";
import welding3 from "../../images/toolsImg/welding3.svg";
import welding4 from "../../images/toolsImg/welding4.svg";
import welding5 from "../../images/toolsImg/welding5.svg";
import welding6 from "../../images/toolsImg/welding6.svg";
import welding7 from "../../images/toolsImg/welding7.svg";
import welding8 from "../../images/toolsImg/welding8.svg";
import welding9 from "../../images/toolsImg/welding9.svg";
import welding10 from "../../images/toolsImg/welding10.svg";

function ToolsImg() {
  const images = [
    { src: welding1, alt: "tool", style: { top: "-250px", left: "50px" } },

    { src: welding2, alt: "tool", style: { top: "-230px", right: "350px" } },

    { src: welding3, alt: "tool", style: { top: "-210px", left: "300px" } },

    { src: welding4, alt: "tool", style: { top: "-90px", left: "500px" } },

    { src: welding5, alt: "tool", style: { bottom: "50px", right: "450px" } },

    { src: welding6, alt: "tool", style: { bottom: "220px", left: "600px" } },

    { src: welding7, alt: "tool", style: { top: "-90px", right: "60px" } },

    { src: welding8, alt: "tool", style: { top: "-270px", right: "600px" } },

    { src: welding9, alt: "tool", style: { bottom: "60px", left: "150px" } },

    { src: welding10, alt: "tool", style: { top: "-250px", right: "100px" } },
  ];
  return (
    <div className={styles.toolsImgContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.image} style={image.style}>
          <img
            src={image.src}
            alt={image.alt}
            width={50}
            style={{ stroke: "red" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ToolsImg;

import { useRef, useState, useEffect } from "react";

import styles from "./ImageSlider.module.css";

import img1 from "../../images/sliderImg/IA-2.jpeg";
import img2 from "../../images/sliderImg/IA-3.jpeg";
import img3 from "../../images/sliderImg/IA-5.jpeg";
import img4 from "../../images/sliderImg/IA-7.jpeg";

function ImageSlider() {
  const slider = useRef();
  const [count, setCount] = useState(0);

  const imgSlider = [
    { src: img1, alt: "weld1" },
    { src: img2, alt: "weld2" },
    { src: img3, alt: "weld3" },
    { src: img4, alt: "weld4" },
  ];

  const incrementSlider = delta => {
    if (!slider.current) return;

    const width = slider.current.offsetWidth;

    if (count + delta > imgSlider.length - 1) {
      setCount(0);
      slider.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(imgSlider.length - 1);
      slider.current.scrollTo(width * imgSlider.length - 1, 0);

      return;
    }

    slider.current.scrollTo(slider.current.scrollLeft + width * delta, 0);
    setCount(c => c + delta);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      incrementSlider(1);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles.sliderContainer}>
      <div
        className={`${styles.sliderBtn} ${styles.rightBtn}`}
        onClick={() => incrementSlider(1)}
      />
      <div
        className={`${styles.sliderBtn} ${styles.leftBtn}`}
        onClick={() => incrementSlider(-1)}
      />
      <div className={styles.slider} ref={slider}>
        {imgSlider.map((img, index) => (
          <div className={styles.sliderItem} key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className={styles.sliderImg}
              // width={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

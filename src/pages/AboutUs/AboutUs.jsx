import { useNavigate } from "react-router-dom";

import styles from "./AboutUs.module.css";
import ImageSlider from "components/ImageSlider/ImageSlider";
import AboutUsDetails from "components/AboutUsDetails/AboutUsDetails";
import Experience from "components/Experience/Experience";
import CustomButton from "components/CustomButton/CustomButton";

function AboutUs() {
  const navigate = useNavigate("");

  return (
    <section className={styles.aboutUs}>
      <div className={styles.pageTitle}>
        <h1>Despre noi</h1>
        <div>AVR Weld Solutions</div>
      </div>

      <div className={styles.detailsContainer}>
        <ImageSlider />
        <AboutUsDetails />
      </div>
      <Experience />

      <div className={styles.butoane}>
        <CustomButton
          text="Contact"
          textColor="black"
          bgColor="white"
          borderColor="white"
          fontWeight={700}
          hoverTextColor="#ce9233"
          hoverBgColor="black"
          marginBottom="25px"
          pdL="30px"
          pdR="30px"
          pdT="15px"
          pdB="15px"
          onClick={() => navigate("/Contact")}
        />
        <CustomButton
          text="Servicii"
          textColor="black"
          bgColor="white"
          borderColor="white"
          fontWeight={700}
          hoverTextColor="#ce9233"
          hoverBgColor="black"
          marginBottom="25px"
          pdL="30px"
          pdR="30px"
          pdT="15px"
          pdB="15px"
          onClick={() => navigate("/Services")}
        />
        <CustomButton
          text="Galerie"
          textColor="black"
          bgColor="white"
          borderColor="white"
          fontWeight={700}
          hoverTextColor="#ce9233"
          hoverBgColor="black"
          marginBottom="25px"
          pdL="30px"
          pdR="30px"
          pdT="15px"
          pdB="15px"
          onClick={() => navigate("/Gallery")}
        />
      </div>
    </section>
  );
}

export default AboutUs;

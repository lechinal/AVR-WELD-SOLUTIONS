import CustomButton from "components/CustomButton/CustomButton";
import styles from "./ProjectSection.module.css";
import { useNavigate } from "react-router-dom";

function ProjectSection() {
  const navigate = useNavigate("");

  return (
    <div className={styles.projectSection}>
      <p className={styles.text1}>Ai un proiect de realizat?</p>
      <CustomButton
        text="Contact"
        textColor="black"
        bgColor="white"
        borderColor="white"
        fontWeight={700}
        hoverTextColor="white"
        hoverBgColor="black"
        marginBottom="25px"
        // borderRadius="15px"
        pdL="30px"
        pdR="30px"
        pdT="15px"
        pdB="15px"
        onClick={() => navigate("/Contact")}
      />
    </div>
  );
}

export default ProjectSection;

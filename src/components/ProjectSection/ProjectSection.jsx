import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import CustomButton from "components/CustomButton/CustomButton";
import styles from "./ProjectSection.module.css";
import Form from "components/ContactForm/Form/Form";

function ProjectSection() {
  // const navigate = useNavigate("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        onClick={openModal}
        transition="all 0.5s ease-in-out"
      />

      {isModalOpen && (
        <div className={styles.modalBackground} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <Form />

            <div className={styles.closeBtn}>
              <CustomButton
                text="Close"
                textColor="white"
                bgColor="#ce9233"
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
                transition="all 0.5s ease-in-out"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectSection;

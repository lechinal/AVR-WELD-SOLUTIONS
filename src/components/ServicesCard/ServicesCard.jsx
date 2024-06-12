import styles from "./ServicesCard.module.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/CustomButton/CustomButton";
import servicesData from "../../data/servicesData";

function ServicesCard() {
  const navigate = useNavigate("");
  return (
    <section>
      <div className={styles.cards}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgContainer}>
              <img
                className={styles.cardImg}
                src={service.image}
                alt={`weld${index + 1}`}
                width={255}
                height={255}
              />
            </div>

            <h3>{service.title}</h3>

            <p className={styles.paragraf}>{service.description}</p>

            <CustomButton
              text="Informatii"
              textColor="#797672;"
              bgColor="#f9f8f7"
              fontWeight={700}
              transition="all ease-in-out 0.5s"
              hoverTextColor="white"
              hoverBgColor="#ce9233"
              marginBottom="25px"
              pdL="60px"
              pdR="60px"
              pdT="15px"
              pdB="15px"
              onClick={() => navigate(`/Details/${service.id}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesCard;

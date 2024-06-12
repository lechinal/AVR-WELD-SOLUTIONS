import styles from "./Address.module.css";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

function Address() {
  return (
    <div className={styles.addressSection}>
      <div className={styles.addressBox}>
        <div className={styles.addressTitle}>
          <div>Contact</div>
          <h1>DATE DE CONTACT</h1>
          <p>Ne puteți contacta la datele de mai jos.</p>
        </div>
        <div className={styles.detailsBox}>
          <div className={styles.phoneBox}>
            <PhoneInTalkRoundedIcon />
            <div>
              <span>Telefon:</span>
              <p>+123 456 789</p>
            </div>
          </div>
          <div className={styles.emailBox}>
            <AlternateEmailRoundedIcon />
            <div>
              <span>Email</span>
              <p>avrweldsolutions@gmail.com</p>
            </div>
          </div>
          <div className={styles.locationBox}>
            <PlaceRoundedIcon />
            <div>
              <span>Sediu</span>
              <p>Str. Exemplu, Nr. 123, Blaj, jud. Alba</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

import styles from "./Address.module.css";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";

function Address() {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const toggleAddressVisibility = () => {
    setIsAddressVisible(!isAddressVisible);
  };

  return (
    <div className={styles.addressSection}>
      <div className={styles.addressBox}>
        <div className={styles.addressTitleBox}>
          <div
            className={styles.addressTitle}
            onClick={toggleAddressVisibility}
          >
            Contact
            {isAddressVisible ? (
              <HighlightOffIcon className={styles.closeBtn} />
            ) : (
              <AdsClickIcon className={styles.clickBtn} />
            )}
          </div>
          {isAddressVisible && (
            <div className={styles.detailsBox}>
              <div className={styles.detailsTitle}>
                <h1>DATE DE CONTACT</h1>
                <p>Ne puteți contacta la datele de mai jos:</p>
              </div>
              <div className={styles.details}>
                <div className={styles.phoneBox}>
                  <PhoneInTalkRoundedIcon
                    fontSize="large"
                    className={styles.detailsIcons}
                  />
                  <div>
                    <span>Telefon:</span>
                    <p>+123 456 789</p>
                  </div>
                </div>
                <div className={styles.emailBox}>
                  <AlternateEmailRoundedIcon
                    fontSize="large"
                    className={styles.detailsIcons}
                  />
                  <div>
                    <span>Email:</span>
                    <p>avrweldsolutions@gmail.com</p>
                  </div>
                </div>
                <div className={styles.locationBox}>
                  <PlaceRoundedIcon
                    fontSize="large"
                    className={styles.detailsIcons}
                  />
                  <div>
                    <span>Sediu Social:</span>
                    <p>Str. Exemplu, Nr. 123, Blaj, jud. Alba</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Address;

import React from "react";
import styles from "./GoBackButton.module.css";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function GoBackButton({
  textColor,
  bgColor,
  border,
  hoverTextColor,
  hoverBgColor,
  hoverBorderColor,
  hoverBorder,
  transtion,
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.backBtnDiv}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        className={styles.customBtn}
        sx={{
          color: textColor,
          backgroundColor: bgColor,
          border: border,
          transition: transtion,
          "&:hover": {
            color: hoverTextColor,
            backgroundColor: hoverBgColor,
            borderColor: hoverBorderColor,
            border: hoverBorder,
          },
        }}
      >
        Go Back
      </Button>
    </div>
  );
}

export default GoBackButton;

// color: "#ce9233",
//           border: "2px solid #ce9233",
//           "&:hover": {
//             backgroundColor: "#ce9233",
//             color: "white",
//             border: "2px solid #ce9223",
//           },
//         }}

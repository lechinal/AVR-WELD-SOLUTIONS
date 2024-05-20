import React from "react";
import Button from "@mui/material/Button";

function CustomButton({
  text,
  textColor,
  bgColor,
  borderColor,
  fontWeight,
  borderSolid,
  hoverTextColor,
  hoverBgColor,
  hoverBorderColor,
  marginBottom,
  marginTop,
  borderRadius,
  onClick,
  positionRelative,
  top,
  bottom,
  right,
  left,
  pdL,
  pdT,
  pdB,
  pdR,
  padding,
}) {
  return (
    <Button
      sx={{
        color: textColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
        fontWeight: fontWeight,
        border: borderSolid,
        marginBottom: marginBottom,
        marginTop: marginTop,
        borderRadius: borderRadius,
        position: positionRelative,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        paddingLeft: pdL,
        paddingTop: pdT,
        paddingRight: pdR,
        paddingBottom: pdB,
        padding: padding,

        "&:hover": {
          color: hoverTextColor,
          backgroundColor: hoverBgColor,
          borderColor: hoverBorderColor,
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CustomButton;

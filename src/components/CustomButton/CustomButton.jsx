import React from 'react';
import Button from '@mui/material/Button';

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
  borderRadius,
  onClick,
  positionRelative,
  top,
  bottom,
  right,
  left,
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
        borderRadius: borderRadius,
        position: positionRelative,
        top: top,
        bottom: bottom,
        right: right,
        left: left,

        '&:hover': {
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

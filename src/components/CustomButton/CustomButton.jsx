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

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
          borderRadius: borderRadius,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;

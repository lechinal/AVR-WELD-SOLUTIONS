import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({
  text,
  textColor,
  bgColor,
  borderColor,
  fontWeight,
  border,
  hoverTextColor,
  hoverBgColor,
  hoverBorderColor,
}) {
  return (
    <Button
      sx={{
        color: textColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
        fontWeight: fontWeight,
        border: '1px solid black',
        '&:hover': {
          color: hoverTextColor,
          backgroundColor: hoverBgColor,
          borderColor: hoverBorderColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;

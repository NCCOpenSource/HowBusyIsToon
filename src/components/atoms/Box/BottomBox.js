import React from "react";
import Box from ".";

export const BottomBox = ({ children, fontSize, height }) => {
  return (
    <Box
      fontColor="black"
      fullBorderRadius="bottom"
      color="grey"
      fontSize={fontSize}
      height={height}
      bold
    >
      {children}
    </Box>
  );
};

import React from "react";
import { Children } from "react";
import Box from ".";

export const TopBox = ({ children, fontSize, height }) => {
  return (
    <Box
      fontColor="white"
      fullBorderRadius="top"
      color="black"
      fontSize={fontSize}
      height={height}
      bold
    >
      {children}
    </Box>
  );
};

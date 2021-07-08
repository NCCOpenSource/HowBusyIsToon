import React from "react";
import styled from "styled-components";

export default function Box({
  children,
  fullBorderRadius,
  color,
  height,
  fontColor,
  fontSize,
  bold,
}) {
  const radius = () => {
    if (fullBorderRadius == "top") {
      return "border-radius: 8px 8px 0 0";
    }
    if (fullBorderRadius == "bottom") {
      return "border-radius: 0 0 8px 8px ";
    }
    if (fullBorderRadius == "full") {
      return "border-radius: 8px";
    }
    return "auto";
  };

  const finalColour = () => {
    if (color == "black") {
      return "background-color: #000000;";
    }
    if (color == "grey") {
      return "background-color: #F8F8F8;";
    }
    if (color == "white") {
      return "background-color: #FFFFFF;";
    }
  };

  const finalFontColor = () => {
    if (fontColor == "black") {
      return "color: #000000;";
    }
    if (fontColor == "grey") {
      return "color: #F8F8F8;";
    }
    if (fontColor == "white") {
      return "color: #FFFFFF;";
    }
  };

  const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 23px 0 23px;
    height: ${height};
    font-size: ${fontSize};
    ${finalColour};
    ${finalFontColor};
    ${radius};
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  `;
  return <Container>{children}</Container>;
}

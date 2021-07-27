import React, { useEffect, useState } from "react";
import "../../CSS/variables.css";
import style from "./box.module.css";

/* eslint-disable */
export default function Box({ children, fullBorderRadius, color, fontColor }) {
  /* eslint-enable */
  const [backgroundColor, setBackgroundColor] = useState(style.Backgroundblack);
  const [finalFontColor, setFontColor] = useState(style.Fontwhite);
  const [borderRadius, setBorderRadius] = useState(style.borderRadiusFull);

  const ContainerClassName = style.Container;

  useEffect((color, fontColor, fullBorderRadius) => {
    if (color === "black") {
      setBackgroundColor(style.Backgroundblack);
    }
    if (color === "grey") {
      setBackgroundColor(style.Backgroundgrey);
    }
    if (color === "white") {
      setBackgroundColor(style.Backgroundwhite);
    }
    if (fontColor === "black") {
      setFontColor(style.Fontblack);
    }
    if (fontColor === "grey") {
      setFontColor(style.Fontgrey);
    }
    if (fontColor === "white") {
      setFontColor(style.Fontwhite);
    }

    if (fullBorderRadius === "top") {
      setBorderRadius(style.borderRadiusTop);
    }
    if (fullBorderRadius === "bottom") {
      setBorderRadius(style.borderRadiusBottom);
    }
    if (fullBorderRadius === "full") {
      setBorderRadius(style.borderRadiusFull);
    }
  }, []);

  return (
    <div
      className={`${ContainerClassName}  ${backgroundColor}   ${finalFontColor} ${borderRadius}`}
    >
      {children}
    </div>
  );
}

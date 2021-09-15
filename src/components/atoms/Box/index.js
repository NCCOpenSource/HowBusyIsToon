import React, { useEffect, useState } from "react";
import "../../CSS/variables.css";
import style from "./box.module.css";

export default function Box({
  children,
  fullBorderRadius,
  color,
  fontColor,
  addheight,
  noPadding,
}) {
  const [backgroundColor, setBackgroundColor] = useState(style.Backgroundblack);
  const [finalFontColor, setFontColor] = useState(style.Fontwhite);
  const [borderRadius, setBorderRadius] = useState(style.borderRadiusFull);
  const [padding, setPadding] = useState(style.noPadding);
  const [withheight, setaddheight] = useState(style.addheight);

  const ContainerClassName = style.Container;

  useEffect(() => {
    if (addheight === "true") {
      setaddheight(style.addheight);
    } else {
      setaddheight("");
    }

    if (noPadding === "noPadding") {
      setPadding(style.noPadding);
    } else {
      setPadding("");
    }

    if (color === "black") {
      setBackgroundColor(style.Backgroundblack);
    }
    if (color === "grey") {
      setBackgroundColor(style.Backgroundgrey);
    }
    if (color === "white") {
      setBackgroundColor(style.Backgroundwhite);
    }

    if (color === "none") {
      setBackgroundColor(style.Backgroundnone);
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
  }, [fullBorderRadius, color, fontColor]);

  return (
    <div
      className={`${ContainerClassName}  ${backgroundColor}   ${finalFontColor} ${borderRadius} ${padding} ${withheight}`}
    >
      {children}
    </div>
  );
}

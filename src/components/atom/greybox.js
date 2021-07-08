import React from "react";

export default function GreyBox({ fullBorderRadius }) {
  return (
    <div
      styles={
        ("background: #F8F8F8;",
        { "border-radius": fullBorderRadius ? "8px" : "0 0 8px 8px" })
      }
    ></div>
  );
}

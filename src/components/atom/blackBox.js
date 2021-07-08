import React from "react";

export default function BlackBox({ fullBorderRadius }) {

  const top ={
    background: "#000000;",
    "border-radius":  "8px 8px 0 0",
  }
  const bottom ={
    background: "#000000;",
    "border-radius":  "8px 8px 0 0",
  }

  return (
    <div
      styles={{
   fullBorderRadius ? top : bottom,
      }}
    ></div>
  );
}

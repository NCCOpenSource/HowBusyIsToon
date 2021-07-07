import React, { useState } from "react";
import styles from "./filter.module.css";

export default function SelectDropdown(props) {
  const [option, setOption] = useState();

  function handleChange(event) {
    setOption(event.target.value);
  }
  return (
    <select name="option" onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  );
}

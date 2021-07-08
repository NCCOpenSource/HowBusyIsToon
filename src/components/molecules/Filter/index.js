import React, { useState } from "react";
import styles from "./filter.module.css";

export default function Filter(props) {
  const [option, setOption] = useState();
  function handleChange(event) {
    setOption(event.target.value);
  }
  return (
    <div className={styles.selectbox}>
      <select className={styles.select} name="option" onChange={handleChange}>
        <option className={styles.option} value="1">
          1
        </option>
        <option className={styles.option} value="2">
          2
        </option>
        <option className={styles.option} value="3">
          3
        </option>
        <option className={styles.option} value="4">
          4
        </option>
      </select>
    </div>
  );
}

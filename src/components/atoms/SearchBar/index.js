import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <input type="text" placeholder="Search Bus's" className={styles.search} />
  );
}

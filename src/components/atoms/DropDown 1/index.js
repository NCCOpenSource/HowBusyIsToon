import React from "react";
import styles from "./dropdown.module.css";
export default function DropDown(props) {
  const subInfo = props.subInfo;

  const listItems = subInfo.map((subInformation) => (
    <a classNameName={styles.dropdownLink} href={"/" + subInformation.slug}>
      {subInformation.subTitles}
    </a>
  ));
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>{props.title}</button>
      <div className={styles.dropdownContent}>{listItems}</div>
    </div>
  );
}

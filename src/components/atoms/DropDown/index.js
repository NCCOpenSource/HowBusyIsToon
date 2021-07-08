import React from "react";
import styles from "./dropdown.module.css";
export default function DropDown(props) {
  const subInfo = props.subInfo;

  const listItems = subInfo.map((subInformation) => (
    <a className={styles.dropdownLink} href={"/" + subInformation.slug}>
      {subInformation.subTitles}
    </a>
  ));
  return (
    <div class={styles.dropdown}>
      <button class={styles.dropbtn}>{props.title}</button>
      <div class={styles.dropdownContent}>{listItems}</div>
    </div>
  );
}

import React from "react";
import IconArrow from "../../../assets/icons/arrowB.svg";
import styles from "./LinkSection.module.css";

export default function LinkSection({ link, heading, content }) {
  return (
    <a target="_blank" rel="noreferrer" href={link} className={styles.LinkBox}>
      <div className={styles.subHeading}>
        <h3 className={styles.subHeadingText}>{heading}</h3>
        <IconArrow className={styles.IconArrow} />
      </div>
      <p className={styles.bottomText}>{content}</p>
    </a>
  );
}

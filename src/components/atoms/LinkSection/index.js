import React from "react";
import IconArrow from "../../../assets/icons/arrowb.svg";
import styles from "./LinkSection.module.css";

export default function LinkSection({ link, heading, content }) {
  return (
    <a target="_blank" href={link} className={styles.LinkBox}>
      <div className={styles.subHeading}>
        <p className={styles.subHeadingText}>{heading}</p>
        <IconArrow className={styles.IconArrow} />
      </div>
      <p className={styles.bottomText}>{content}</p>
    </a>
  );
}

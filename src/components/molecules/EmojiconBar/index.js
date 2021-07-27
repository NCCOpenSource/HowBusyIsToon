import React from "react";
import styles from "./EmojiconBar.module.css";
import EmojicomWidget from "../EmojicomWidget";

export default function index() {
  return (
    <div className={styles.bottom}>
      <p className={styles.bottomText}>How useful was this information?</p>
      <div className={styles.emojiconContainer} id="emojicom-widget-inline">
        <EmojicomWidget
          className={styles.emojicon}
          campaignId="laqwioA130yrS6JhyToJ"
        />
      </div>
      <a
        className={styles.link}
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=wLSfsgQNn0q0YsEpSx4bRw6915Qqm9RJjDrXRTIs2UxURFJORlJOMTFDVU03TjlWWFZFSTE2R0cwQi4u"
      >
        Tell us More...
      </a>
    </div>
  );
}

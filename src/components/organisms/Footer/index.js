import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import EmojicomWidget from "../../molecules/EmojicomWidget";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <div className={styles.top}>
          <ul className={styles.logoList}>
            <StaticImage
              alt=""
              src="../../../images/logo.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
            <StaticImage
              alt=""
              src="../../../images/logo2.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
            <StaticImage
              alt=""
              src="../../../images/logo3.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
            <StaticImage
              alt=""
              src="../../../images/logo4.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
            <StaticImage
              alt=""
              src="../../../images/logo5.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
            <StaticImage
              alt=""
              src="../../../images/logo1.png"
              height={50}
              className={styles.logoItem}
            ></StaticImage>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.emojiconContainer} id="emojicom-widget-inline">
          <p>How useful was this information?</p>
          <EmojicomWidget
            className={styles.emojicon}
            campaignId="laqwioA130yrS6JhyToJ"
          />
        </div>
      </div>
    </div>
  );
}

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
        {/* <ul className={styles.linkList}>
          <a
            className={styles.linkListItem}
            target="_blank"
            href="https://newcastle.gov.uk/services/public-health-wellbeing-and-leisure/public-health-services/coronavirus-covid-19"
          >
            Council Guidance >
          </a>
          <a
            className={styles.linkListItem}
            target="_blank"
            href="https://www.gov.uk/coronavirus?gclid=CjwKCAiAkan9BRAqEiwAP9X6UULwnfwW9PPhWLDxgcsV9SRU4xHQ4pgLU-YAy4KXFvL4EDikA-4RthoCZ10QAvD_BwE"
          >
            Council Compliance >
          </a>
        </ul> */}
      </div>
    </div>
  );
}

import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import FloatingFeedback from "../../molecules/FloatingFeedback";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <div className={styles.top}>
          <div className={styles.logoList}>
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
          </div>
        </div>
      </div>
      <FloatingFeedback />
    </div>
  );
}

import React from "react";
import IconArrow from "../../../assets/icons/arrow.svg";
import Box from "../../atoms/Box";
import styles from "./CouncilLinks.module.css";

export default function CouncilLinks() {
  return (
    <div className={styles.CouncilLinks}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black" >
          <p className={styles.heading}>
            How Newcastle City Council is Protecting You
          </p>
        </Box>
      </div>
      <a
        target="_blank"
        href="https://newcastle.gov.uk/services/public-health-wellbeing-and-leisure/public-health-services/coronavirus-covid-19"
        className={styles.LinkBox}
      >
        <div className={styles.subHeading}>
          <p className={styles.subHeadingText}>Covid Compliance</p>
          <IconArrow className={styles.IconArrow} />
        </div>
        <p className={styles.bottomText}>
          Northumberland street has adopted a one-way system which will allow
          for social distancing. Look for the arrows at on the floor and the
          barriers placed at shop entrances for customer queues
        </p>
      </a>
      <a
        target="_blank"
        href="https://www.gov.uk/coronavirus?gclid=CjwKCAiAkan9BRAqEiwAP9X6UULwnfwW9PPhWLDxgcsV9SRU4xHQ4pgLU-YAy4KXFvL4EDikA-4RthoCZ10QAvD_BwE"
        className={styles.LinkBox}
      >
        <div className={styles.subHeading}>
          <p className={styles.subHeadingText}>Council Guidance</p>
          <IconArrow className={styles.IconArrow} />
        </div>
        <p className={styles.bottomText}>
          Northumberland street has adopted a one-way system which will allow
          for social distancing. Look for the arrows at on the floor and the
          barriers placed at shop entrances for customer queues
        </p>
      </a>

      <a href={"/"} className={styles.LinkBox}>
        <div className={styles.subHeading}>
          <p className={styles.subHeadingText}>Onboarding Guide</p>
          <IconArrow className={styles.IconArrow} />
        </div>
        <p className={styles.bottomText}>
          Northumberland street has adopted a one-way system which will allow
          for social distancing. Look for the arrows at on the floor and the
          barriers placed at shop entrances for customer queues
        </p>
      </a>
    </div>
  );
}

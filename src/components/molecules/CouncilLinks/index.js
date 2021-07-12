import React from "react";
import Box from "../../atoms/Box";
import styles from "./CouncilLinks.module.css";
import IconArrow from "../../../assets/icons/arrow.svg";
import { Link } from "gatsby";

export default function CouncilLinks() {
  return (
    <div className={styles.CouncilLinks}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black" bold>
          <p className={styles.heading}>
            How Newcastle City Council is Protecting You
          </p>
        </Box>
      </div>
        <Link
          href={"/"}
          className={styles.LinkBox}
          fontColor="black"
          fullBorderRadius="full"
          color="white"
          bold
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
        </Link>
        <Link
          href={"/"}
          className={styles.LinkBox}
          fontColor="black"
          fullBorderRadius="full"
          color="white"
          bold
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
        </Link>
  
        <Link
          href={"/"}
          className={styles.LinkBox}
          fontColor="black"
          fullBorderRadius="full"
          color="white"
          bold
        >
          <div className={styles.subHeading}>
            <p className={styles.subHeadingText}>Onboarding Guide</p>
            <IconArrow className={styles.IconArrow} />
          </div>
          <p className={styles.bottomText}>
            Northumberland street has adopted a one-way system which will allow
            for social distancing. Look for the arrows at on the floor and the
            barriers placed at shop entrances for customer queues
          </p>
        </Link>
    </div>
  );
}

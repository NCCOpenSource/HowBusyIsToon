import React from "react";
import IconArrow from "../../../assets/icons/arrowb.svg";
import Box from "../../atoms/Box";
import LinkSection from "../../atoms/LinkSection";
import styles from "./CouncilLinks.module.css";

export default function CouncilLinks() {
  return (
    <div className={styles.CouncilLinks}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black">
          <p className={styles.heading}>
            How Newcastle City Council is Protecting You
          </p>
        </Box>
      </div>

      <LinkSection
        link={
          "https://newcastle.gov.uk/services/public-health-wellbeing-and-leisure/public-health-services/coronavirus-covid-19"
        }
        heading={"Covid Compliance"}
        content={
          "Northumberland street has adopted a one-way system which will allow for social distancing. Look for the arrows at on the floor and the barriers placed at shop entrances for customer queues"
        }
      />

      <LinkSection
        link={
          "https://www.gov.uk/coronavirus?gclid=CjwKCAiAkan9BRAqEiwAP9X6UULwnfwW9PPhWLDxgcsV9SRU4xHQ4pgLU-YAy4KXFvL4EDikA-4RthoCZ10QAvD_BwE"
        }
        heading={"Council Guidance"}
        content={
          "  Northumberland street has adopted a one-way system which will allow for social distancing. Look for the arrows at on the floor and the barriers placed at shop entrances for customer queues"
        }
      />

      <LinkSection
        link={
          "https://newcastle.gov.uk/services/public-health-wellbeing-and-leisure/public-health-services/coronavirus-covid-19"
        }
        heading={"Onboarding Guide"}
        content={
          "Northumberland street has adopted a one-way system which will allow for social distancing. Look for the arrows at on the floor and the barriers placed at shop entrances for customer queues"
        }
      />
    </div>
  );
}

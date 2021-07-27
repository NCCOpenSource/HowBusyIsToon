import React from "react";
import Box from "../../atoms/Box";
import LinkSection from "../../atoms/LinkSection";
import styles from "./CouncilLinks.module.css";
import { graphql, useStaticQuery } from "gatsby";

export default function CouncilLinks() {
  const data = useStaticQuery(graphql`
    query GovLinks {
      allContentfulCityCentreHomepage {
        edges {
          node {
            linkTitle1
            linkTitle2
            linkTitle3
            linkUrl1
            linkurl2
            linkUrl3
            linkContent1 {
              linkContent1
            }
            linkContent2 {
              linkContent2
            }
            linkContent3 {
              linkContent3
            }
          }
        }
      }
    }
  `);

  console.log("🚀 ~ file: index.js ~ line 61 ~ Home ~ data", data);
  const GovLinksData = data.allContentfulCityCentreHomepage.edges[0].node;
  console.log(
    "🚀 ~ file: index.js ~ line 36 ~ CouncilLinks ~ GovLinksData",
    GovLinksData
  );
  const GovLinks = [
    {
      id: 1,
      LinkTitle: GovLinksData.linkTitle1,
      LinkContent: GovLinksData.linkContent1.linkContent1,
      LinkUrl: GovLinksData.linkUrl1,
    },
    {
      id: 2,
      LinkTitle: GovLinksData.linkTitle2,
      LinkContent: GovLinksData.linkContent2.linkContent2,
      LinkUrl: GovLinksData.linkurl2,
    },
    {
      id: 3,
      LinkTitle: GovLinksData.linkTitle3,
      LinkContent: GovLinksData.linkContent3.linkContent3,
      LinkUrl: GovLinksData.linkUrl3,
    },
  ];

  return (
    <div className={styles.CouncilLinks}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black">
          <p className={styles.heading}>
            How Newcastle City Council is Protecting You
          </p>
        </Box>
      </div>
      {GovLinks.map(({ id, LinkTitle, LinkContent, LinkUrl }) => (
        <LinkSection
          id={id}
          link={LinkUrl}
          heading={LinkTitle}
          content={LinkContent}
        />
      ))}
      {/* 
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
      />*/}
    </div>
  );
}

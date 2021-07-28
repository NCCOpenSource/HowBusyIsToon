import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Box from "../../atoms/Box";
import LinkSection from "../../atoms/LinkSection";
import styles from "./CouncilLinks.module.css";

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

  const GovLinksData = data.allContentfulCityCentreHomepage.edges[0].node;
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
          key={id}
          link={LinkUrl}
          heading={LinkTitle}
          content={LinkContent}
        />
      ))}
    </div>
  );
}

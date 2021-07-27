import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionExample from "../../molecules/SectionExample";

export default function AlternativeTransport() {
  const data = useStaticQuery(graphql`
    query altTravel {
      allContentfulAlternativeTransportAndOurGreenInitiative {
        edges {
          node {
            title
            article1 {
              file {
                url
              }
              description
            }
            article1Title
            article1Content {
              article1Content
            }
            article1Link
            article1Url
            article2Image {
              file {
                url
              }
              description
            }
            article2Title
            article2Content {
              article2Content
            }
            article2Link
            article2Url
            article3 {
              file {
                url
              }
              description
            }
            article3Title
            article3Content {
              article3Content
            }
            article3Link
            article3Url
          }
        }
      }
    }
  `);

  const altData =
    data.allContentfulAlternativeTransportAndOurGreenInitiative.edges[0].node;

  const altSections = [
    {
      id: 1,
      Title: altData.article1Title,
      Content: altData.article1Content.article1Content,
      LinkTitle: altData.article1Link,
      Linkurl: altData.article1Url,
      image: altData.article1.file.url,
      alt: altData.article1.description,
    },
    {
      id: 2,
      Title: altData.article2Title,
      Content: altData.article2Content.article2Content,
      LinkTitle: altData.article2Link,
      Linkurl: altData.article2Url,
      image: altData.article2Image.file.url,
      alt: altData.article2Image.description,
    },
    {
      id: 3,
      Title: altData.article3Title,
      Content: altData.article3Content.article3Content,
      LinkTitle: altData.article3Link,
      Linkurl: altData.article3Url,
      image: altData.article3.file.url,
      alt: altData.article3.description,
    },
  ];
  return <SectionExample title={altData.title} articleSections={altSections} />;
}

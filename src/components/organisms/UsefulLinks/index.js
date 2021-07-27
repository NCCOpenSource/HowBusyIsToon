import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionExample from "../../molecules/SectionExample";

export default function UsefulLinks() {
  const data = useStaticQuery(graphql`
    query UsefulLinks {
      allContentfulUsefulLinks {
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

  const UsefulData = data.allContentfulUsefulLinks.edges[0].node;

  const altSections = [
    {
      id: 1,
      Title: UsefulData.article1Title,
      Content: UsefulData.article1Content.article1Content,
      LinkTitle: UsefulData.article1Link,
      Linkurl: UsefulData.article1Url,
      image: UsefulData.article1.file.url,
      alt: UsefulData.article1.description,
    },
    {
      id: 2,
      Title: UsefulData.article2Title,
      Content: UsefulData.article2Content.article2Content,
      LinkTitle: UsefulData.article2Link,
      Linkurl: UsefulData.article2Url,
      image: UsefulData.article2Image.file.url,
      alt: UsefulData.article2Image.description,
    },
    {
      id: 3,
      Title: UsefulData.article3Title,
      Content: UsefulData.article3Content.article3Content,
      LinkTitle: UsefulData.article3Link,
      Linkurl: UsefulData.article3Url,
      image: UsefulData.article3.file.url,
      alt: UsefulData.article3.description,
    },
  ];

  return (
    <SectionExample title={UsefulData.title} articleSections={altSections} />
  );
}

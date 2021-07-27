import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./sectionExample.module.css";

export default function SectionExample({ articleSections, title }) {
  return (
    <div className={styles.SectionExample}>
      <Box>
        <p className={styles.topFont}>{title ? title : ""}</p>
      </Box>

      <div className={styles.container}>
        {articleSections
          ? articleSections.map(
              ({ id, Title, Content, LinkTitle, Linkurl, image, alt }) => (
                <ArticleExample
                  id={id}
                  Title={Title}
                  Content={Content}
                  LinkTitle={LinkTitle}
                  Linkurl={Linkurl}
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    alt={alt}
                    className={styles.image}
                  />
                </ArticleExample>
              )
            )
          : null}
      </div>
    </div>
  );
}

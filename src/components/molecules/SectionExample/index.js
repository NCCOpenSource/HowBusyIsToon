import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./sectionExample.module.css";

export default function SectionExample({
  articleSections,
  title,
  backgroundColor,
  fontColor
}) {
  return (
    <div className={styles.SectionExample} role="main" aria-labelledby={title}>
      <Box 
      fontColor={fontColor} color={backgroundColor}
      >
        <h2 className={styles.topFont}>{title ? title : ""}</h2>
      </Box>

      <div className={styles.container}>
        {articleSections
          ? articleSections.map(
              ({ id, Title, Content, LinkTitle, Linkurl, image, alt }) => (
                <ArticleExample
                  key={id}
                  Title={Title}
                  Content={Content}
                  LinkTitle={LinkTitle}
                  Linkurl={Linkurl}
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    role="img"
                    aria-label={alt}
                    alt={alt}
                    className={`articleExampleImage ${styles.image}`}
                  />
                </ArticleExample>
              )
            )
          : null}
      </div>
    </div>
  );
}

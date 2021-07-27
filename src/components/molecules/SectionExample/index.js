import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./sectionExample.module.css";

export default function SectionExample({ articleSections, title }) {
  console.log(
    "🚀 ~ file: index.js ~ line 8 ~ SectionExample ~ articleSections",
    articleSections
  );

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
        {/* <ArticleExample
          Title={homeData.article1Title}
          Content={homeData.arcticleContent1.arcticleContent1}
          LinkTitle={homeData.article1Link}
          Linkurl={homeData.article1Url}
        >
          <div
            style={{
              backgroundImage: `url(${homeData.article1.file.url})`,
            }}
            alt={homeData.article1.description}
            className={styles.image}
          />
        </ArticleExample>
        <ArticleExample
          Title={homeData.articleTitle2}
          Content={homeData.articleContent2.articleContent2}
          LinkTitle={homeData.articleLink2}
          Linkurl={homeData.articleUrl2}
        >
          <div
            style={{
              backgroundImage: `url(${homeData.article2Image.file.url})`,
            }}
            alt={homeData.article2Image.description}
            className={styles.image}
            src={homeData.article2Image.file.url}
          />
        </ArticleExample>{" "}
        <ArticleExample
          Title={homeData.articleTitle3}
          Content={homeData.articleContent3.articleContent3}
          LinkTitle={homeData.articleLink3}
          Linkurl={homeData.linkUrl3}
        >
          <div
            style={{
              backgroundImage: `url(${homeData.articleImage3.file.url})`,
            }}
            alt={homeData.articleImage3.description}
            className={styles.image}
            src={homeData.articleImage3.file.url}
          />
        </ArticleExample> */}
      </div>
    </div>
  );
}

import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./UsefulLinks.module.css";

export default function UsefulLinks() {
  return (
    <div className={styles.SectionExample}>
      <Box>
        <p className={styles.topFont}>Useful Links & Tools </p>
      </Box>
      <div className={styles.OuterContainer}>
        <ArticleExample
          className={styles.ArticleExample}
          Title={"Go North East"}
          Content={
            "Keep upto date with the latest travel news, book tickets and find out how busy your bus is using the Go North East website and app"
          }
          LinkTitle={"Go to Arriva Guidance"}
          Linkurl={"/slug"}
        >
          <StaticImage
            alt=""
            className={styles.image}
            src={"../../../images/bus-Example.jpg"}
          />
        </ArticleExample>
        <ArticleExample
          className={styles.ArticleExample}
          Title={"Arriva Guidance"}
          Content={
            "Our buses are running to times similar to their pre-coronavirus timetables, making it even easier to reconnect with the faces and places you love."
          }
          LinkTitle={"Go to Arriva Guidance"}
          Linkurl={"/slug"}
        >
          <StaticImage
            alt=""
            className={styles.image}
            src={"../../../images/bus-Example.jpg"}
          />
        </ArticleExample>
        <ArticleExample
          className={styles.ArticleExample}
          Title={"Arriva Guidance"}
          Content={
            "Our buses are running to times similar to their pre-coronavirus timetables, making it even easier to reconnect with the faces and places you love."
          }
          LinkTitle={"Go to Arriva Guidance"}
          Linkurl={"/slug"}
        >
          <StaticImage
            alt=""
            className={styles.image}
            src={"../../../images/bus-Example.jpg"}
          />
        </ArticleExample>
      </div>
    </div>
  );
}

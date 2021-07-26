import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./sectionExample.module.css";

export default function SectionExample() {
  return (
    <div className={styles.SectionExample}>
      <Box>
        <p className={styles.topFont}>
          Alternative Tranpsport and Our Green Initiative
        </p>
      </Box>

      <div className={styles.container}>
        <ArticleExample
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

import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import { StaticImage } from "gatsby-plugin-image";
import styles from "./RoadClosure.module.css";
import Box from "../../atoms/Box";
export default function RoadClosureAroundTown() {
  return (
    <div className={styles.container}>
      <Box >
        <p className={styles.topFont}>Road Closures Around Town</p>
      </Box>
      <ArticleExample
        //   className={styles.ArticleExample}
        Title={""}
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
  );
}

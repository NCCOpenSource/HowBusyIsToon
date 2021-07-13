import React from "react";
import { TopBox } from "../../atoms/Box/TopBox";
import ArticleExample from "../../atoms/ArticleExample";
import { StaticImage } from "gatsby-plugin-image";
import styles from "./RoadClosure.module.css";
export default function RoadClosureAroundTown() {
  return (
    <div className={styles.container}>
      <TopBox height={"72px"} fontSize={"31px"}>
        <p className={styles.topFont}>Road Closures Around Town</p>
      </TopBox>
      <ArticleExample
        //   className={styles.ArticleExample}
        Title={""}
        Content={
          "Our buses are running to times similar to their pre-coronavirus timetables, making it even easier to reconnect with the faces and places you love."
        }
        LinkTitle={"Go to Arriva Guidance"}
        Linkurl={"/slug"}
      >
        <StaticImage alt=''
          // style={{ height: "10%", width: "10%" }}
          src={"../../../images/bus-Example.jpg"}
        />
      </ArticleExample>
    </div>
  );
}

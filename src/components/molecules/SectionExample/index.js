import React from "react";
// import Box from "../../atoms";
import Box from "../../atoms/Box";
// import GreyBox from "../atom/greybox";
import { BottomBox } from "../../atoms/Box/BottomBox";
import styles from "./sectionExample.module.css";
import { StaticImage } from "gatsby-plugin-image";

import ArticleExample from "../../atoms/ArticleExample";

export default function SectionExample() {
  return (
    <div className={styles.SectionExample}>
      <Box fontColor="white" fullBorderRadius="full" color="black" bold>
        <p className={styles.topFont}>
          Alternative Tranpsport and Our Green Initiative
        </p>
      </Box>
      <div className={styles.OuterContainer}>
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
            // style={{ height: "10%", width: "10%" }}
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
            // style={{ height: "10%", width: "10%" }}
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
            // style={{ height: "10%", width: "10%" }}
            src={"../../../images/bus-Example.jpg"}
          />
        </ArticleExample>
      </div>
    </div>
  );
}

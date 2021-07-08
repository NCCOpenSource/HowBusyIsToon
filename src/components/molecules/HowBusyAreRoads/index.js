import React from "react";
import Box from "../../atoms";
// import GreyBox from "../atom/greybox";
import styles from "./howBusyAreRoads.module.css";

export default function HowBusyAreRoads() {
  return (
    <div>
      <Box
        fontColor="white"
        fullBorderRadius="top"
        color="black"
        bold
        // height={"56px"}
        // classname={styles.top}
        fontSize={"31px"}
      >
        <p classname={styles.topFont}>How Busy Are Roads?</p>
      </Box>
      <Box
        fontColor="black"
        fullBorderRadius="bottom"
        color="grey"
        fontSize={"25px"}

        // height={"56px"}
        // classname={styles.top}
      >
        <p>
          View live traffic updates of the busiest commuter routes in and out of
          the city centre
        </p>
      </Box>
    </div>
  );
}

import React from "react";
import Box from "../../atoms";
// import GreyBox from "../atom/greybox";
import styles from "./howBusyAreBuses.module.css";

export default function HowBusyAreBuses() {
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
        <p classname={styles.topFont}>How Busy Are Buses?</p>
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
          View real time bus data on a map of the region to see exactly where
          your next bus is
        </p>
      </Box>
    </div>
  );
}

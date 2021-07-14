import React from "react";
import Box from "../../atoms/Box";
import styles from "./howBusyAreBuses.module.css";

export default function HowBusyAreBuses() {
  return (
    <div>
      <Box fullBorderRadius="top">
        <p className={styles.topFont}>How Busy Are Buses?</p>
      </Box>
      <Box color="grey" fontColor="black" fullBorderRadius="bottom">
        <p>
          View real time bus data on a map of the region to see exactly where
          your next bus is
        </p>
      </Box>
    </div>
  );
}

import React from "react";
import Box from "../../atoms/Box";
import styles from "./howBusyAreRoads.module.css";

export default function HowBusyAreRoads() {
  return (
    <div>
      <Box fullBorderRadius="top">
        <p className={styles.topFont}>How Busy Are Roads?</p>
      </Box>
      <Box color="grey" fontColor="black" fullBorderRadius="bottom">
        <p>
          View live traffic updates of the busiest commuter routes in and out of
          the city centre
        </p>
      </Box>
    </div>
  );
}

import React from "react";
// import Box from "../../atoms";
import Box from "../../atoms/Box";
import { BottomBox } from "../../atoms/Box/BottomBox";
import { TopBox } from "../../atoms/Box/TopBox";
// import GreyBox from "../atom/greybox";
import styles from "./howBusyAreBuses.module.css";

export default function HowBusyAreBuses() {
  return (
    <div>
      <TopBox classname={styles.top} fontSize={"31px"}>
        <p classname={styles.topFont}>How Busy Are Buses?</p>
      </TopBox>
      <BottomBox fontSize={"25px"} classname={styles.bottom}>
        <p>
          View real time bus data on a map of the region to see exactly where
          your next bus is
        </p>
      </BottomBox>
    </div>
  );
}

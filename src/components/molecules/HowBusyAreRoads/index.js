import React from "react";
// import Box from "../../atoms";
import Box from "../../atoms/Box";
// import GreyBox from "../atom/greybox";
import { BottomBox } from "../../atoms/Box/BottomBox";
import { TopBox } from "../../atoms/Box/TopBox";
import styles from "./howBusyAreRoads.module.css";

export default function HowBusyAreRoads() {
  return (
    <div>
      <TopBox classname={styles.top} fontSize={"31px"}>
        <p classname={styles.topFont}>How Busy Are Roads?</p>
      </TopBox>
      <BottomBox fontSize={"25px"} classname={styles.bottom}>
        <p>
          View live traffic updates of the busiest commuter routes in and out of
          the city centre
        </p>
      </BottomBox>
    </div>
  );
}

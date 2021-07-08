import React from "react";
import BlackBox from "../atom/blackBox";
import GreyBox from "../atom/greybox";
import styles from './howBusyAreRoads.module.css' 
export default function HowBusyAreRoads() {
  return (
    <div>
      <BlackBox classname={styles.top}><h1>hello</h1> </BlackBox>
      <GreyBox></GreyBox>
    </div>
  );
}

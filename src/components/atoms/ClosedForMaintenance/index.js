import React from "react";
import styles from "./ClosedForMaintenance.module.css";
import Box from "../Box";

export const ClosedForMaintenance = () => {
  return (
    <>
      <div className={styles.closed}>
        <div>
          <Box>
            <h1>How Busy Is Toon is no longer available</h1>
          </Box>
          <Box color={"grey"} fontColor={"black"}>
            <h1>
              Check back for real time bus data soon
            </h1>
          </Box>
        </div>
      </div>
    </>
  );
};

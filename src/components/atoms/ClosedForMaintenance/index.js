import React from "react";
import styles from "./ClosedForMaintenance.module.css";
import Box from "../Box";

export const ClosedForMaintenance = () => {
  return (
    <>
      <div className={styles.closed}>
        <div>
          <Box>
            <h1>How Busy Is Toon is currently closed for maintenance</h1>
          </Box>
          <Box color={"grey"} fontColor={"black"}>
            <h1>
              We will be back shortly with more real time data about your city
              centre
            </h1>
          </Box>
        </div>
      </div>
    </>
  );
};

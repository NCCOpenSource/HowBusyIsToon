import React, { useEffect, useState } from "react";
import styles from "./UnfortunatelyNexus.module.css";

export default function UnfortunatelyNexus() {
  return (
    <div className={styles.calloutContainer}>
      <h1 className={styles.calloutText}>
      Unfortunaly Nexus don’t share data openly. Follow their Twitter feed for the latest Metro travel infomation.
      </h1>
    </div>
  );
}

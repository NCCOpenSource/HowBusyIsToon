import React from "react";
import UnfortunatelyNexus from "../../atoms/UnfortunatelyNexus";
import CouncilLinks from "../../molecules/CouncilLinks";
import LocalTravelUpdates from "../../molecules/LocalTravelUpdates";
import NexusArticle from "../../molecules/NexusArticle";
import styles from "./Nexus.module.css";

export default function Nexus() {
  return (
    <div className={styles.container}>
      <UnfortunatelyNexus />
      <div className={styles.Innercontainer}>
        <NexusArticle />
        <div className={styles.SectionExample}>
          <LocalTravelUpdates />
        </div>
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}

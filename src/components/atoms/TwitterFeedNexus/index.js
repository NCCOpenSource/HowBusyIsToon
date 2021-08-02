import React from "react";
import { Timeline } from "react-twitter-widgets";
import styles from "./twitterFeed.module.css";

const TwitterFeedNexus = () => {
  const timeline = (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "My_Metro",
      }}
      options={{ id: "profile:My_Metro", height: "700" }}
    />
  );
  return (
    <div className={styles.TrafficFeed}>
      {timeline ? (
        timeline
      ) : (
        <a
          class="twitter-timeline"
          data-height="700"
          href="https://twitter.com/My_Metro?ref_src=twsrc%5Etfw"
        >
          Tweets by My_Metro
        </a>
      )}
    </div>
  );
};

export default TwitterFeedNexus;

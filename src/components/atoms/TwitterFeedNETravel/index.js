import React from "react";
import styles from "./twitterFeed.module.css";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedNELive = () => {
  const timeline = (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "NELiveTraffic",
      }}
      options={{ id: "profile:NELiveTraffic", height: "700" }}
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
          data-theme="light"
          href="https://twitter.com/NELiveTraffic?ref_src=twsrc%5Etfw"
        >
          Tweets by NELiveTraffic
        </a>
      )}
    </div>
  );
};

export default TwitterFeedNELive;

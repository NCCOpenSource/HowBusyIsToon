import React from "react";
import { graphql } from "gatsby";


const TwitterFeed = (data) => {
  console.log("🚀 ~ file: twitterFeed.js ~ line 6 ~ twitterFeed ~ data", data);
  console.log("🚀 ~ file: twitterFeed.js ~ line 6 ~ twitterFeed ~ data", data.twitterStatusesUserTimelineHackersTweets);
  return (
    <div>
      <p>{data.full_text}</p>
      <h1>hello</h1>
      <p>{data.lang}</p>
      <p>{data}</p>
      <p>{data.retweeted}</p>
    </div>
  );
};

export const query = graphql`
query MyQuery {
  twitterSearchTweetsWesbos {
    full_text
  }
}
`;

export default TwitterFeed;

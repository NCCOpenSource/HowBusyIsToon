import React from "react";
import { Helmet } from "react-helmet";
import metaScreenshot from "../../../images/metaScreenshot.png";

export default function index() {
  const website = "https://dreamy-hbitv2-7b8f2c.netlify.app/";
  return (
    <Helmet>
      <html lang="en"></html>
      <title>How Busy Is Newcastle?</title>
      <link rel="canonical" href={website} />
      <meta
        charSet="utf-8"
        name="Your home for real time data"
        content="Various Traffic Data sets and real time footfall data associated with NewCastle City Center"
      ></meta>
      <meta
        name="description"
        content="Various Traffic Data sets and real time footfall data associated with NewCastle City Center"
      ></meta>
      <meta
        name="keywords"
        content="Real Time Data, Newcasle, Council, Covid, Safety, guidance,"
      ></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={website} />
      <meta property="og:title" content="How Busy Is Newcastle?" />
      <meta
        property="og:description"
        content="Various Traffic Data sets and real time footfall data associated with NewCastle City Center"
      />
      <meta property="og:image" content={metaScreenshot} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={website} />
      <meta property="twitter:title" content="How Busy Is Newcastle?" />
      <meta
        property="twitter:description"
        content="Various Traffic Data sets and real time footfall data associated with NewCastle City Center"
      />
      <meta property="twitter:image" content={metaScreenshot}></meta>
    </Helmet>
  );
}

import React from "react";
import Box from "../../atoms/Box";
import styles from "./AboutSection.module.css";
import AboutSectionArticle from "../../molecules/AboutSectionArticle";

export default function AboutSection() {
  const aboutArticleSections = [
    {
      id: 1,
      subHeading: "What are we doing?",
      contentText:
        "How Busy Is Toon is here to help you feel safe and prepared when visiting your city centre. You have access to still images updated every five minutes from around the city centre, access to still images updated every 5 minutes of traffic cams of popular roads in and out of the city centre, live data on car park capacity, real time bus data, and up to date rules and safety guidance from councils and government.",
    },
    {
      id: 2,
      subHeading: "Who’s involved?",
      contentText:
        "The platform was built in collaboration with Newcastle City Council, NE1, Newcastle University’s Research Software Engineering team, and hedgehog lab, using data from the Urban Observatory, and data analytics from National Innovation Centre for Data.",
    },
    {
      id: 3,
      subHeading: "Use of Data & Privacy Notice",
      contentText:
        "The traffic light status on the homepage is based on footfall data from Northumberland Street only, generated by cameras using computer vision technology. The information is transmitted back to the Urban Observatory and the website is automatically updated using the data collected. The footage is not routinely monitored. Other data shared on this site including traffic cameras and parking information are also managed by the Urban Observatory (include link to their site).  More information is available in the Urban Observatory's privacy statement",
    },
    {
      id: 4,
      subHeading: "Our Partners & Collaborators",
      contentText:
        "How Busy Is Toon was 1 of 11 funded collaborative projects through the MHCLG Local Digital COVID-19 Challenge. Research was conducted by hedgehog lab with people all around the UK who gave valuable feedback and insight into what they would like to see on this website.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black">
          <p className={styles.topFont}>About How Busy Is Toon </p>
        </Box>
      </div>
      {aboutArticleSections.map(({ id, subHeading, contentText }) => (
        <AboutSectionArticle
          subHeading={subHeading}
          contentText={contentText}
        />
      ))}
    </div>
  );
}

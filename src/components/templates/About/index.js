import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./About.module.css";
import HowBusyIsAbout from "../../atoms/HowBusyIsAbout";
import LinkSection from "../../atoms/LinkSection";
import AboutSection from "../../organisms/AboutSection";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <HowBusyIsAbout />
        <LinkSection
          link={""}
          heading={"Project Updates"}
          content={
            "Keep up to date with our work on the site on our project webpage"
          }
        />
        <LinkSection
          link={""}
          heading={"Onboarding Guide"}
          content={
            "Want to introduce a How Busy Is Toon site for your local area or city? Find out how you can in our ‘onboarding guide’"
          }
        />
      </div>

      <AboutSection />
    </div>
  );
}

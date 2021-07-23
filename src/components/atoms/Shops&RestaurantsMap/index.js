import React from "react";
import styles from "./shops.module.css";
export default function ShopsRestaurantsMap() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2289.840284418972!2d-1.6128000000000002!3d54.9759!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1626245521296!5m2!1sen!2sus"
        width="100%"
        height="100%"
        border-radius="8px"
        style={{ border: 0, "border-radius": "8px" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

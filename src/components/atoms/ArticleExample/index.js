import React from "react";
import styles from "./ArticleExample.module.css";

export default function ArticleExample({
  children,
  Title,
  Content,
  LinkTitle,
  Linkurl,
}) {
  return (
    <div
      className={styles.articleExampleContainer}
      role="main"
      aria-labelledby={Title}
    >
      {children}
      {Title ? <h3>{Title}</h3> : ""}
      <p>{Content}</p>
      <a target="_blank" rel="noreferrer" href={Linkurl}>
        {LinkTitle}
      </a>
    </div>
  );
}

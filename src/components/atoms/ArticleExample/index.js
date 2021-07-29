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
    <div className={styles.articleExampleContainer}>
      {children}
      {Title ? <p>{Title}</p> : ""}
      <p>{Content}</p>
      <a target="_blank" rel="noreferrer" href={Linkurl}>
        {LinkTitle}
      </a>
    </div>
  );
}

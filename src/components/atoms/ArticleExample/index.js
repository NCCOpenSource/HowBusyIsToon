import React from "react";
import styles from "./ArticleExample.module.css";

export default function ArticleExample({
  children,
  Title,
  Content,
  LinkTitle,
  Linkurl,
  inline,
}) {
  return (
    <div className={styles.articleExampleContainer} role="main">
      {children}
      {Title ? <h3>{Title}</h3> : <br />}
      <p>{Content}</p>
      <a target={inline ? "" : "_blank"} rel="noreferrer" href={Linkurl}>
        {LinkTitle}
      </a>
    </div>
  );
}

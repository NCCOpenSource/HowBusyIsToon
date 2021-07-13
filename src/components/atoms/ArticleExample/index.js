import React from "react";
import { Link } from "gatsby";
import styles from "./ArticleExample.module.css";
export default function   ArticleExample({
  children,
  Title,
  Content,
  LinkTitle,
  Linkurl,
}) {
  return (
    <div className={styles.articleExampleContainer}>
      {children}
      <p>{Title}</p>
      <p>{Content}</p>
      <Link href={Linkurl}>{LinkTitle}</Link>
    </div>
  );
}

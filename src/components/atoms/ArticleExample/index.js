import React from "react";
import { Link } from "gatsby";

export default function ArticleExample({
  children,
  Title,
  Content,
  LinkTitle,
  Linkurl,
}) {
  return (
    <>
      {children}
      <p>{Title}</p>
      <p>{Content}</p>
      <Link href={Linkurl}>{LinkTitle}</Link>
    </>
  );
}

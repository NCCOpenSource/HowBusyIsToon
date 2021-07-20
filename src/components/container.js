import React from "react";
import { Helmet } from "react-helmet";

export default ({ children }) => (
  <>
    <Helmet>
      <html lang="en"></html>

      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages"
      ></meta>
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>{children}</div>
  </>
);

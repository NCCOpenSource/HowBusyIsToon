import React from "react";
import "./CSS/base.css";
import Container from "./container";
import Nav from "./organisms/Nav";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import EmojicomWidget from "./molecules/EmojicomWidget/index";

export default function Layout(props) {
  const { children } = props;

  return (
    <Container>
      <div className={styles.containerGrid}>
        {children}
        <Footer />
      </div>
    </Container>
  );
}

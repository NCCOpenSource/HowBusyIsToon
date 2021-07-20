import React from "react";
import Container from "./container";
import "./CSS/base.css";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";

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

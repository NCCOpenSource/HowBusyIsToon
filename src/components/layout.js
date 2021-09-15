import React from "react";
import Container from "./container";
import "./CSS/base.css";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import Nav from "./organisms/Nav";

export default function Layout(props) {
  const { children } = props;

  return (
    <Container>
      <div className={styles.containerGrid}>
        <header className={styles.header}>
          <Nav />
        </header>

        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </Container>
  );
}

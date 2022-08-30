import React from "react";
import Container from "./container";
import "./CSS/base.css";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import Nav from "./organisms/Nav";
import Box from "./atoms/Box";
import { ClosedForMaintenance } from "./atoms/ClosedForMaintenance";

export default function Layout(props) {
  const { children } = props;
  const IsThisSiteClosedForMaintenece = true;

  return (
    <Container>
      <div className={styles.containerGrid}>
        {IsThisSiteClosedForMaintenece ? (
          <ClosedForMaintenance />
        ) : (
          <>
            <header className={styles.header}>
              <Nav />
            </header>

            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </>
        )}
      </div>
    </Container>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.error}>
        <img
          src={
            "./assets/toppng.com-404-error-error-404-transparent-887x286.png"
          }
        />
        <Link className={styles.linkToHome} to="/">Home page</Link>
      </div>
    </main>
  );
};

export default Error404;

import React from "react";
import styles from "./FullPage.module.css"

export default function Page() {
    return (
      <div className={styles.landingPage}>
        <div className={styles.centerContent}>
          <p className={styles.title}>404 😭</p>
          <p className={styles.subtitle}>We couldn't find what you were looking for.</p>
        </div>
      </div>
    )
}
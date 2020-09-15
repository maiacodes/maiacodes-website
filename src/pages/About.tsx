import React from "react";

import styles from '../styles/Page.module.css'; 

export default function Page() {
    return (
        <div className={styles.pageContent}>
            <h1>📝 About my website</h1>
            <p>I'll write something here if I remember to.</p>
        </div>
    )
}
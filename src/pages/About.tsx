import React from "react";

import styles from '../styles/Page.module.css'; 

export default function Page() {
    return (
        <div className={styles.pageContent}>
            <h1>📝 About my website</h1>
            <p>This is my first project written in React</p>
        </div>
    )
}
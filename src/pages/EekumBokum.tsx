import React from "react";

import styles from '../styles/Page.module.css'; 

export default function Page() {
    return (
        <div className={styles.pageContent}>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/sq1iAXACKvU?autoplay=true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
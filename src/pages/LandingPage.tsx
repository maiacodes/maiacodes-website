import React from "react";

import styles from './FullPage.module.css'; 
import MOTD from '../components/MOTD'

export default function Page() {
    

    return (
        <div className={styles.landingPage}>
            <div className={styles.centerContent}>
                <p className={styles.title}>Hello! 💕</p>
                <p className={styles.subtitle}><MOTD /></p>
            </div>
        </div>
    )
}
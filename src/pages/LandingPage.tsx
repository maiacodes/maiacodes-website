import React from "react";

import styles from './FullPage.module.css'; 
import {Helmet} from "react-helmet";
const landingVideo = "https://res.cloudinary.com/dat3rkiml/video/upload/v1600112251/mcodes/Pexels_Videos_2769.mp4"

export default function Page() {
    return (
        <div className={styles.landingPage}>
            <div className={styles.centerContent}>
                <p className={styles.title}>Hello! 💕</p>
                <p className={styles.subtitle}>Welcome to my website!</p>
            </div>
        </div>
    )
}
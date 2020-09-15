import React from "react";

import styles from '../styles/Page.module.css'; 
import {Link} from 'react-router-dom'

export default function Page() {
    return (
        <div className={styles.pageContent}>
            <h1>💻 Menu</h1>
            <br></br>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
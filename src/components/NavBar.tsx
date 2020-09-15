import React from 'react'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

export default class NavBar extends React.Component {
    render () {
    return (<div className={styles.navbar}>
        <div className={styles.column1}>
            <p className={styles.navigation}><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link></p>
        </div>

        <div className={styles.column2}>
            <h1 className={styles.title}>{'</maia.codes>'}</h1>
        </div>
        
        <div className={styles.column3}>
            <p className={styles.menu}><Link to="/menu">Menu</Link></p>
        </div>
    </div>);
    }
}
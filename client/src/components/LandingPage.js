import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';

export default function LandingPage() {
    return (
    <div className={styles.landing}>
        <h1 className={styles.wlc}>Good Food!!!</h1>
        <Link to="/home">
            <button className={styles.btn}>Home</button>
        </Link>
        
    </div>
    )
}

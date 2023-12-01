import React from "react";
import styles from "./styles.module.css";

const NotFound = () => {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <a className={styles.logo} href="/">Name</a>
            </header>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>404</h1>
                <h2 className={styles.secondaryTitle}>Page not found</h2>
                <a className={styles.link} href="/">Return to home page</a>
            </div>
        </div>
    )
}

export default NotFound
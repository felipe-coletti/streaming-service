import React from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Header = () => {
    return(
        <div className={styles.container}>
            <a className={styles.logo} href="/">Name</a>
            <div className={styles.actionsArea}>
                <button className={styles.noTextButton} title="Search">
                    <Icon icon="octicon:search-16" />
                </button>
                <a className={styles.secondaryButton} href="/sign-in">Sign in</a>
                <a className={styles.primaryButton} href="/sign-up">Sign up</a>
            </div>
        </div>
    )
}

export default Header
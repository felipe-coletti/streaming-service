import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";

const Serie = () => {
    const { id } = useParams()

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentArea}>
                <section className={styles.section}>
                    <h1 className={styles.primaryTitle}>Name</h1>
                    <p className={styles.paragraph}>Description</p>
                    <div className={styles.actionsArea}>
                        <button className={styles.primaryButton}>
                            <Icon className={styles.icon} icon="ph:play-fill" />
                            Watch
                        </button>
                        <button className={styles.secondaryButton}>
                            <Icon className={styles.icon} icon="octicon:plus-16" />
                            Add to your list
                        </button>
                    </div>
                    <label className={styles.label}>Rating <p className={styles.paragraph}>0+</p></label>
                    <label className={styles.label}>Episodes <p className={styles.paragraph}>0</p></label>
                    <label className={styles.label}>Seasons <p className={styles.paragraph}>0</p></label>
                    <label className={styles.label}>Studio <p className={styles.paragraph}>Name</p></label>
                </section>
                <section className={styles.section}>
                    <div>
                        <h2 className={styles.secondaryTitle}>Episodes</h2>
                    </div>
                    <div className={styles.grid}>
                    </div> 
                </section>
                <section className={styles.section}>
                    <div>
                        <h2 className={styles.secondaryTitle}>Comments</h2>
                    </div>
                    <div className={styles.grid}>
                    </div> 
                </section>
            </div>
        </div>
    )
}

export default Serie
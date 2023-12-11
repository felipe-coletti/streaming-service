import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";

const Serie = () => {
    const { id } = useParams()

    const isAuthenticated = false

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentArea}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.primaryTitle}>Name</h1>
                        <p className={styles.paragraph}>Rating</p>
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
                    </div>
                    <div className={styles.sectionContent}>
                        <h3 className={styles.tertiaryTitle}>Episodes</h3>
                        <p className={styles.paragraph}>0</p>
                        <h3 className={styles.tertiaryTitle}>Seasons</h3>
                        <p className={styles.paragraph}>0</p>
                        <h3 className={styles.tertiaryTitle}>Studio</h3>
                        <p className={styles.paragraph}>Name</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div>
                        <h2 className={styles.secondaryTitle}>Episodes</h2>
                    </div>
                    <div className={styles.grid}>
                        <a className={styles.card} href="/series/undefined/episode/undefined">
                            <img className={styles.cardImage} alt=""/>
                            <h3 className={styles.tertiaryTitle}>Name</h3>
                        </a>
                    </div> 
                </section>
                <section className={styles.section}>
                    <h2 className={styles.secondaryTitle}>0 Reviews</h2>
                    <div className={styles.sectionContent}>
                        {isAuthenticated ? (
                            <div className={styles.reviewContainer}>
                                <img className={styles.profileImage} alt=""/>
                                <input className={styles.input} placeholder="Write a review"/>
                                <button className={styles.primaryButton}>Send</button>
                            </div>
                        ) : (
                            <div className={styles.warningContainer}>
                                <h1 className={styles.primaryTitle}>Account required</h1>
                                <p className={styles.paragraph}>You need to be logged in to an account to do this.</p>
                            </div>
                        )}
                        <div className={styles.reviewContainer}>
                            <img className={styles.profileImage} alt=""/>
                            <div className={styles.reviewContentArea}>
                                <p className={styles.paragraph}><a className={styles.tertiaryTitle} href="" alt="">Name</a> • January 1st, 0000</p>
                                <div className={styles.actionsArea}>
                                    <div className={styles.filledStar}><Icon icon="ion:star" /></div>
                                    <div className={styles.filledStar}><Icon icon="ion:star" /></div>
                                    <div className={styles.filledStar}><Icon icon="ion:star" /></div>
                                    <div className={styles.filledStar}><Icon icon="ion:star" /></div>
                                    <div className={styles.unfilledStar}><Icon icon="ion:star-outline" /></div>
                                </div>
                                <p className={styles.paragraph}>Review</p>
                                <div className={styles.actionsArea}>
                                    <p className={styles.paragraph}>0 out of 0 people found this review helpful. Did you find this review helpful?</p>
                                    <button className={styles.tertiaryButton}>Yes</button>
                                    <button className={styles.tertiaryButton}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Serie
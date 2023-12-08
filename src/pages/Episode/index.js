import { React, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";

const Episode = () => {
    const { id } = useParams()

    const [isStarted, setStarted] = useState(false)
    const [isPaused, setPaused] = useState(true)
    const [displayVolume, setDisplayVolume] = useState(0)
    const [volume, setVolume] = useState(0)
    const isMuted = displayVolume == 0

    const isAuthenticated = false

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentArea}>
                <section className={styles.heroSection}>
                    <div className={styles.videoContainer}>
                        <video className={styles.videoDisplay} autoPlay buffered="true" poster="" muted={isMuted}>
                            <source src="" type="video/mp4" />
                            Unable to load video
                        </video>
                        {!isStarted && (
                            <button className={styles.startVideoButton} onClick={() => {setStarted(true)}}>
                                <Icon icon="ph:play-fill" />
                            </button>
                        )}
                        <div className={styles.videoControls}>
                            <input type="range" />
                            <div className={styles.videoControlButtons}>
                                <div className={styles.videoActionsArea}>
                                    <button className={styles.videoControlButton} onClick={() => {setPaused(!isPaused)}}>
                                        {isPaused ? (
                                            <Icon icon="ph:play-fill" />
                                        ) : (
                                            <Icon icon="ph:pause-fill" />
                                        )}
                                    </button>
                                    <button className={styles.videoControlButton}>
                                        <Icon icon="ph:skip-forward-fill" />
                                    </button>
                                    <div className={styles.videoActionsArea}>
                                        <button className={styles.videoControlButton} onClick={() => {displayVolume > 0 ? (setDisplayVolume(0)) : (setDisplayVolume(volume))}}>
                                            {displayVolume <= 0 ? (
                                                <Icon icon="ph:speaker-simple-slash-fill" />
                                            ) : (
                                                <Icon icon="ph:speaker-simple-high-fill" />
                                            )}
                                        </button>
                                        <input className={styles.videoVolumeInput} type="range" value={displayVolume} onChange={(e) => {setDisplayVolume(e.target.value)}} onClick={(e) => {e.target.value > 0 && (setVolume(e.target.value))}} />
                                    </div>
                                </div>
                                <div className={styles.videoActionsArea}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className={styles.primaryTitle}>Name</h1>
                </section>
                <section className={styles.episodesSection}>
                    <h2 className={styles.secondaryTitle}>Episodes</h2>
                    <div className={styles.sectionContent}>
                        <a className={styles.cardContainer}>
                            <img className={styles.cardImage} href="" alt=""/>
                            <div className={styles.cardContentArea}>
                                <h3 className={styles.tertiaryTitle}>Name</h3>
                            </div>
                        </a>
                    </div>
                </section>
                <section className={styles.commentsSection}>
                    <h2 className={styles.secondaryTitle}>0 Comments</h2>
                    <div className={styles.sectionContent}>
                        {isAuthenticated ? (
                            <div className={styles.commentContainer}>
                                <img className={styles.profileImage} alt=""/>
                                <input className={styles.input} placeholder="Write a comment"/>
                                <button className={styles.primaryButton}>Send</button>
                            </div>
                        ) : (
                            <div className={styles.warningContainer}>
                                <h1 className={styles.primaryTitle}>Account required</h1>
                                <p className={styles.paragraph}>You need to be logged in to an account to do this.</p>
                            </div>
                        )}
                        <div className={styles.commentContainer}>
                            <img className={styles.profileImage} alt=""/>
                            <div className={styles.commentContentArea}>
                                <p className={styles.paragraph}><a className={styles.tertiaryTitle} href="" alt="">Name</a> • 0 seconds ago</p>
                                <p className={styles.paragraph}>Comment</p>
                                <div className={styles.actionsArea}>
                                    <button className={styles.tertiaryButton}>
                                        <Icon className={styles.icon} icon="tabler:heart" />
                                        0
                                    </button>
                                    <button className={styles.tertiaryButton}>
                                        <Icon className={styles.icon} icon="ph:share-fat-bold" />
                                        Reply
                                    </button>
                                </div>
                                <button className={styles.tertiaryButton}>
                                    View 0 replys
                                    <Icon icon="ep:arrow-down-bold" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Episode
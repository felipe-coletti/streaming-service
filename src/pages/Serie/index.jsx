import { React, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";

const Serie = () => {
    const { id } = useParams()

    const [starsNumber, setStarsNumber] = useState(0);

    var changeableReviewStars = []

    for (let i = 0; i < 5; i++) {
        if (i < starsNumber) {
            changeableReviewStars.push(<div className={styles.changeableFilledStar} onClick={() => {i + 1 === starsNumber ? setStarsNumber(0) : setStarsNumber(i + 1)}}><Icon icon="ion:star" /></div>)
        } else {
            changeableReviewStars.push(<div className={styles.changeableUnfilledStar} onClick={() => {setStarsNumber(i + 1)}}><Icon icon="ion:star-outline" /></div>)
        }
    }

    const handleReviewStars = (stars) => {
        var reviewStars = []

        for (let i = 0; i < 5; i++) {
            if (i < stars) {
                reviewStars.push(<div className={styles.filledStar}><Icon icon="ion:star" /></div>)
            } else {
                reviewStars.push(<div className={styles.unfilledStar}><Icon icon="ion:star-outline" /></div>)
            }
        }

        return reviewStars
    }

    const isAuthenticated = false

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentArea}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.primaryTitle}>Name</h1>
                        <div className={styles.starsArea}>
                            {handleReviewStars(4)}
                            <p className={styles.paragraph}>Rating</p>
                        </div>
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
                    <div className={styles.actionsArea}>
                        <p className={styles.tag}>Romance</p>
                    </div>
                    <div className={styles.dataGrid}>
                        <h4 className={styles.quaternaryTitle}>Episodes</h4>
                        <p className={styles.paragraph}>0</p>
                        <h4 className={styles.quaternaryTitle}>Seasons</h4>
                        <p className={styles.paragraph}>0</p>
                        <h4 className={styles.quaternaryTitle}>Studio</h4>
                        <p className={styles.paragraph}>Name</p>
                        <h4 className={styles.quaternaryTitle}>Release</h4>
                        <p className={styles.paragraph}>0000</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div>
                        <h3 className={styles.tertiaryTitle}>Episodes</h3>
                    </div>
                    <div className={styles.grid}>
                        <a className={styles.card} href="/series/undefined/episode/undefined">
                            <img className={styles.cardImage} alt=""/>
                            <h4 className={styles.quaternaryTitle}>Name</h4>
                        </a>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.titleArea}>
                        <h3 className={styles.tertiaryTitle}>0 reviews</h3>
                        <button className={styles.tertiaryButton}>
                            <Icon className={styles.icon} icon="solar:list-bold" />
                            Sort by
                        </button>
                    </div>
                    <div className={styles.sectionContent}>
                        {isAuthenticated ? (
                            <div className={styles.reviewContainer}>
                                <img className={styles.profileImage} alt=""/>
                                <div className={styles.reviewContentArea}>
                                    <div className={styles.actionsArea}>
                                        {changeableReviewStars}
                                    </div>
                                    <input className={styles.input} placeholder="Write a title for the review"/>
                                    <input className={styles.input} placeholder="Write a review"/>
                                </div>
                                <button className={styles.primaryButton}>Send</button>
                            </div>
                        ) : (
                            <div className={styles.warningContainer}>
                                <h2 className={styles.secondaryTitle}>Account required</h2>
                                <p className={styles.paragraph}>You need to be logged in to an account to do this.</p>
                            </div>
                        )}
                        <div className={styles.reviewContainer}>
                            <img className={styles.profileImage} alt=""/>
                            <div className={styles.reviewContentArea}>
                                <div className={styles.titleArea}>
                                    <p className={styles.paragraph}><a className={styles.quaternaryTitle} href="" alt="">Name</a> • January 1st, 0000</p>
                                    <button className={styles.tertiaryButton} title="Options">
                                        <Icon className={styles.icon} icon="ph:dots-three-vertical-bold" />
                                    </button>
                                </div>
                                <div className={styles.starsArea}>
                                    {handleReviewStars(4)}
                                </div>
                                <h3 className={styles.tertiaryTitle}>Review title</h3>
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
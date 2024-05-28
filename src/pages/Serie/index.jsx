import { useState, useEffect } from "react"
import styles from "./styles.module.css"
import Header from "../../components/Header"
import { Icon } from '@iconify/react'
import { useParams } from "react-router-dom"
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Rating from "../../components/Rating"

const Serie = () => {
    const { id } = useParams()

    const [rate, setRate] = useState(4)

    const isAuthenticated = false

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentArea}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.primaryTitle}>Name</h1>
                        <div className={styles.actionsArea}>
                            <Rating value={rate} onChange={setRate}/>
                            <p className={styles.paragraph}>{rate}</p>
                        </div>
                        <p className={styles.paragraph}>Description</p>
                        <div className={styles.actionsArea}>
                            <Button variant='primary'>
                                <Icon className={styles.icon} icon="ph:play-fill" />
                                Watch
                            </Button>
                            <Button variant='secondary'>
                                <Icon className={styles.icon} icon="octicon:plus-16" />
                                Add to your list
                            </Button>
                        </div>
                    </div>
                    <div className={styles.actionsArea}>
                        <Tag>Tag</Tag>
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
                        <Button variant='tertiary'>
                            <Icon className={styles.icon} icon="solar:list-bold" />
                            Sort by
                        </Button>
                    </div>
                    <div className={styles.sectionContent}>
                        {isAuthenticated ? (
                            <div className={styles.reviewContainer}>
                                <img className={styles.profileImage} alt=""/>
                                <div className={styles.reviewContentArea}>
                                    <Rating/>
                                    <input className={styles.input} placeholder="Write a title for the review"/>
                                    <input className={styles.input} placeholder="Write a review"/>
                                </div>
                                <Button variant='primary'>Send</Button>
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
                                    <Button variant='tertiary' title="Options">
                                        <Icon className={styles.icon} icon="ph:dots-three-vertical-bold" />
                                    </Button>
                                </div>
                                <Rating value={3} readOnly/>
                                <h3 className={styles.tertiaryTitle}>Review title</h3>
                                <p className={styles.paragraph}>Review</p>
                                <div className={styles.actionsArea}>
                                    <p className={styles.paragraph}>0 out of 0 people found this review helpful. Did you find this review helpful?</p>
                                    <Button variant='tertiary'>Yes</Button>
                                    <Button variant='tertiary'>No</Button>
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
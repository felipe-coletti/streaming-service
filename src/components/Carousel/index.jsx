import { React, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Carousel = ({ data }) => {
    const carousel = useRef(null)
    const card = useRef(null)

    const [currentPage, setCurrentPage] = useState(0)
    const [isPaused, setPaused] = useState(false)
    const [timeProgress, setTimeProgress] = useState(0)

    const pagePeriod = 10000

    useEffect(() => {
        setTimeout(function() {
            if (!isPaused) {
                setTimeProgress(timeProgress + 1)

                if (timeProgress === 100) {
                    handleRight()
                }
            }
        }, pagePeriod / 100)
    })

    const handleLeft = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            carousel.current.scrollLeft -= card.current.offsetWidth
        } else if (currentPage === 0) {
            setCurrentPage(data.length - 1)
            carousel.current.scrollLeft = carousel.current.scrollWidth
        }

        setTimeProgress(0)
    }

    const handleRight = () => {
        if (currentPage < data.length - 1) {
            setCurrentPage(currentPage + 1)
            carousel.current.scrollLeft += card.current.offsetWidth
        } else if (currentPage === data.length - 1) {
            setCurrentPage(0)
            carousel.current.scrollLeft = 0
        }

        setTimeProgress(0)
    }

    const paginate = (i) => {
        if (i !== currentPage) {
            setCurrentPage(i)
            carousel.current.scrollLeft = card.current.offsetWidth * i
            setTimeProgress(0)
        }
    }

    return (
        <div className={styles.carouselContainer} onMouseOver={() => {setPaused(true)}} onMouseOut={() => {setPaused(false)}}>
            <button className={styles.leftButton} title="Previous" onClick={handleLeft}>
                <Icon icon="ep:arrow-left-bold" />
            </button>
            <button className={styles.rightButton} title="Next" onClick={handleRight}>
                <Icon icon="ep:arrow-right-bold" />
            </button>
            <div className={styles.carousel} ref={carousel}>
                {data.map((item, i) => (
                    <div className={currentPage === i ? styles.selectedCard : styles.card} key={i} ref={card}>
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
                ))}
            </div>
            <div className={styles.pagination}>
                {data.map((item, i) => (
                    <div className={currentPage === i ? styles.selectedPagePill : styles.pagePill} onClick={() => {paginate(i)}} key={i}>
                        {currentPage === i && (
                            <div className={styles.pagePillProgress} style={{width: timeProgress + "%"}}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
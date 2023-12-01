import { React, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Carousel = ({ data }) => {
    const carousel = useRef(null)
    const card = useRef(null)

    const [currentPage, setCurrentPage] = useState(0)

    const handleLeft = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            carousel.current.scrollLeft -= card.current.offsetWidth
        } else if (currentPage === 0) {
            setCurrentPage(data.length - 1)
            carousel.current.scrollLeft = carousel.current.scrollWidth
        }
    }

    const handleRight = () => {
        if (currentPage < data.length - 1) {
            setCurrentPage(currentPage + 1)
            carousel.current.scrollLeft += card.current.offsetWidth
        } else if (currentPage === data.length - 1) {
            setCurrentPage(0)
            carousel.current.scrollLeft = 0
        }
    }

    const paginate = (i) => {
        setCurrentPage(i)
        carousel.current.scrollLeft = card.current.offsetWidth * i
    }

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.leftButton} title="Previous" onClick={handleLeft}>
                <Icon icon="ep:arrow-left-bold" />
            </button>
            <button className={styles.rightButton} title="Next" onClick={handleRight}>
                <Icon icon="ep:arrow-right-bold" />
            </button>
            <div className={styles.pagination}>
                {data.map((item, i) => (
                    <div className={currentPage === i ? (styles.selectedPagePill) : (styles.pagePill)} onClick={() => {paginate(i)}} key={i}></div>
                ))}
            </div>
            <div className={styles.carousel} ref={carousel}>
                {data.map((item, i) => (
                    <div className={currentPage === i ? (styles.selectedCard) : (styles.card)} key={i} ref={card}>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
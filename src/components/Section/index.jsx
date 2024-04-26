import { React, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Section = ({title, data}) => {
    const carousel = useRef(null)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollLimit, setScrollLimit] = useState(0)

    useEffect(() => {
        setScrollLimit(carousel.current.scrollWidth - carousel.current.clientWidth)
    }, [])

    const handleLeft = () => {
        const newPosition = carousel.current.scrollLeft - carousel.current.offsetWidth
        setScrollPosition(newPosition >= 0 ? newPosition : 0)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRight = () => {
        const newPosition = carousel.current.scrollLeft + carousel.current.offsetWidth
        setScrollPosition(newPosition <= scrollLimit ? newPosition : scrollLimit)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h1 className={styles.primaryTitle}>{title}</h1>
                <a className={styles.link} href="/categories/undefined">View all</a>
            </div>
            <div className={styles.carouselContainer}>
                {scrollPosition !== 0 && (
                    <button className={styles.leftButton} title="Previous" onClick={handleLeft}>
                        <Icon icon="ep:arrow-left-bold" />
                    </button>
                )}
                {scrollPosition !== scrollLimit && (
                    <button className={styles.rightButton} title="Next" onClick={handleRight}>
                        <Icon icon="ep:arrow-right-bold" />
                    </button>
                )}
                <div className={styles.carousel} ref={carousel}>
                    {data.map((item, i) => (
                        <a className={styles.card} href={`/series/${item.id}`} key={i}>
                            <img className={styles.cardImage} src="" alt={item.name}/>
                            <h2 className={styles.secondaryTitle}>{item.name}</h2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section
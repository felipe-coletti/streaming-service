import { Children, useEffect, useRef, useState, useLayoutEffect } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const Carousel = ({ autoPlay=false, controls=false, children }) => {
    const carousel = useRef(null)

    const carouselChildren = Children.count(children)
    const clonedChild = Children.toArray(children)[0]

    const [currentPage, setCurrentPage] = useState(0)
    const [isPaused, setPaused] = useState(false)
    const [timeProgress, setTimeProgress] = useState(0)

    const pagePeriod = 10000

    useEffect(() => {
        if (autoPlay) {
            setTimeout(function() {
                if (!isPaused) {
                    setTimeProgress(timeProgress + 1)

                    if (timeProgress === 100) {
                        handleRight()
                    }
                }
            }, pagePeriod / 100)
        }
    })

    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setWidth(carousel.current.offsetWidth)
    }, [])

    const [ms, setMs] = useState(500)

    //const ms = currentPage != carouselChildren && currentPage != 0 ? 500 : 0
    const position = currentPage * width * -1

    const handleLeft = () => {
        if (currentPage === 0) {
            setMs(0)
            setCurrentPage(carouselChildren)
            setMs(500)
            setCurrentPage(currentPage - 1)
        } else if (currentPage > 0) {
            setMs(500)
            setCurrentPage(currentPage - 1)
        }

        setTimeProgress(0)
    }

    const handleRight = () => {
        if (currentPage === carouselChildren - 1) {
            setMs(500)
            setCurrentPage(currentPage + 1)
            setMs(0)
            setCurrentPage(0)
        } else if (currentPage < carouselChildren) {
            setMs(500)
            setCurrentPage(currentPage + 1)
        }

        setTimeProgress(0)
    }

    const paginate = (i) => {
        if (i !== currentPage) {
            setCurrentPage(i)
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
            <div className={styles.carouselWrapper} ref={carousel}>
                <ul className={styles.carouselStage} style={{transition: `transform ${ms}ms ease 0ms`, transform: `translate3d(${position}px, 0px, 0px)`}}>
                    {children}
                    {clonedChild}
                </ul>
            </div>
            <div className={styles.pagination}>
                {controls && children.map((child, i) => (
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
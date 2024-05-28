import { useState, useRef } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const Rating = ({ value = 0, readOnly = false, onChange }) => {
    const rate = useRef(value)
    const alredyIn = useRef(false)
    
    const [displayRate, setDisplayRate] = useState(rate.current)

    const swicthValue = (i) => {
        if (!readOnly) {
            if (rate.current === i + 1) {
                rate.current = 0
            } else {
                rate.current = i + 1
            }

            setDisplayRate(rate.current)
            
            onChange && onChange(rate.current)
        }
    }

    var reviewStars = []

    for (let i = 0; i < 5; i++) {
        reviewStars.push(
            i < displayRate ? (
                <div className={styles.filledStar} onClick={() => {swicthValue(i)}} onMouseEnter={() => {!alredyIn.current && setDisplayRate(i + 1), alredyIn.current=true}} onMouseLeave={() => {alredyIn.current = false}} key={i}>
                    <Icon icon="ion:star" />
                </div>
            ) : (
                <div className={styles.unfilledStar} onClick={() => {swicthValue(i)}} onMouseEnter={() => {!alredyIn.current && setDisplayRate(i + 1), alredyIn.current=true}} onMouseLeave={() => {alredyIn.current = false}} key={i}>
                    <Icon icon="ion:star-outline" />
                </div>
            )
        )
    }

    return (
        <div className={styles.container} onMouseLeave={() => {setDisplayRate(rate.current)}}>
            {reviewStars}
        </div>
    )
}

export default Rating
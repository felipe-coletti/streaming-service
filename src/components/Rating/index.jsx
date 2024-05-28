import { useState, useRef } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const Rating = ({ value = 0, readOnly = false, onChange }) => {
    const rate = useRef(value)
    const alredyIn = useRef(false)
    
    const [displayRate, setDisplayRate] = useState(rate.current)

    const swicthValue = (i) => {
        if (rate.current === i + 1) {
            rate.current = 0
        } else {
            rate.current = i + 1
        }

        setDisplayRate(rate.current)
        
        onChange && onChange(rate.current)
    }

    var ratingStars = []

    for (let i = 0; i < 5; i++) {
        let style
        let icon

        if (i < displayRate) {
            style = styles.filledStar
            icon = <Icon icon="ion:star" />
        } else {
            style = styles.unfilledStar
            icon = <Icon icon="ion:star-outline" />
        }

        ratingStars.push(
            !readOnly ? (
                <div className={style} style={{cursor: 'pointer'}} onClick={() => swicthValue(i)} onMouseEnter={() => {!alredyIn.current && setDisplayRate(i + 1), alredyIn.current=true}} onMouseLeave={() => alredyIn.current = false} key={i}>
                    {icon}
                </div>
            ) : (
                <div className={style} key={i}>
                    {icon}
                </div>
            )
        )
    }

    return (
        <div className={styles.container} onMouseLeave={() => !readOnly && setDisplayRate(rate.current)}>
            {ratingStars}
        </div>
    )
}

export default Rating
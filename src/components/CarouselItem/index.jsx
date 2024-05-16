import styles from './styles.module.css'

const CarouselItem = ({ children }) => {
    return (
        <li className={styles.carouselItem}>
            {children}
        </li>
    )
}

export default CarouselItem
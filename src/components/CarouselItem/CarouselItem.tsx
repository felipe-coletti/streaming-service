import type { CarouselItemProps } from './CarouselItem.types'
import styles from './styles.module.css'

export const CarouselItem = ({ children }: CarouselItemProps) => {
	return <li className={styles.carouselItem}>{children}</li>
}

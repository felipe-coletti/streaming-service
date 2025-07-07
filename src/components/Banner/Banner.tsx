import type { BannerProps } from './Banner.types'
import styles from './styles.module.css'

export const Banner = ({ imgSrc, href, alt }: BannerProps) => {
	return (
		<a className={styles.container} href={href}>
			<img className={styles.image} src={imgSrc} alt={alt} />
		</a>
	)
}

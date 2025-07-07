import type { TagProps } from './Tag.types'
import styles from './styles.module.css'

export const Tag = ({ href, children }: TagProps) => {
	return (
		<a className={styles.tag} href={href}>
			{children}
		</a>
	)
}

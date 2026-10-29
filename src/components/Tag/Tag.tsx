import { Link } from 'react-router-dom'
import type { TagProps } from './Tag.types'
import styles from './styles.module.css'

export const Tag = ({ href, children }: TagProps) => {
	return href == null ? (
		<span className={styles.tag}>{children}</span>
	) : (
		<Link className={styles.tag} to={href}>
			{children}
		</Link>
	)
}

import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Link className={styles.logo} to='/'>
					Name
				</Link>
			</header>
			<div className={styles.contentArea}>
				<h1 className={styles.primaryTitle}>404</h1>
				<h2 className={styles.secondaryTitle}>Page not found</h2>
				<Link className={styles.link} to='/'>
					Return to home page
				</Link>
			</div>
		</div>
	)
}

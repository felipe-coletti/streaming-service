import styles from './styles.module.css'
import { Header } from '../../components'
import { Icon } from '@iconify/react'

export const Category = () => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contentArea}>
				<div className={styles.section}>
					<div className={styles.titleArea}>
						<h1 className={styles.primaryTitle}>Category</h1>
						<button className={styles.primaryButton}>
							<Icon className={styles.icon} icon='solar:list-bold' />
							Sort by
						</button>
					</div>
					<div className={styles.grid}>
						<a className={styles.card} href='/series/undefined'>
							<img className={styles.cardImage} alt='' />
							<h2 className={styles.secondaryTitle}>Name</h2>
						</a>
						<a className={styles.card} href='/series/undefined'>
							<img className={styles.cardImage} alt='' />
							<h2 className={styles.secondaryTitle}>Name</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

import styles from './styles.module.css'
import { Header } from '../../components'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export const Category = () => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contentArea}>
				<div className={styles.section}>
					<div className={styles.titleArea}>
						<h1 className={styles.primaryTitle}>Category</h1>
						<button className={styles.primaryButton} type='button'>
							<Icon className={styles.icon} icon='solar:list-bold' />
							Sort by
						</button>
					</div>
					<div className={styles.grid}>
						<Link className={styles.card} to='/series/undefined'>
							<img className={styles.cardImage} alt='' />
							<h2 className={styles.secondaryTitle}>Name</h2>
						</Link>
						<Link className={styles.card} to='/series/undefined'>
							<img className={styles.cardImage} alt='' />
							<h2 className={styles.secondaryTitle}>Name</h2>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

import styles from './styles.module.css'
import { Button, Header, VideoPlayer } from '../../components'
import { Icon } from '@iconify/react'
import { Link, useParams } from 'react-router-dom'

export const Episode = () => {
	const { serieId } = useParams()

	const isAuthenticated = false

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contentArea}>
				<section className={styles.heroSection}>
					<VideoPlayer />
					<h1 className={styles.primaryTitle}>Serie name Season number | Episode number - Episode name</h1>
				</section>
				<section className={styles.episodesSection}>
					<h2 className={styles.secondaryTitle}>Episodes</h2>
					<div className={styles.sectionContent}>
						<Link className={styles.cardContainer} to={`/series/${serieId}/episode/1`}>
							<img className={styles.cardImage} alt='' />
							<div className={styles.cardContentArea}>
								<h3 className={styles.tertiaryTitle}>Name</h3>
							</div>
						</Link>
					</div>
				</section>
				<section className={styles.commentsSection}>
					<div className={styles.titleArea}>
						<h2 className={styles.secondaryTitle}>0 comments</h2>
						<Button variant='tertiary'>
							<Icon className={styles.icon} icon='solar:list-bold' />
							Sort by
						</Button>
					</div>
					<div className={styles.sectionContent}>
						{isAuthenticated ? (
							<div className={styles.commentContainer}>
								<img className={styles.profileImage} alt='' />
								<input className={styles.input} placeholder='Write a comment' aria-label='Comment' />
								<Button variant='primary'>Send</Button>
							</div>
						) : (
							<div className={styles.warningContainer}>
								<h2 className={styles.primaryTitle}>Account required</h2>
								<p className={styles.paragraph}>You need to be logged in to an account to do this.</p>
							</div>
						)}
						<div className={styles.commentContainer}>
							<img className={styles.profileImage} alt='' />
							<div className={styles.commentContentArea}>
								<div className={styles.titleArea}>
									<p className={styles.paragraph}>
										<span className={styles.tertiaryTitle}>Name</span>{' '}
										• 0 seconds ago
									</p>
									<Button variant='tertiary' title='Options'>
										<Icon className={styles.icon} icon='ph:dots-three-vertical-bold' />
									</Button>
								</div>
								<p className={styles.paragraph}>Comment</p>
								<div className={styles.actionsArea}>
									<Button variant='tertiary'>
										<Icon className={styles.icon} icon='tabler:heart' />0
									</Button>
									<Button variant='tertiary'>
										<Icon className={styles.icon} icon='ion:arrow-undo-outline' />
										Reply
									</Button>
								</div>
								<Button variant='tertiary'>
									View 0 replies
									<Icon icon='ep:arrow-down-bold' />
								</Button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

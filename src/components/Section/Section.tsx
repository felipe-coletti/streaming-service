import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { SectionProps } from './Section.types'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Section = ({ title, data }: SectionProps) => {
	const carousel = useRef<HTMLDivElement | null>(null)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)

	useEffect(() => {
		const element = carousel.current
		if (!element) return

		const updateScroll = () => {
			const { scrollLeft, scrollWidth, clientWidth } = element

			setCanScrollLeft(scrollLeft > 0)
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
		}

		updateScroll()

		window.addEventListener('resize', updateScroll)
		element.addEventListener('scroll', updateScroll)

		return () => {
			window.removeEventListener('resize', updateScroll)
			element.removeEventListener('scroll', updateScroll)
		}
	}, [data])

	const handleLeft = () => {
		if (carousel.current) {
			carousel.current.scrollBy({ left: -carousel.current.offsetWidth, behavior: 'smooth' })
		}
	}

	const handleRight = () => {
		if (carousel.current) {
			carousel.current.scrollBy({ left: carousel.current.offsetWidth, behavior: 'smooth' })
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.titleArea}>
				<h1 className={styles.primaryTitle}>{title}</h1>
				<Link className={styles.link} to='/categories/undefined'>
					View all
				</Link>
			</div>

			<div className={styles.carouselContainer}>
				{canScrollLeft && (
					<button className={styles.leftButton} type='button' title='Previous' aria-label='Previous' onClick={handleLeft}>
						<Icon icon='ep:arrow-left-bold' />
					</button>
				)}

				{canScrollRight && (
					<button className={styles.rightButton} type='button' title='Next' aria-label='Next' onClick={handleRight}>
						<Icon icon='ep:arrow-right-bold' />
					</button>
				)}

				<div className={styles.carousel} ref={carousel}>
					{data.map(item => (
						<Link className={styles.card} to={`/series/${item.id}`} key={item.id}>
							<img className={styles.cardImage} src={item.imgSrc} alt={item.name} />
							<h2 className={styles.secondaryTitle}>{item.name}</h2>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

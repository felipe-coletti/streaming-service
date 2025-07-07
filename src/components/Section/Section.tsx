import { useEffect, useRef, useState } from 'react'
import type { SectionProps } from './Section.types'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Section = ({ title, data }: SectionProps) => {
	const carousel = useRef<HTMLDivElement | null>(null)
	const [scrollLimit, setScrollLimit] = useState(0)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)

	const updateScroll = () => {
		if (!carousel.current) return

		const { scrollLeft, scrollWidth, clientWidth } = carousel.current

		setScrollLimit(scrollWidth - clientWidth)
		setCanScrollLeft(scrollLeft > 0)
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
	}

	useEffect(() => {
		updateScroll()
		const handleResize = () => updateScroll()

		window.addEventListener('resize', handleResize)
		carousel.current?.addEventListener('scroll', updateScroll)

		return () => {
			window.removeEventListener('resize', handleResize)
			carousel.current?.removeEventListener('scroll', updateScroll)
		}
	}, [])

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
				<a className={styles.link} href='/categories/undefined'>
					View all
				</a>
			</div>

			<div className={styles.carouselContainer}>
				{canScrollLeft && (
					<button className={styles.leftButton} title='Previous' onClick={handleLeft}>
						<Icon icon='ep:arrow-left-bold' />
					</button>
				)}

				{canScrollRight && (
					<button className={styles.rightButton} title='Next' onClick={handleRight}>
						<Icon icon='ep:arrow-right-bold' />
					</button>
				)}

				<div className={styles.carousel} ref={carousel}>
					{data.map((item, i) => (
						<a className={styles.card} href={`/series/${item.id}`} key={i}>
							<img className={styles.cardImage} src={item.imgSrc} alt={item.name} />
							<h2 className={styles.secondaryTitle}>{item.name}</h2>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

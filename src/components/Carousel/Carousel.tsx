import { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CarouselProps } from './Carousel.types'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Carousel = ({ autoPlay = false, controls = false, children }: CarouselProps) => {
	const carousel = useRef<HTMLDivElement>(null)
	const ms = useRef(500)

	const carouselChildren = Children.count(children) - 1
	const clonedChild = useMemo(() => Children.toArray(children)[0], [children])

	const [width, setWidth] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const [isPaused, setPaused] = useState(false)
	const [timeProgress, setTimeProgress] = useState(0)

	const position = currentPage * width * -1
	const autoPlayInterval = 10000

	useEffect(() => {
		const updateWidth = () => {
			if (carousel.current) {
				setWidth(carousel.current.offsetWidth)
			}
		}

		updateWidth()
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	useEffect(() => {
		if (!autoPlay) return

		const interval = setInterval(() => {
			if (!isPaused) {
				setTimeProgress(prev => {
					if (prev >= 100) {
						handleNext()
						return 0
					}
					return prev + 1
				})
			}
		}, autoPlayInterval / 100)

		return () => clearInterval(interval)
	}, [autoPlay, isPaused, currentPage])

	const handlePrevious = useCallback(() => {
		if (currentPage === 0) {
			ms.current = 0
			setCurrentPage(carouselChildren + 1)
			setTimeout(() => {
				ms.current = 500
				setCurrentPage(carouselChildren)
			}, 20)
		} else {
			ms.current = 500
			setCurrentPage(currentPage - 1)
		}
		setTimeProgress(0)
	}, [currentPage, carouselChildren])

	const handleNext = useCallback(() => {
		if (currentPage === carouselChildren) {
			ms.current = 500
			setCurrentPage(currentPage + 1)
			setTimeout(() => {
				ms.current = 0
				setCurrentPage(0)
			}, 500)
		} else {
			ms.current = 500
			setCurrentPage(currentPage + 1)
		}
		setTimeProgress(0)
	}, [currentPage, carouselChildren])

	const paginate = useCallback(
		(i: number) => {
			if (currentPage !== i) {
				setCurrentPage(i)
				setTimeProgress(0)
			}
		},
		[currentPage]
	)

	return (
		<div
			className={styles.carouselContainer}
			onMouseEnter={() => {
				if (autoPlay) setPaused(true)
			}}
			onMouseLeave={() => {
				if (autoPlay) setPaused(false)
			}}
		>
			<button className={styles.leftButton} title='Previous' onClick={handlePrevious}>
				<Icon icon='ep:arrow-left-bold' />
			</button>
			<button className={styles.rightButton} title='Next' onClick={handleNext}>
				<Icon icon='ep:arrow-right-bold' />
			</button>

			<div className={styles.carouselWrapper} ref={carousel}>
				<ul
					className={styles.carouselStage}
					style={{
						transition: `transform ${ms.current}ms ease 0ms`,
						transform: `translate3d(${position}px, 0px, 0px)`
					}}
				>
					{children}
					{clonedChild}
				</ul>
			</div>

			{controls && (
				<div className={styles.pagination}>
					{Children.map(children, (_, i) => (
						<div
							className={
								currentPage === i
									? autoPlay
										? styles.longSelectedPagePill
										: styles.selectedPagePill
									: styles.pagePill
							}
							onClick={() => paginate(i)}
							key={i}
						>
							{autoPlay && currentPage === i && (
								<div className={styles.pagePillProgress} style={{ width: timeProgress + '%' }} />
							)}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

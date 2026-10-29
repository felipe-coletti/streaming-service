import { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CarouselProps } from './Carousel.types'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Carousel = ({ autoPlay = false, controls = false, children }: CarouselProps) => {
	const carousel = useRef<HTMLDivElement>(null)
	const ms = useRef(500)
	const transitionTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

	const carouselChildren = Children.count(children) - 1
	const clonedChild = useMemo(() => Children.toArray(children)[0], [children])

	const [width, setWidth] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const [isPaused, setPaused] = useState(false)
	const [timeProgress, setTimeProgress] = useState(0)

	const position = currentPage * width * -1
	// The last stage item is a clone of the first one, used for the infinite loop effect
	const activePage = currentPage % (carouselChildren + 1)
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

	const handlePrevious = useCallback(() => {
		if (currentPage > carouselChildren) return

		if (currentPage === 0) {
			ms.current = 0
			setCurrentPage(carouselChildren + 1)
			clearTimeout(transitionTimeout.current)
			transitionTimeout.current = setTimeout(() => {
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
		if (currentPage > carouselChildren) return

		if (currentPage === carouselChildren) {
			ms.current = 500
			setCurrentPage(currentPage + 1)
			clearTimeout(transitionTimeout.current)
			transitionTimeout.current = setTimeout(() => {
				ms.current = 0
				setCurrentPage(0)
			}, 500)
		} else {
			ms.current = 500
			setCurrentPage(currentPage + 1)
		}
		setTimeProgress(0)
	}, [currentPage, carouselChildren])

	useEffect(() => {
		if (!autoPlay || isPaused) return

		const interval = setInterval(() => {
			setTimeProgress(prev => Math.min(prev + 1, 100))
		}, autoPlayInterval / 100)

		return () => clearInterval(interval)
	}, [autoPlay, isPaused])

	useEffect(() => {
		if (autoPlay && timeProgress >= 100) handleNext()
	}, [autoPlay, timeProgress, handleNext])

	useEffect(() => {
		return () => clearTimeout(transitionTimeout.current)
	}, [])

	const paginate = useCallback(
		(i: number) => {
			if (currentPage !== i) {
				ms.current = 500
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
			<button className={styles.leftButton} type='button' title='Previous' aria-label='Previous' onClick={handlePrevious}>
				<Icon icon='ep:arrow-left-bold' />
			</button>
			<button className={styles.rightButton} type='button' title='Next' aria-label='Next' onClick={handleNext}>
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
						<button
							className={
								activePage === i
									? autoPlay
										? styles.longSelectedPagePill
										: styles.selectedPagePill
									: styles.pagePill
							}
							type='button'
							aria-label={`Go to slide ${i + 1}`}
							aria-current={activePage === i}
							onClick={() => paginate(i)}
							key={i}
						>
							{autoPlay && activePage === i && (
								<div className={styles.pagePillProgress} style={{ width: timeProgress + '%' }} />
							)}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

import { useState } from 'react'
import type { RatingProps } from './Rating.types'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const MAX_RATING = 5

export const Rating = ({ value = 0, readOnly = false, onChange }: RatingProps) => {
	const [rate, setRate] = useState(value)
	const [hoverRate, setHoverRate] = useState<number | null>(null)

	const displayRate = hoverRate ?? rate

	const switchValue = (newValue: number) => {
		const nextRate = rate === newValue ? 0 : newValue

		setRate(nextRate)
		onChange?.(nextRate)
	}

	const renderIcon = (i: number) =>
		i < displayRate ? <Icon icon='ion:star' /> : <Icon icon='ion:star-outline' />

	const getStyle = (i: number) => (i < displayRate ? styles.filledStar : styles.unfilledStar)

	if (readOnly) {
		return (
			<div className={styles.container} role='img' aria-label={`Rating: ${rate} out of ${MAX_RATING}`}>
				{Array.from({ length: MAX_RATING }, (_, i) => (
					<span className={getStyle(i)} key={i}>
						{renderIcon(i)}
					</span>
				))}
			</div>
		)
	}

	return (
		<div className={styles.container} onMouseLeave={() => setHoverRate(null)}>
			{Array.from({ length: MAX_RATING }, (_, i) => (
				<button
					className={getStyle(i)}
					style={{ cursor: 'pointer' }}
					type='button'
					aria-label={`Rate ${i + 1} out of ${MAX_RATING}`}
					aria-pressed={rate === i + 1}
					onClick={() => switchValue(i + 1)}
					onMouseEnter={() => setHoverRate(i + 1)}
					key={i}
				>
					{renderIcon(i)}
				</button>
			))}
		</div>
	)
}

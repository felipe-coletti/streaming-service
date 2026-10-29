import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Loading = () => {
	return (
		<div className={styles.container} role='status' aria-label='Loading'>
			<Icon icon='line-md:loading-loop' />
		</div>
	)
}

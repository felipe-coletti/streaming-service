import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const Loading = () => {
	return (
		<a className={styles.container}>
			<Icon icon='line-md:loading-loop' />
		</a>
	)
}

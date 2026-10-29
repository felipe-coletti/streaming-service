import styles from './styles.module.css'
import { Header } from '../../components'

export const Film = () => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contentArea}></div>
		</div>
	)
}

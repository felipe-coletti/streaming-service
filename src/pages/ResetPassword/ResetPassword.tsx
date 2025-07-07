import styles from './styles.module.css'
import { Button } from '../../components/Button'

export const ResetPassword = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contentArea}>
				<h1 className={styles.primaryTitle}>Reset password</h1>
				<div className={styles.form}>
					<div className={styles.inputField}>
						<label htmlFor='email-input' className={styles.label}>
							E-mail
						</label>
						<input id='email-input' className={styles.input} type='text' required />
					</div>
					<Button type='submit'>Send</Button>
				</div>
			</div>
		</div>
	)
}

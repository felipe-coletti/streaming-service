import styles from './styles.module.css'
import { Button } from '../../components'

export const ResetPassword = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contentArea}>
				<h1 className={styles.primaryTitle}>Reset password</h1>
				<form className={styles.form} onSubmit={e => e.preventDefault()}>
					<div className={styles.inputField}>
						<label htmlFor='email-input' className={styles.label}>
							E-mail
						</label>
						<input id='email-input' className={styles.input} type='email' autoComplete='email' required />
					</div>
					<Button type='submit'>Send</Button>
				</form>
			</div>
		</div>
	)
}

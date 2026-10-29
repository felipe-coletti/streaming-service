import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '../../components'

export const SignIn = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contentArea}>
				<h1 className={styles.primaryTitle}>Sign in</h1>
				<form className={styles.form} onSubmit={e => e.preventDefault()}>
					<div className={styles.inputField}>
						<label htmlFor='email-input' className={styles.label}>
							E-mail
						</label>
						<input id='email-input' className={styles.input} type='email' autoComplete='email' required />
					</div>
					<div className={styles.inputField}>
						<label htmlFor='password-input' className={styles.label}>
							Password
						</label>
						<input id='password-input' className={styles.input} type='password' autoComplete='current-password' required />
					</div>
					<div>
						<Link className={styles.link} to='/reset-password'>
							Forgot password?
						</Link>
					</div>
					<Button type='submit'>Sign in</Button>
				</form>
				<p className={styles.paragraph}>
					Don't have an account?{' '}
					<Link className={styles.link} to='/sign-up'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

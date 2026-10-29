import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export const SignUp = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contentArea}>
				<h1 className={styles.primaryTitle}>Sign up</h1>
				<form className={styles.form} onSubmit={e => e.preventDefault()}>
					<div className={styles.inputField}>
						<label htmlFor='username-input' className={styles.label}>
							Username
						</label>
						<input id='username-input' className={styles.input} type='text' autoComplete='username' required />
					</div>
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
						<input id='password-input' className={styles.input} type='password' autoComplete='new-password' required />
					</div>
					<p className={styles.paragraph}>
						By registering, you agree to our{' '}
						<a className={styles.link} href='#'>
							Terms of Use
						</a>{' '}
						and our{' '}
						<a className={styles.link} href='#'>
							Privacy Policy
						</a>
						, including the{' '}
						<a className={styles.link} href='#'>
							Use of Cookies
						</a>
						.
					</p>
					<Button type='submit'>Sign up</Button>
				</form>
				<p className={styles.paragraph}>
					Already have an account?{' '}
					<Link className={styles.link} to='/sign-in'>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	)
}

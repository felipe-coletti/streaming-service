import { Link } from 'react-router-dom'
import type { ButtonProps } from './Button.types'
import styles from './styles.module.css'

const variantStyles = {
	primary: styles.primaryButton,
	secondary: styles.secondaryButton,
	tertiary: styles.tertiaryButton
}

export const Button = ({ type = 'button', variant = 'primary', href, title, onClick, children }: ButtonProps) => {
	const style = variantStyles[variant]

	return href == null ? (
		<button className={style} type={type} title={title} aria-label={title} onClick={onClick}>
			{children}
		</button>
	) : (
		<Link className={style} to={href} title={title} aria-label={title} onClick={onClick}>
			{children}
		</Link>
	)
}

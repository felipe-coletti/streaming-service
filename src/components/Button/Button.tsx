import type { ButtonProps } from './Button.types'
import styles from './styles.module.css'

export const Button = ({ type = 'button', variant = 'primary', href, title, children, ...rest }: ButtonProps) => {
	let style

	switch (variant) {
		case 'primary':
			style = styles.primaryButton
			break
		case 'secondary':
			style = styles.secondaryButton
			break
		case 'tertiary':
			style = styles.tertiaryButton
	}

	return href == null ? (
		<button className={style} type={type} title={title} {...rest}>
			{children}
		</button>
	) : (
		<a className={style} href={href} {...rest}>
			{children}
		</a>
	)
}

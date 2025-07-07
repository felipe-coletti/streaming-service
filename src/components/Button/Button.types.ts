export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
	variant?: 'primary' | 'secondary' | 'tertiary'
	href?: string
	title?: string
	children: React.ReactNode
}

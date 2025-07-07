import styles from './styles.module.css'
import { Button } from '../Button'
import { Icon } from '@iconify/react'

export const Header = () => {
	return (
		<div className={styles.container}>
			<a className={styles.logo} href='/'>
				Name
			</a>
			<div className={styles.actionsArea}>
				<Button variant='tertiary' title='Search'>
					<Icon icon='octicon:search-16' />
				</Button>
				<Button variant='secondary' href='/sign-in'>
					Sign in
				</Button>
				<Button href='/sign-up'>Sign up</Button>
			</div>
		</div>
	)
}

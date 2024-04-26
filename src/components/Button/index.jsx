import styles from './styles.module.css'

const Button = (href, isPrimary, children, ...rest) => {
    if (isPrimary == null) {
        isPrimary
    }

    {href == null ?
        <button className={isPrimary ? styles.primaryButton : styles.secondaryButton} {...rest}>
            {children}
        </button>
    :
        <a className={isPrimary ? styles.primaryButton : styles.secondaryButton} href={href} {...rest}>
            {children}
        </a>
    }
    
}

export default Button

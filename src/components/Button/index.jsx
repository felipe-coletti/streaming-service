import styles from './styles.module.css'

const Button = (href, isPrimary, children, ...rest) => {
    {href == null ?
        <button className={isPrimary ? styles.primaryButton : styles.secondaryButton} {...rest}>
            {children}
        </button>
    :
        <a className={isPrimary ? styles.primaryButton : styles.secondaryButton} onClick={() => window.open(href)} {...rest}>
            {children}
        </a>
    }
    
}

export default Button
import styles from './styles.module.css'

const Button = ({ variant='primary', href, children, ...rest }) => {
    let type

    switch (variant) {
        case 'primary':
            type = styles.primaryButton
            break;
        case 'secondary':
            type = styles.secondaryButton
            break;
        case 'tertiary':
            type = styles.tertiaryButton
    }

    return (href == null ?
        <button className={type} {...rest}>
            {children}
        </button>
    :
        <a className={type} href={href} {...rest}>
            {children}
        </a>
    )   
}

export default Button

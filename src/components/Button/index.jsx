import styles from './styles.module.css'

const Button = ({ variant='primary', href, children, ...rest }) => {
    let type

    if (variant == 'primary') {
        type = styles.primaryButton
    } else if (variant == 'secondary') {
        type = styles.secondaryButton
    } else if (variant == 'tertiary') {
        type = styles.tertiaryButton
    }

    return(href == null ?
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

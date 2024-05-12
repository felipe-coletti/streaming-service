import styles from './styles.module.css'

const Tag = ({ href, children }) => {
    return <a className={styles.tag} href={href}>{children}</a>
}

export default Tag
import styles from './styles.module.css'
import Button from '../Button'
import { Icon } from '@iconify/react'

const CarouselItemContent = ({ content }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.primaryTitle}>{content.id}</h1>
            <p className={styles.paragraph}>Rating</p>
            <p className={styles.paragraph}>Description</p>
            <div className={styles.actionsArea}>
                <Button>
                    <Icon className={styles.icon} icon="ph:play-fill" />
                    Watch
                </Button>
                <Button variant='secondary'>
                    <Icon className={styles.icon} icon="octicon:plus-16" />
                    Add to your list
                </Button>
            </div>
        </div>
    )
}

export default CarouselItemContent
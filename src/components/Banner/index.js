import React from "react";
import styles from "./styles.module.css";

const Banner = ({ content, href, alt }) => {
    return (
        <a className={styles.container} href={href}>
            <img className={styles.image} src={content} alt={alt} />
        </a>
    )
}

export default Banner
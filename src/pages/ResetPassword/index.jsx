import React from "react";
import styles from "./styles.module.css";

const ResetPassword = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Reset password</h1>
                <div className={styles.form}>
                    <div className={styles.inputField}>
                        <label htmlFor="email-input" className={styles.label}>E-mail</label>
                        <input id="email-input" className={styles.input} type="text" required />
                    </div>
                    <button className={styles.primaryButton} type="submit">Send</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
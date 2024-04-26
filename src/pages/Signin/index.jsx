import React from "react";
import styles from "./styles.module.css";

const Signin = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Sign in</h1>
                <div className={styles.form}>
                    <div className={styles.inputField}>
                        <label htmlFor="email-input" className={styles.label}>E-mail</label>
                        <input id="email-input" className={styles.input} type="text" required />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="password-input" className={styles.label}>Password</label>
                        <input id="password-input" className={styles.input} type="password" required />
                    </div>
                    <div>
                        <a className={styles.link} href="/reset-password">Forget password?</a>
                    </div>
                    <button className={styles.primaryButton} type="submit">Sign in</button>
                </div>
                <p className={styles.paragraph}>Don't have an account? <a className={styles.link} href="/sign-up">Sign up</a></p>
            </div>
        </div>
    )
}

export default Signin
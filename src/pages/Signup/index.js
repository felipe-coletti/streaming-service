import React from "react";
import styles from "./styles.module.css";

const Signup = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Sign up</h1>
                <div className={styles.form}>
                    <div className={styles.inputField}>
                        <label htmlFor="username-input" className={styles.label}>Username</label>
                        <input id="user-input" className={styles.input} type="text" required />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="email-input" className={styles.label}>E-mail</label>
                        <input id="email-input" className={styles.input} type="text" required />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="password-input" className={styles.label}>Password</label>
                        <input id="password-input" className={styles.input} type="password" required />
                    </div>
                    <p className={styles.paragraph}>By registering, you agree to our <a className={styles.link} href="">Terms of Use</a> and our <a className={styles.link} href="">Privacy Policy</a>, including the <a className={styles.link} href="">Use of Cookies</a>.</p>
                    <button className={styles.primaryButton} type="submit">Sign up</button>
                </div>
                <p className={styles.paragraph}>Already have an account? <a className={styles.link} href="/sign-in">Sign in</a></p>
            </div>
        </div>
    )
}

export default Signup
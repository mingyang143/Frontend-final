import styles from "./UserProfile.module.css";

function UserProfile() {
return (
    <div>
        <section>
            <h1>
                NEED TO BE PRODUCTIVE?
                <br />
                Play Producity now!
            </h1>
            <h2>Producity helps you to prevent producity</h2>
        </section>
        <section className={styles.userInfo}>
            <h3>User Information</h3>
            <div className={styles.infoItem}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>John Doe</span>
            </div>
            <div className={styles.infoItem}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>johndoe@example.com</span>
            </div>
            <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>New York, USA</span>
            </div>
        </section>
    </div>
);
}

export default UserProfile;

import styles from "../page.module.css";

export const SectionContactUs = () => {
    return(
        <>
        <div className={styles.mainAssist}>
        <div className={`${styles.contactUsSection} ${styles.section}`}>
          <h1>CONTACT US</h1>
          <hr />
          <p>
            We are here to help you achieve your real estate goals. Reach out to us today and discover the exceptional service that sets Property Advisor apart.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>
      </>
    )
}
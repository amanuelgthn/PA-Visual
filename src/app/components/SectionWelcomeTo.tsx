import styles from "../page.module.css";

export const SectionWelcomeTo = () => {
    return(
        <>
        <section className={`${styles.welcomeSection} ${styles.section}`}>
          <div className={styles.welcomeToGa}>
            <h3>Welcome to</h3>
            <hr />
            <img src="/globalproperty.png" alt="Pro Advisor Logos" />
            
            <p>
              Discover the pinnacle of luxury real estate with Global Property. We specialize in the sale of prestigious properties across Europe and internationally, offering exclusive services tailored to meet the needs of our most discerning clients. Whether you are looking to buy, sell, or invest, our dedicated team is here to provide unparalleled support and expertise.
            </p>
          </div>
          <div className={styles.experienceUnderSection}>
            <h1>Experience the Difference</h1>
            <div className={styles.explanationCards}>
              <div className={styles.card}>
                <h1>Exclusive Properties</h1>
                <p>Explore our handpicked selection of luxury homes and estates.</p>
              </div>
              <div className={styles.card}>
                <h1>Investment Advisory</h1>
                <p>Get expert advice on the best real estate investment opportunities.</p>
              </div>
              <div className={styles.card}>
                <h1>Architecture & Design</h1>
                <p>Work with our skilled architects and interior designers to create your dream space.</p>
              </div>
              <div className={styles.card}>
                <h1>Cutting-Edge Technology</h1>
                <p>Benefit from our innovative use of artificial intelligence to streamline processes and enhance your experience.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
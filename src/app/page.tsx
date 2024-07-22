import styles from "./page.module.css";

export default function Home() {
  return (
    <main id={styles.mainContainer}>
      <div className={styles.backgroundImage}>
        <img src="/TRY IT 2.png" alt=""/>
      </div>
      <div className={styles.mainAssist}>
        <main className={styles.centerLogo}>
          <div className={styles.insideCenterLogo}>
            <img src="/Group.png" alt="Logo" />
            <h1>EXPERIENCE LUXURY AND REDEFINE LIVING</h1>
            <button>Search Properties</button>
          </div>
        </main>

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
        
      </div>
      <section className={`${styles.sectionExploreMore} ${styles.section}`}>
        <div className={styles.textExploreMore}>
          <h1>Explore Our</h1>
          <h1>Featured Properties</h1>
        </div>
        <hr />
        <p>
          Experience the finest in luxury living. Browse our exclusive listings and find your dream home today.
        </p>
        <button>EXPLORE NOW</button>
      </section>


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
    </main>
  );
}

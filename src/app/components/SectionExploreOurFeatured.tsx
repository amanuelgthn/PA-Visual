import styles from "../page.module.css";

export const SectionExploreOurFeatured = () => {
    return(
        <>
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
      </>
    )
}
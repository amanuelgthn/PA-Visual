import { SectionContactUs } from "./components/SectionContactUs";
import { SectionExploreOurFeatured } from "./components/SectionExploreOurFeatured";
import { SectionWelcomeTo } from "./components/SectionWelcomeTo";
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

        
      <SectionWelcomeTo/>      
      </div>
      <SectionExploreOurFeatured />
      <SectionContactUs />
    </main>
  );
}

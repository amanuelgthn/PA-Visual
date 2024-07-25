'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../admin/adminStyles/sidebar.module.css'; // Import CSS module

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
     <Link href="/admin" passHref>
                <div className={styles.logo}>
                    <Image src="/homelogo.svg" alt="logo" width={90} height={38} />
                </div>
            </Link>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}><Link href="/admin" className={styles.navLink}>Dashboard</Link></li>
          <li className={styles.navItem}><Link href="/admin/users" className={styles.navLink}>Users Management</Link></li>
          <li className={styles.navItem}><Link href="/admin/properties" className={styles.navLink}>Properties Management</Link></li>
          <li className={styles.navItem}><Link href="/admin/requests" className={styles.navLink}>Moderator Requests</Link></li>
          <li className={styles.navItem}><Link href="/admin/statistics" className={styles.navLink}>Statistics</Link></li>
          <li className={styles.navItem}><Link href="/admin/settings" className={styles.navLink}>Settings</Link></li>
        </ul>
        <button type='submit' className={styles.sidebarButton}><Link href="/admin/logout" className={styles.sidebarButtonLink}>Logout</Link></button>
      </nav>
    </div>
  );
};

export default Sidebar;

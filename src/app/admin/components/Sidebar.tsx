'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../adminStyles/sidebar.module.css'
import { Divider } from 'antd'

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <Link href='/admin' passHref>
          <div className={styles.logo}>
            <Image src='logo/logo.svg' alt='logo' width={90} height={38} />
          </div>
        </Link>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href='/admin' className={styles.navLink}>
              <img
                src='/icons/dashboard.png'
                alt='dashboard icon'
                width={16}
                height={16}
              />
              Dashboard
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin/users' className={styles.navLink}>
              <img
                src='/icons/user-managment.png'
                alt='dashboard icon'
                width={16}
                height={16}
              />
              Users Management
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin/properties' className={styles.navLink}>
              <img
                src='/icons/property-managment.png'
                alt='dashboard icon'
                width={16}
                height={16}
              />
              Properties Management
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin/statistics' className={styles.navLink}>
              <img
                src='/icons/statistics.png'
                alt='dashboard icon'
                width={16}
                height={16}
              />
              Statistics
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin/requests' className={styles.navLink}>
              <img
                src='/icons/moderator.png'
                alt='dashboard icon'
                width={16}
                height={16}
              />
              Moderator Requests
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Divider
          style={{
            backgroundColor: 'var(--Sec-client-Color, rgba(240, 240, 240, 1))',
          }}
        />
        <div className={styles.navItem}>
          <Link href='/admin/settings' className={styles.navLink}>
            <img
              src='/icons/setting.png'
              alt='dashboard icon'
              width={16}
              height={16}
            />
            Settings
          </Link>
        </div>
        <Link href='/admin/logout' className={styles.navLink}>
          <img
            src='/icons/logout.png'
            alt='dashboard icon'
            width={16}
            height={16}
          />
          Logout
        </Link>
        <div>
          <img
            style={{
              borderRadius: '50%',
              cursor: 'pointer',
              border: '1px solid #f0f0f0',
              padding: '1px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944
          '
            alt='profile picture'
            width={50}
            height={50}
          />
          <h3>Test Test</h3>
          <p>Email:test@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

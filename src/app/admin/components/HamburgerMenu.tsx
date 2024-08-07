'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../adminStyles/hamburgerMenu.module.css';
import { FaTimes } from 'react-icons/fa'; // Using react-icons for the close icon
import Image from 'next/image';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.closeButton} onClick={toggleMenu}>
          <Link href="/admin" passHref>
            <Image
              src="/homelogo.svg"
              alt="logo"
              width={61}
              height={26}
              className={styles.logo}
            />
          </Link>
          <FaTimes />
        </div>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/admin" className={styles.navLink} onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/admin/users"
              className={styles.navLink}
              onClick={toggleMenu}
            >
              Users Management
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/admin/properties"
              className={styles.navLink}
              onClick={toggleMenu}
            >
              Properties Management
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/admin/requests"
              className={styles.navLink}
              onClick={toggleMenu}
            >
              Moderator Requests
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/admin/statistics"
              className={styles.navLink}
              onClick={toggleMenu}
            >
              Statistics
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/admin/settings"
              className={styles.navLink}
              onClick={toggleMenu}
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className={styles.logoutBtn}>
          <Link href="/admin/logout" className={styles.menuButtonLink}>
            <button type="submit" className={styles.menuButton}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

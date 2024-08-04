"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
        toggleBodyOverflow(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
        toggleBodyOverflow(false);
    };

    const toggleBodyOverflow = (shouldOverflow) => {
        if (shouldOverflow) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoNavbar}>
                <Link href='/'><img src="/homelogo.png" alt="logo" /></Link>
            </div>
            <div className={`${styles.linksNavbarCenter} ${isActive ? styles.active : ''}`}>
                <ul>
                    {['Home', 'About Us', 'Properties', 'Service', 'Innovation', 'Clients', 'Blog', 'Contact', 'Social Media'].map((item) => (
                        <li key={item} onClick={closeMenu}>
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className={styles.link}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                <div className={styles.loginContainerInside}>
                    <button>Login</button>
                    <span></span>
                    <h1>/</h1>
                    <span></span>
                    <button>Sign up</button>
                </div>
                <ul>
                    {['Home', 'About Us', 'Properties', 'Service', 'Innovation', 'Clients', 'Blog', 'Contact', 'Social Media'].map((item) => (
                        <li key={item} onClick={closeMenu}>
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.applyHamburger}>
                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
                    <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
                    <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
                    <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
                </div>
            </div>

            <div className={styles.loginContainer}>
                <button>Login</button>
                <h1>/</h1>
                <button>Sign up</button>
            </div>
        </nav>
    );
};

export default NavBar;
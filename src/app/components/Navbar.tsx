"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        toggleBodyOverflow(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
        toggleBodyOverflow(false);
    };

    const toggleBodyOverflow = (shouldOverflow: boolean) => {
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

    const NavBarLink = ({name, URL}: {name:string, URL?: string}) => {
        return <li><Link href={URL ? URL : name}>{name}</Link></li>
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoNavbar}>
                <Link href='/'><img src="/homelogo.png" alt="logo" /></Link>
            </div>
            <div className={`${styles.linksNavbarCenter} ${isActive ? styles.active : ''}`}>
                <ul>
                    <NavBarLink name="Home" URL="/"/>
                    <NavBarLink name="About" />
                    <NavBarLink name="Properties" />
                    <NavBarLink name="Service" />
                    <NavBarLink name="Innovation" />
                    <NavBarLink name="Clients" />
                    <NavBarLink name="Blog" />
                    <NavBarLink name="Contact" />
                    <NavBarLink name="Social Media" URL='Social'/>
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
                    <NavBarLink name="Home" />
                    <NavBarLink name="About" />
                    <NavBarLink name="Properties" />
                    <NavBarLink name="Service" />
                    <NavBarLink name="Innovation" />
                    <NavBarLink name="Clients" />
                    <NavBarLink name="Blog" />
                    <NavBarLink name="Contact" />
                    <NavBarLink name="Social Media" URL='Social'/>
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
            <div className={styles.loginContainer}>
                <Link href="Login" style={{color:"#C98E59", fontFamily: "DM Sans, sans-serif", textDecoration: "none", fontSize: "20px"}}>Login</Link>
                <h1 style={{userSelect: "none"}}>&nbsp;/&nbsp;</h1>
                <Link href="Signup" style={{color:"#C98E59", fontFamily: "DM Sans, sans-serif", textDecoration: "none", fontSize: "20px"}}>Sign up</Link>
            </div>
            </div>
        </nav>
    );
};
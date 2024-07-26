import React from 'react';
import classNames from 'classnames';
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer id={styles.Main_Footer}>
            <div className={styles.Footer_Wrapper}>
                <div className={styles.SectionTop_forLogos}>
                    <div className={styles.Top_container}>
                        <div className={styles.Helper}>
                            <div className={styles.Solo_Logo}>
                                <img src="/Group (1).png" alt=""/>
                            </div>
                        </div>
                        <div className={styles.Logo_Container}>
                            <div className={styles.Logo_wrapper}>
                                <div className={styles.logo}>
                                    <img src="/global.png" alt=""/>
                                </div>
                                <div className={styles.logo}>
                                    <img src="/founding.png" alt=""/>
                                </div>
                                <div className={styles.logo}>
                                    <img src="/newtech.png" alt=""/>
                                </div>
                                <div className={styles.logo}>
                                    <img src="/aitouch.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.SectionDown_Links}>
                    <div className={styles.Links_Container}>
                        <div className={classNames(styles.Product_Footer, styles.Links_Footer, styles.Only_Links)}>
                            <ul>
                                <li className={styles.Title_List}>Product</li>
                                <li>
                                    <a href="">
                                        <h1>Employee database</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Payroll</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Absences</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Time tracking</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Shift planner</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Recruiting</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(styles.Information_Footer, styles.Links_Footer, styles.Only_Links)}>
                            <ul>
                                <li className={styles.Title_List}>Information</li>
                                <li>
                                    <a href="">
                                        <h1>FAQ</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Blog</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Support</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(styles.Company_Footer, styles.Links_Footer, styles.Only_Links)}>
                            <ul>
                                <li className={styles.Title_List}>Company</li>
                                <li>
                                    <a href="">
                                        <h1>About us</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Careers</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Contact us</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h1>Lift Media</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(styles.SubscribeToNews_Footer, styles.Links_Footer)}>
                            <div className={styles.InsideContainer_Subscribe}>
                                <h1>Subscribe</h1>
                                <div className={styles.Input_Subscribe}>
                                    <input type="text" placeholder="Email address" name="" id=""/>
                                    <button><img src="/arrow.png" alt=""/></button>
                                </div>
                                <p>
                                    Stay connected with us on social media for the latest updates and inspirations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className={styles.Last_Section}>
                    <div className={classNames(styles.Last_logo, styles.Last_Container)}>
                        <img src="/Global Property Subtitle 1.png" alt="" />
                    </div>
                    <div className={classNames(styles.Last_Links, styles.Last_Container)}>
                        <ul>
                            <li>
                                <a href="">Terms</a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Cookies</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames(styles.Socials, styles.Last_Container)}>
                        <ul>
                            <li>
                                <a href="">
                                    <img src="linkedin.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="Facebook.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="Twitter.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

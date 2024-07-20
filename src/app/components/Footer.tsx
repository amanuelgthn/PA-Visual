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
                                    <a href="">Employee database</a>
                                </li>
                                <li>
                                    <a href="">Payroll</a>
                                </li>
                                <li>
                                    <a href="">Absences</a>
                                </li>
                                <li>
                                    <a href="">Time tracking</a>
                                </li>
                                <li>
                                    <a href="">Shift planner</a>
                                </li>
                                <li>
                                    <a href="">Recruiting</a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(styles.Information_Footer, styles.Links_Footer, styles.Only_Links)}>
                            <ul>
                                <li className={styles.Title_List}>Information</li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(styles.Company_Footer, styles.Links_Footer, styles.Only_Links)}>
                            <ul>
                                <li className={styles.Title_List}>Company</li>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                                <li>
                                    <a href="">Lift Media</a>
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

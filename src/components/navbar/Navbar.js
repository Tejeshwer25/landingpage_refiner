import {useState} from 'react';

import styles from './Navbar.module.css';

import arrowHeadIcon from '../../assets/arrowHead.svg';
import hamburgerIcon from '../../assets/hamburgerIcon.svg';
import logo from '../../assets/Logo.svg';
import closeIcon from '../../assets/closeIcon.svg';


const Navbar = ({setLoginOpen, userDetails}) => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__brand}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.navbar__links}>
                <ul>
                    <li>Contact Us</li>
                    <li>Marketplace</li>
                    <li>Jobs</li>
                </ul>
            </div>


            <div className={styles.navbar__buttons}>
                <button className={styles.loginBtn} onClick={() => setLoginOpen(true)}>Login</button>
                <button className={styles.registerBtn}>Register <img src={arrowHeadIcon} alt="" /></button>
            </div>
            

            <div className={styles.navbar__hamburgerMenu}>
                <img src={hamburgerIcon} alt="" onClick={() => setNavbarOpen(true)}/>

                <div style={{display: `${navbarOpen ? '' : 'none'}`}}>
                    <img src={closeIcon} alt="" onClick={() => setNavbarOpen(false)}/>
                    <ul>
                        <li>Marketplace </li>
                        <li onClick={() => setLoginOpen(true)}>Login</li> 
                        <li>Register</li>
                    </ul>
                </div>
            </div>

            <div></div>
        </nav>
    )
}

export default Navbar;
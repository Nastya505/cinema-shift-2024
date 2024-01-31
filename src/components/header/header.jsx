import React from 'react';
import styles from './header.module.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';
import { RxExit } from "react-icons/rx";


const Header = () => {
    return (
        <div className="border-bottom">
            <div className="container">
                <div className={styles.header}>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <div className={styles.nav}>
                        <Link className={styles.link} to="profile">Профиль</Link>
                        <Link className={styles.link} to="tickets">Билеты</Link>
                    </div>
                    {/* <Link to="profile"><span><RxExit /> Выход</span></Link> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
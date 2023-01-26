import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={'./../assets/sushiLogo.png'} className={styles.logo} alt="logo" />
        <nav className={styles.navigation}>
            <Link className={styles.links} to='/'>Home</Link>
            <Link className={styles.links} to='/categories'>Categories</Link>
            <Link className={styles.links} to='/about'>About</Link>
        </nav>
    </header>
  )
}

export default Header
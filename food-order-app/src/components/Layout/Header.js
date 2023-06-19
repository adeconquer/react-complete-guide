import React from 'react'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>    
        
    )
};

export default Header
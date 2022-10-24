import React from 'react'
import { Link } from 'react-router-dom'
import NavList from './NavList'

import arrow from '../../assets/icons/arrow.svg'
import styles from './Navigation.module.scss'
import NavLang from './NavLang'




const Navigation = ({lang, list}) => {
    return (
        <div className={styles['nav']}>
            <Link to="/" className={styles['nav__logo']}>
                LOGO
            </Link>
            <NavList list={list} />
            <div className={styles["nav__content"]}>
                <NavLang lang={lang} />
                <div className={styles["nav__content-project"]}>
                    <a href="" className={styles["nav__content-project-link"]}>
                        Начать проект
                        <img src={arrow} alt="start project arrow" />
                    </a>
                </div>
                <div className={styles['nav__burger']}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navigation
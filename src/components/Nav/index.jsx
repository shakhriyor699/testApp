import React from 'react'
import NavList from './NavList'

import arrow from '../../assets/icons/arrow.svg'
import styles from './Navigation.module.scss'
import NavLang from './NavLang'




const Navigation = ({lang, list}) => {
    return (
        <div className={styles['nav']}>
            <a href="" className={styles['nav__logo']}>
                LOGO
            </a>
            <NavList list={list} />
            <div className={styles["nav__content"]}>
                <NavLang lang={lang} />
                <div className={styles["nav__content-project"]}>
                    <a href="" className={styles["nav__content-project-link"]}>
                        Начать проект
                        <img src={arrow} alt="start project arrow" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
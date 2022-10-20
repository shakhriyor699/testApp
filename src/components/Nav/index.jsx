import React from 'react'
import NavList from './NavList'

import styles from './Navigation.module.scss'


let list = ['Проекты', 'О компании', 'Контакты']

const Navigation = () => {
    return (
        <div className={styles['nav']}>
            <a href="" className={styles['nav__logo']}>
                LOGO
            </a>
            <NavList list={list}/>
        </div>
    )
}

export default Navigation
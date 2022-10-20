import classNames from 'classnames'
import React, { useState } from 'react'


import styles from './NavLang.module.scss'

const NavLang = ({ lang }) => {
    const [active, setActive] = useState(0)

    const addActive = (e, i) => {
        e.preventDefault()
        setActive(i)
    }
    return (
        <div className={styles['nav__lang']}>
            {lang.map((item, index) => (
                <a onClick={(e) => addActive(e, index)} key={index} href="" className={classNames(styles['nav__lang-link'], {
                    [styles['active']]: active === index
                })}>{item}</a>
            ))}
        </div>
    )
}

export default NavLang
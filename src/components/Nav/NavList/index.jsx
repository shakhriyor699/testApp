import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './NavList.module.scss'

const NavList = ({ list }) => {
    const [active, setActive] = useState(0)


    const addActive = (e, i) => {
        e.preventDefault()
        setActive(i)
    }
    return (
        <ul className={styles['nav__list']}>
            {list.map((item, index) => (
                <li key={index} className={styles['nav__list-item']}>
                    <a onClick={(e) => addActive(e, index)}
                        href=""
                        className={classNames(styles['nav__list-link'], {
                            [styles['active']]: active === index
                        })}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavList
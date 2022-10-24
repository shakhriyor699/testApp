import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './NavList.module.scss'

const NavList = ({ list }) => {
    const [active, setActive] = useState(2)


    const addActive = (i) => {
        setActive(i)
    }
    return (
        <>
            <ul className={styles['nav__list']}>
                {list.map((item, index) => (
                    <li key={index} className={styles['nav__list-item']}>
                        <Link onClick={() => addActive(index)}
                            to={index === list.length - 1 ? "/contacts" : '/'}
                            className={classNames(styles['nav__list-link'], {
                                [styles['active']]: active === index
                            })}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavList
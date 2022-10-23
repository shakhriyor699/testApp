import React from 'react'
import styles from './Footer.module.scss'
import download from '../../assets/icons/download.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsApp from '../../assets/icons/whats-app.svg'

const Footer = ({ list }) => {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer__container']}>
                <div className={styles['footer__content']}>
                    <a className={styles['footer__content__logo']}>LOGO</a>
                    <ul className={styles['footer__list']}>
                        <h3 className={styles['footer__title']}>Услуги</h3>
                        <li className={styles['footer__list__item']}>Support and development</li>
                        <li className={styles['footer__list__item']}>UI/UX and product design</li>
                        <li className={styles['footer__list__item']}>Progressive Web Applications (PWA)</li>
                    </ul>
                    <ul className={styles['footer__list']}>
                        <h3 className={styles['footer__title']}>Компания</h3>
                        {list.map((item, index) => (
                            <li key={index} className={styles['footer__list__item']}>
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles["footer__contacts"]}>
                        <ul className={styles['footer__list']}>
                            <h3 className={styles['footer__title']}>Контакты</h3>
                            <li className={styles['footer__list__item']}><a href=''>Скачать презентацию
                                <img src={download} alt="" />
                            </a></li>
                            <li className={styles['footer__list__item']}><a href=''>+7 (499) 999-99-99</a></li>
                            <li className={styles['footer__list__item']}>
                                <a href=''>info@site.com </a>
                            </li>
                        </ul>
                        <div className={styles["footer__icons"]}>
                            <a href=""> <img src={telegram} alt='telegram' /></a>
                            <a href=""><img src={whatsApp} alt="whats-app" /></a>
                        </div>
                    </div>
                </div>
                <div className={styles["footer__bottom"]}>
                    <p className={styles["footer__bottom__text"]}>© Company 2022. All rights reserved.</p>
                    <p className={styles["footer__bottom__text"]}>Политика конфиденциальночти</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
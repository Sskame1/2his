import React from 'react'
import style from '@/style/page.module.scss'

export default function Footer() {
  return (
    <div className={style.Footer}>
        <div className={style.content}>
            <div className={style.company}>
                <div className={style.NameCompany}>2his</div>
                <div className={style.desc}>Купите поездку за минуты, получите бонусы.</div>
            </div>
            <div className={style.navCol}>
                <div className={style.nav}>
                    <div className={style.title}>Стартап</div>
                    <a href="" className={style.button}>О нас</a>
                    <a href="" className={style.button}>Мобильная версия</a>
                </div>
                <div className={style.nav}>
                    <div className={style.title}>Контакты</div>
                    <a href="" className={style.button}>помощь/FAQ</a>
                    <a href="" className={style.button}>Социальные Сети</a>
                </div>
            </div>
        </div>
    </div>
  )
}

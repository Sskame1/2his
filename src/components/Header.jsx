import React from 'react'
import Logo from '@/icons/Logo-Olykminsk.png'
import Image from 'next/image'
import style from '@/style/page.module.scss'

export default function Header() {
  return (
    <nav className={style.Nav}>
        <a href="">
            <Image src={Logo} />
        </a>
        <div>
            <a href="">Все Сервисы</a>
            <a href="">Карта</a>
            <a href="">Вход</a>
            <a className={style.register} href="">Регистрация</a>
        </div>
    </nav>
  )
}

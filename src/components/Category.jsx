import Image from 'next/image'
import React from 'react'
import style from '@/style/page.module.scss'

import weather from '@/icons/weather.png'
import airline from '@/icons/airline.png'
import burger from '@/icons/burger.png'
import micro from '@/icons/micro.png'

export default function Category() {
  return (
    <div className={style.Category}>
        <div className={style.category}>категория</div>
        <div className={style.best_category}>Наши лучшие Сервисы </div>
        <div className={style.Category__card}>
        <div className={style.card}></div>
            <div className={style.card}>
                <Image src={weather} className={style.image} />
                <div className={style.title}>Точная погода</div>
                <div className={style.desc}>всегда точная информация по погоде!</div>
            </div>
            <div className={style.card}>
                <Image src={airline} className={style.image} />
                <div className={style.title}>Лучшие пилоты</div>
                <div className={style.desc}>Ни когда не переживайте на счёт перелётов!</div>
            </div>
            <div className={style.card}>
                <Image src={micro} className={style.image} />
                <div className={style.title}>Постоянные ивенты</div>
                <div className={style.desc}>В городе часто проводятся конкурсы и ивенты!</div>
            </div>
            <div className={style.card}>
                <Image src={burger} className={style.image} />
                <div className={style.title}>Свежые продукты</div>
                <div className={style.desc}>Продукты всегда свежие и очень вкусные</div>
            </div>
            <div className={style.card}></div>
        </div>
        
    </div>
  )
}

import React from 'react'
import style from '@/style/page.module.scss'
import Image from 'next/image'

import ava from '@/img/ava.png'

export default function Feedback() {
  return (
    <div className={style.Feedback}>
        <div className={style.desc}>
            <p className={style.Subheading}>отзывы</p>
            <p className={style.Heading}>Люди говорят о нас</p>
        </div>
        <div className={style.content}>
        <Image src={ava} className={style.image} />
            <div className={style.block}>
                <div className={style.desc}>Я посетил Олёкминск во время своей поездки по Сибири и остался довольным своим выбором. 
                Город расположен в красивой местности, окруженной горами и лесами, что создает неповторимую атмосферу. 
                Я смог насладиться прекрасными видами на природу и сделать множество фотографий.
                </div>
                <div className={style.name}>Федотов Константин</div>
                <div className={style.info}>Вавилон, CEO of Pulsar</div>
            </div>
        </div>
    </div>
  )
}

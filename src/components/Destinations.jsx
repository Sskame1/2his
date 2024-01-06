import React from 'react'
import style from '@/style/page.module.scss'
import Image from 'next/image'

import img from '@/img/Diamond.png'

export default function Destinations() {
  return (
    <div className={style.Destinations}>
        <div className={style.category}>места</div>
        <div className={style.Heading}>Лучшие места Олёкминска</div>
        <div className={style.destination}>
            <div className={style.card}>
                <Image src={img}/>
                <div className={style.block}></div>
                <p>DIAMOND Лучшие кафе и ресторан в городе (а также DNS)</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import style from '@/style/page.module.scss'

export default function Welcome__content() {
  return (
    <>
        <div className={style.Welcome__content}>
            <div className={style.tagline}>Лучшие направления по всему Олёкминску</div>
            <div className={style.heading}>Путешествуйте, наслаждайтесь, живите новой и полной жизнью</div>
            <div className={style.desc}>Олёкминск - это маленький город в Республике Саха (Якутия), расположенный на берегу реки Лены. 
            Здесь можно насладиться красивыми пейзажами природы, посетить музеи и выставки, поучаствовать в экскурсиях по окрестностям и познакомиться с 
            культурой и обычаями народов Севера. 
            </div>
            <a href="" className={style.button}>Найти больше</a>
        </div>
    </>
  )
}

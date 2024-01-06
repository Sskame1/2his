import Image from 'next/image'
import styles from '../style/page.module.scss'

import decore from '@/img/Decore.png'

import Welcome from '@/components/Welcome'
import Category from '@/components/Category'
import Destinations from '@/components/Destinations'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={decore} className={styles.Decore}/>
      <Welcome />
      <Category />
      <Destinations />
      <Feedback />
      <Footer />
    </main>
  )
}

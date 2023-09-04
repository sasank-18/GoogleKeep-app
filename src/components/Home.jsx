import React from 'react'
import Hero from './Hero'
import styles from '../style'
import Stats from './Stats'
import { Billing, Business } from '.'
const Home = () => {
  return (
    <>

      <Hero />
      <Stats />
      <div className={`${styles.paddingX} `}>
        <div className={`${styles.boxwidth}`}>
          <Business />
          <Billing/>
        </div>
      </div>
    </>
  )
}

export default Home
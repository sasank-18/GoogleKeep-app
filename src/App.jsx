import React from 'react'
import styles from './style'
import { Route, Routes } from 'react-router-dom';
import  { Navbar, Billing, CardDeal, Testimonials, Business, Clients, CTA, Stats, Footer, Hero,} from './components'
import Home from './components/Home';
const App = () => {
  return (
    <>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxwidth}`}>
           <Navbar/>
         </div>
      </div>
    
    <Routes>
    <Route  path="/" element={<Home/>} />
    </Routes>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
         <Stats/>
         <Business/>
         <Billing/>
         <CardDeal/>
         <Testimonials/>
         <Clients/>
         <CTA/>
         <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
// hello darling 
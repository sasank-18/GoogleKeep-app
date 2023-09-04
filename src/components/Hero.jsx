import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => (

  <section id='home' className={` relative flex sm:flex-row  flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 sm:w-[60%]`}>

      <div className='flex  flex-row justify-center items-center rounded-md py-[6px] px-4 bg-discount-gradient'>
        <img src={discount} alt='discount'
          className='w-[32] h-[32px] pr-2' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>20% </span>
          {' '} DISCOUNT FOR {" "}
          <span className='text-white'>1 MONTH </span>
          ACCOUNT
        </p>
      </div>
      <div className='flex  flex-row justify-center items-center w-full'>
        <h1 className='  flex-1 font-poppins font-semibold xs:text-[72px] text-[52px] text-white'>
          The Next <br className='sm:block hidden' />{" "}
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        <div className='ss:flex  hidden  md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className='  flex font-poppins font-semibold xs:text-[72px] text-[52px] text-white'>
        <span className='text-gradient'>Payment Method</span> {" "}
      </h1>
      <p className={` ${styles.paragraph} mt-5 max-w-[430px]`}>Our team of experts uses a methodology to indentify the ccredit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[60%] h-[60%] rounded-full top-0 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] top-0 pink__gradient' />
      <div className='absolute z-[3] w-[50%] h-[50%] bottom-20 blue__gradient' />

    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>

)

export default Hero;
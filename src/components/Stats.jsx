import React from 'react'
import { stats } from '../constants'
import styles from '../style';
const Stats = () => (


        <section className={`${styles.flexCenter} flex-row justify-around  flex-wrap mb-6 sm:mb-20`}>

          {stats.map((stat)=>(
         <div key={stat.id} className='text-white flex  flex-col justify-center items-center m-3'>
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
               <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase  '>{stat.title}</p>
          </div>
           
          ))} 

         </section>
     
  
)

export default Stats ;
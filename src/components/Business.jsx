import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
const FeatureCard=(props)=>(
 <div id={props.id} className={`  feature-card flex flex-row p-6 rounded-[20px] ${props.idx!==features.length-1 ? 'mb-6' :'mb-0'}  `}>
    <img src={props.icon} className='rounded-md p-1 bg-dimBlue w-[40px] h-[40px] object-contain mr-4'/>
    <div>
    <h3 className='text-white font-bold'>{props.title}</h3>
    <p className='text-white'>{props.content}</p>
    </div>
 </div>
)


const Business = () => {
  return (
  
    <section id='features' className={`${layout.section}   `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>You do the Business,
          <br className='sm:block hidden' />
          we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          With the right credit card, you can improve your
          financial life by building credit, earning rewards and saving money.
          But with hundreds of credit cards on the market.</p>
        <Button />
      </div>


      <div className={` flex md:ml-10 ml-0 md:mt-0 mt-10 flex-col  justify-around `}>
       {features.map((feature,index)=>(
        <FeatureCard key={feature.id} idx= {index} {...feature}/>
       ))} 
      </div>

    </section>
   
  )
}

export default Business;
import React from 'react'
import {Card} from "flowbite-react"
import pic10 from '../Assets/Primevideo.png'
import pic20 from '../Assets/audible.png'
import pic30 from '../Assets/aws.png'
import spiderman from '../Assets/arrow_right_alt_16dp_D3E0E3_FILL0_wght400_GRAD0_opsz20.png'

import './Card.css'
function card() {
  return (
    <div id='car'>
      <h2 className='text-4xl leading-10 text-grey-800 font-semibold mb-2 text-center  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>Manage Your Company<br/>On Web With Us.</h2>
      <p className='text-grey-800 font-semibold mb-2 text-center  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>What We Provide To Our Client.</p>
      <div className='flex flex-wrap justify-around'>
        <Card className='max-w-60  max-h-85 md:w-80 my-20 card90'  horizontal>
          <img src={pic10} alt='image12' className='w-80  md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the Kindle App:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          Your Kindle e-reader isn’t the only way to read eBooks. If you forget your Kindle at home, don’t fret—you can read all of the same content on the Kindle app.
          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        <Card className='max-w-60 md:w-80 my-20 card90' horizontal>
          <img src={pic20} alt='image12' className='w-80  md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the AmazonMusic app:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          The Unlimited tier is available to everyone, Prime members and non-members alike. It gives you access to Amazon’s complete catalog of 100 million songs and podcasts, all ad-free. 
          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        <Card className='max-w-60 md:w-80 my-20 card90' horizontal>
          <img src={pic30} alt='image12' className='w-80  md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the AWS:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          Since launching in 2006, Amazon Web Services has been providing world-leading cloud technologies that help any organization and any individual build solutions to transform industries, communities, and lives for the better.

          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        </div>

      </div>
      // <div  className='home5'>
      //   <div className='section border-2 border-solid border-red-500'>

      //   </div>
      // </div>




  )
}

export default card;

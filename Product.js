import React from 'react'
import pic50 from '../Assets/kindle4.png'
import pic60 from '../Assets/music.png'
import pic70 from '../Assets/echo5.png'
import {Card} from "flowbite-react"
import spiderman from '../Assets/arrow_right_alt_16dp_D3E0E3_FILL0_wght400_GRAD0_opsz20.png'
import './Product.css'
function Product() {
  return (
     <section id='product'>
      <h2 className='text-4xl text-grey-800 font-semibold mb-2 text-center  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>Products Section</h2>
    <p className='text-grey-800 font-semibold mb-2 text-center  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>Products Of The Amazon Company</p>
      <div className='flex flex-wrap justify-around'>
        <Card className='max-w-60 md:w-80 my-20 card90' horizontal>
          <img src={pic50} alt='image12' className='w-80  md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the Kindle App:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          Your Kindle e-reader isn’t the only way to read eBooks. If you forget your Kindle at home, don’t fret—you can read all of the same content on the Kindle app for your iPhone or Android device, iPad or Fire tablet, and even your PC or Mac. In fact, Amazon offers Kindle apps for pretty much every device you own—meaning, you don’t even need to own a Kindle to read that novel you saw on the New York Times bestseller list.
          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        
        <Card className='max-w-60 md:w-80 my-20 card90'  horizontal>
          <img src={pic60} alt='image12' className='w-80 h-72 md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the AmazonMusic app:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          The Unlimited tier is available to everyone, Prime members and non-members alike. It gives you access to Amazon’s complete catalog of 100 million songs and podcasts, all ad-free.   With this plan, you can pick and play any song, and you have unlimited skips when listening to stations. 
          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        <Card className='max-w-60 md:w-80 my-20 card90' horizontal>
          <img src={pic70} alt='image12' className='w-80  md:ml-0'/>
          <h5 className='text-2xl font-bold tracking-tight  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]  dark:text-white'>
            About the AmazonEcho:-
          </h5>
          <p className='font-normal text-grey-700 dark:text-gray-400'>
          Amazon Echo, often shortened to Echo, is an American brand of smart speakers developed by Amazon. Echo devices connect to the voice-controlled intelligent personal assistant service Alexa, which will respond when a user says "Alexa". Users may change this wake word to "Amazon", "Echo", "Computer", and other options.
          </p>
          <div className='btndiv'>
          <button className='btnhver'>Click here<img src={spiderman} /></button>
          </div>
        </Card>
        
      </div>
     </section>
   
  )
}

export default Product

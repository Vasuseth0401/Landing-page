import React from 'react'
import pic45 from '../Assets/amazon.png'
import './Service.css'

function Service() {
  return (
    // <div className='Home5 '>
    // <div className='s '>
    //   <div className='content8 ' >
    //     <h2 className='heading6 '>
    //       About us
    //     </h2>
    //     <p className='descofhead  '>
    //     Amazon is one of the most influential cultural driving forces with socio-economic components attracting all age groups. Yes, we are discussing Amazon.com, Inc. Scholars and market researchers have referred to Amazon as the most precious brand. <br/>It is also ranked as one of the top five American information technology firms.<br/> Jeff Bezos launched it on July 5, 1994, in Washington, United States; it is based in Seattle and services people all over the world. 
    //     </p>
    //     <button className=''>Click me</button>
    //   </div>
    //   <div className='imagesec'>
    //     <img src={pic45} className=' border-2 border-solid border-blue-400'/>
    //   </div>
    // </div>
    // </div>
    <section className='header bg-gray-400'>
             {/* <div className='head'>
              {/* <h1>About us</h1> */}
             {/* </div> */} 
             <div className='container'>
              <div className='descontent4 text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>
              <h1>About us</h1>
               
                <p className='desc90'>Amazon is one of the most influential cultural driving forces with socio-economic components attracting all age groups.  Scholars and market researchers have referred to Amazon as the most precious brand. <br/>It is also ranked as one of the top five American information technology firms.<br/> Jeff Bezos launched it on July 5, 1994, in Washington, United States; it is based in Seattle and services people all over the world.<br/>Amazon was founded on July 5, 1994, by Jeff Bezos in Bellevue, Washington.[6] The company originally started as an online marketplace for books but gradually expanded its offerings to include a wide range of product categories. This diversification led to it being referred to as "The Everything Store". </p>
                <button className='button09 px-2 py-4 rounded-2xl hover:scale-125 hover:translate-all hover:duration-75 text-white bg-black'>Learn More</button>
              </div>
              <div className='img-class'>
                <img src={pic45} className='pic45'/>
              </div>
             </div>
    </section>
  )
}
 
export default Service

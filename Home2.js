import React from 'react'

 import {Carousel} from "flowbite-react"
import './Home2.css'
import image from '../Assets/amazon.png'
import im67 from '../Assets/echo.png'
import im90 from '../Assets/kindle2.png'

function Home() {
  return (
    //  <div className=' h-screen flex flex-row justify-center'>
   
 
        
    //    {/* <section id='home'> */}
          
    //          <div className='content'>
             
    //        <div className='head4 border-2 border-solid border-red-800 ml-5'>
    //           <h3 className='dev mr-10'>
    //           entertainment comes to life in<br/>breathtaking 4K brilliance!
    //             </h3>
    //            <p className=' desc56 '>
                
    //                  Devlopment:Where ideas evolve into reality.</p>
                  

                  
    //                <button className='btn99'>Click here</button>
    //                </div>
    //                <div className='image89'>
    //                 <img src={image} alt='imh' className= ' imgpic border-2 border-solid border-red-500  ml-10'/>
    //                </div>
                     
                  
                  
                
               
    //              </div>
    //         </div>
    <section id='home'>
    <div className="h-screen ">
    <Carousel>
      <div className=" flex h-full items-center justify-evenly  bg-white">
      <div className='content '>
             
                     <div className='head4  max-[600px]:mt-3'>
                        <h3 className='de max-[600px]:text-3xl'>
                       Entertainment Comes To Life In<br/>Breathtaking 4K Brilliance!
                          </h3>
                         <p className=' desc56 '>
                         
                               Here,you can find the entertaiment.</p>
                           
         
                           
                             <button className='btn99'>Click here</button>
                            </div>
                             <div className='image89'>
                              <img src={image} alt='imh' className= ' imgpic '/>
                            </div>
      </div>
      </div>
      <div className="flex h-full items-center justify-center bg-white">
      <div className='content'>
             
             <div className='head4  mx-15 max-[600px]:mt-3'>
                <h3 className='de max-[600px]:text-2xl ' >
               Always Ready,Connected<br/>And Fast
                  </h3>
                 <p className=' desc56  '>
                 
                       Here,you can communicate with alex anytime.</p>
                   
 
                   
                     <button className='btn99 '>Click here</button>
                    </div>
                     <div className='image89'>
                        <img src={im67} className='im67'/>
                    </div>
                    </div>
      </div>
      <div className="flex h-full items-center justify-center bg-white">
      <div className='content'>
      <div className='head4  mx-15 max-[600px]:mt-3'>
                <h3 className='de max-[600px]:text-2xl'>
                "The Book Lives On”
                  </h3>
                 <p className=' desc56  '>
                 
                       Here,you can communicate with alex anytime.</p>
                   
 
                   
                     <button className='btn99 '>Click here</button>
                    </div>
                     <div className='image89'>
                        <img src={im90} className='im67 max-[600px]:pl-20'/>
                    </div>
            </div>
      </div>
    </Carousel>
  </div>
  </section>
               

      
        
           
      
  
  

  )
};

export default Home;

import React from 'react'
import img01 from '../Assets/8867.Microsoft_5F00_Logo_2D00_fo (1).png'
import img02 from '../Assets/linkedin.png'
import img03 from '../Assets/f6974e017d3f6196c4cbe284ee3eaf4e.png'
import img04 from '../Assets/espn.png'
import img05 from '../Assets/images (2).png'
import './About.css'


function About() {
  return (
    <section id='two'>
         <div className='head10'>
        <h1 className='head  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>Our Client</h1>
        </div>
        <div className='img10'>
        <p className='descofhead  text-black drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]'>We have been working with some fortune 100+ clients</p>
        </div>
        <div className='image'>
          <img src={img01} alt='img01' className='microsoft'/>
          <img src={img02} alt='img02' className='infosys'/>
          <img src={img03} alt='img03' className='Netflix'/>
          <img src={img04} alt='img04' className='TCS'/>
          <img src={img05} alt='img05' className='Wipro'/>

        </div>
    </section>
  )
}

export default About;

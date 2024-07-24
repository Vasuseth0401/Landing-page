import React from 'react'
import {Blockquote, Carousel} from "flowbite-react"
import './Testimonial.css'

function Testimonial() {
  return (
    <div className='pardiv1'> 
       <div className="  h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
      <Blockquote className="text-center max-[600px]:text-sm">
      "With the new Amazon EC2 G5 instances, we can provision higher-end graphics workstations that offer up to 3x higher performance compared to workstations with EC2 G4dn instances. With G5 instances, content creators have the freedom to create more complex and realistic content for our viewers.” 
Stephen Kowalski"<br/><br/><br/>
      Director of Digital Production Infrastructure Engineering, Netflix
  </Blockquote>
  <Blockquote className="text-center max-[600px]:text-sm">
  “We signed up for Amazon Web Services (AWS) Enterprise Support to leverage AWS's deep expertise in delivering reliable and highly performant solutions to governments and commercial organizations. <br/>Leveraging comprehensive architectural guidance and best practice recommendations to optimize our environment.<br/><br/><br/>
  Bryan Kaplan, Executive Vice President – Juvare LLC
  </Blockquote>
      </Carousel>
    </div>
    </div>
  )
}

export default Testimonial;

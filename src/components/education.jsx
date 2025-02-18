import React from 'react'
import './education.css'
import Spline from "@splinetool/react-spline";

<Spline 
  scene="https://my.spline.design/particlescene/" 
  onClick={(event) => console.log("Clicked on:", event.target.name)} 
/>



const education = () => {
  return (
      <section id='education'>
        <div className="back-container">

        <iframe src='https://my.spline.design/particleaibrain-b1db582c8ce2dc60ef72148b11c2ddbc/' frameborder='0'className='back-iframe' width='1500vw' height='520rem' z-index="-1" style={{overflow:"hidden"}}></iframe>

        <div className='content'>
            <span className='head'>Education</span>
            <div className='cards'>
        <div className="left">
                <div className='card1'>
                    <h3>Primary Education</h3>
                    <span>Bhartiya Vidya Mandir Senior Secondary School,Punjab</span>
                </div>

                <div className='card3'>
                    <h3>Graduation</h3>
                    <span>D.R. BR Ambedkar National Institute of Technology,Punjab</span>
                </div>
                
        </div>
                <div className="right">
                <div className='card2'>
                    <h3>Secondary Education</h3>
                    <span>Spring Dale Public School,Punjab</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      </section>
    
  )
}

export default education

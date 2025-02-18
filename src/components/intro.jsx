import React from 'react'
import './intro.css'
import back from './earth.jpg'
const intro = () => {
  return (
   <section id='intro'>
    <img src={back} alt="" className='background-img' />

    <div className='introContent'>
            <span className="hello">Hello,</span>
            <div>
            <span className="introText">I'm</span><span className="introName">Pranshu</span></div>
            <span>Web Developer</span>
            <span className='info'>I am a skilled web designer with experience in creating visually appealing and user friendly websites.</span>
    </div>

   </section>
  )
}

export default intro

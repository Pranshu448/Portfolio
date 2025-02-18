import React ,{useState}from 'react'
import './contact.css'
import whatsapp from './whatsapp.png'
import linkedin from './linkedin.webp'
import github from './github.webp'
import insta from './insta.png'
import emailjs from '@emailjs/browser';



const contact = () => {


  const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const service_id='service_iqmf2r7';
        const templateId='template_y9kzo95';
        const publicKey='QSpgAoKonyNlkMW7L';

        const templateParams={
          from_name: name,
          from_email: email,
          to_name:'Pranshu',
          message: message,
        };
    
        emailjs
          .send( service_id,templateId,templateParams,publicKey)
          .then(
            (response) => {
              console.log('SUCCESS!',response);
              setName('');
              setEmail('');
              setMessage('');
            })
            .catch((error) => {
              console.log('FAILED...', error);
            },
          );
      };
  return (
  <section id='contact'>
  
        <h1 className='contactPageTitle'>Contact me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunies.</span>
        <form className='contactForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='Your Name' className='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Your Email' className='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea name="message" rows={4} cols={30} placeholder='Your Message' className='area'value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type='submit' className='submitBtn'>Submit</button>
        </form>
        <div className="links">
            <a href="https://wa.me/6239583276" target="_blank"><img src={whatsapp} alt="" className="link" /></a>
            <a href="https://www.linkedin.com/in/Pranshu ./" target='_blank'><img src={linkedin} alt="" className="link" /></a>
            <a href="https://www.instagram.com/pranshu_448/" target='_blank'><img src={insta} alt="" className="link" /></a>
            <a href="https://github.com/Pranshu448" target='_blank'><img src={github} alt="" className="link" /></a>
        </div>


       
        </section>
    
  )
}

export default contact

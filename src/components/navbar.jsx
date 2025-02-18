import React from 'react'
import {useState} from 'react'
import './navbar.css'
import {Link} from  'react-scroll'
import logo from './P.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const navbar = () => {
    const [showmenu,setshowMenu]=useState(false)
    const [isActive, setIsActive] = useState(false);

  return (
    <nav className='navbar'>
        <div className="Menu">
        <div><img src={logo} alt="" className='logo'/></div>
       
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={400} className="desktopMenuItem" >Home</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={400} className="desktopMenuItem">Portfolio</Link>
            
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={400} className="desktopMenuItem" >About</Link>

        </div>
        <div><Link activeClass='active'to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView(behaviour='smooth');
        }}>Contact me</button></Link>
        </div>
</div>

            <FontAwesomeIcon icon={faBars} size="2x" style={{ cursor: "pointer" }} className='mobMenu' onClick={()=>{setshowMenu(!showmenu)}} />
            <div className='navmenu' style={{display:showmenu?'flex':'none'}}>
            <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-100} duration={500} className="list-item"  onClick={()=>{setshowMenu(false)}}>Home</Link>
            <Link activeClass='active'to='education' spy={true} smooth={true} offset={-100} duration={500} className="list-item"onClick={()=>{setshowMenu(false)}}>Portfolio</Link>
         
            <Link  activeClass='active'to='skills' spy={true} smooth={true} offset={-100} duration={500} className="list-item"onClick={()=>{setshowMenu(false)}}>About</Link>

            </div>
    </nav>
  )
}

export default navbar

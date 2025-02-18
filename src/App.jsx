import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import Intro from './components/intro'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'
import Education from './components/education'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

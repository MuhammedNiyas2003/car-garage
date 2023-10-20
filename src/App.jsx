import { useRef, useState } from 'react'
import Navbar from  './components/Navbar.jsx'
import './App.css'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'
import Bestoffer from './components/Bsetoffer.jsx'
import Vehiclelist from './components/Vehiclelist.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import './AppMob.css'

function App() {
  const aboutRef = useRef(null)
  // logic
//logic
  return (
    <div>
     <div className='landing-container'>
      <Navbar aboutRef={aboutRef}/>
      <Landing/>
     </div> 
     <About aboutRef={aboutRef}/>
     <Bestoffer/>
     <Vehiclelist/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App

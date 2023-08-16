import { useState } from 'react'
import Map from './components/mapp'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import LoginSignup from './components/LoginSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Map/> */}
    </>
  )
}

export default App

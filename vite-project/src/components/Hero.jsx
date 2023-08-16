import React from 'react'
import LoginSignup from './LoginSignup'
import {styles} from '../styles'
import '../index.css'
const Hero = () => {
  return (
    <>
     <section className='relative w-full h-screen max-auto'>
        <h1 className={`${styles.heroHeadText} flex justify-center` }>MAP IT OUT</h1>
        <br />
        <subSection className="flex flex-col items-center justify-center text-base ">
        <p className='text-xl'>This Project was made to understand the technologies with practical use.</p>
        <br />
        <p className='text-xl' >Such as Vite.js, React.js, Tailwind.css, MapBox, Express.js MongoDb.</p>
        <p className='text-xl'>We also created as simple backend to learn and understand.</p>
        <p className='text-xl'> About creating and fetching details using mongoDb database and express by making APIs </p>

        <button className="hero-background my-10 p-5 px-9"  endicon={<sendIcon />}><a href="https://github.com/adityaranjan006/MapItOut">GET TO GIT REPO</a></button>
        </subSection>
     </section>
     
     
    <LoginSignup/>
    </>
  )
}

export default Hero

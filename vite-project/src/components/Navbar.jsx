import React from 'react'
import {styles} from '../styles'
import '../index.css'

const Navbar = () => {
  return (
    <nav className=' w-full items-center realtive top-0 z-20 text-lg '>
        <div className='w-full flex justify-between items-center align-text-center'>
            <span className={`${styles.heroSubText} p-10`}>MAPITOUT</span>
            <div className="flex flex-row justify-end space-x-8 pe-5 ">
                <a href="/"><li className='list-none'>HOME</li></a>
                <a href="/"><li className='list-none'>ABOUT</li></a>
                <a href="/"><li className='list-none'>LOGIN</li></a>
                <a href="/"><li className='list-none'>SIGNUP</li></a>
            </div>
        </div>
       
    </nav>
    // <p>Navbar</p>
  )
}

export default Navbar

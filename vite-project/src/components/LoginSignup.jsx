import React from 'react'
import { styles } from '../styles'
// import {Routes,Route,BrowserRouter} from 'react'
// import Login from './Login'
// import Signup from './Signup'

const LoginSignup = () => {
  return (
    <section className='w-full items-center realtive top-0 z-20'>
    <div className="w-full flex justify-between items-center align-text-center pe-10 ">
            <div className='block justify-start w-full ps-20 '>
                <img src="./gun.png" alt="gangster" width={'400'} height={'500px'}/>
            </div>
            <div className='flex w-full flex-col justify-end py-4 items-center box-content '>
                <h2 className={`${styles.sectionHeadText}`}>LOGIN</h2>
                <form action="" method='' className='flex w-8/12 flex-col pe-10 ms-10'>
                    <label  htmlFor="" className='p-2'>USERNAME</label>
                    <input className='p-3 pe-10' type="text" required={true} placeholder='name'/>
                    <label  htmlFor="" className='p-2'>PASSWORD</label>
                    <input className='p-3' type="password" required={true} placeholder='Password'/>
                    <button className='p-3 my-5 items-center '>Log In</button>
                </form>
                <p>Not Register here?</p>
                <a  className='cursor-pointer'>Sign Up</a>
            </div>
    </div>
</section>
  )
}

export default LoginSignup


{/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} > </Route>
            <Route path='/signup' element={<Signup/>} > </Route>
        </Routes>
    </BrowserRouter> */}

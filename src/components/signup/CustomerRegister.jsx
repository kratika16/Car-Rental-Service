import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
const CustomerRegister = () => {
  return (
    <div>
      <Header/>
      <h1 className='text-center font-weight-bold text-lg mt-4 text-dark'>WELCOME TO CAR RENTAL AGENCY</h1>
      <h2 className='text-center font-weight-bold text-md mt-4 text-primary'>New Customer Register here</h2>
      <form className=' w-25 h-50 p-4  bg-info border border-secondary rounded shadow mx-auto mt-5'>
      <div className='mb-3'>
           <label className='form-label text-white' for="usernameinput">Username</label>
           <input className='form-control' id='usernameinput' type="text" placeholder='Enter username'/>
        </div>
        <div className='mb-3'>
           <label className='form-label text-white' for="emailinput">Email Address</label>
           <input className='form-control' id='emailinput' type="email" placeholder='Enter Email'/>
        </div>
        <div className='mb-3'>
           <label className='form-label text-white' for="passwordinput">Password</label>
           <input className='form-control' id='passwordinput' type="password" placeholder='Enter Password'/>
        </div>
        <div className='text-center'>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
        <p className='text-center mt-1'>Already have account? <span><Link to='/customerlogin'>Login here</Link></span></p>
      </form>
      </div>
  )
}

export default CustomerRegister
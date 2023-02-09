import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'

const CustomerLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = ()=>{
      navigate('/customerhome')
  }
  return (
    <div >
      <Header/>
      <h1 className='text-center font-weight-bold text-lg mt-4 text-dark'>WELCOME TO CAR RENTAL AGENCY</h1>
      <h2 className='text-center font-weight-bold text-md mt-4 text-primary'>Customer Login here</h2>
      <form className=' w-25 h-50 p-4  bg-info border border-secondary rounded shadow mx-auto mt-5' onSubmit={handleSubmit}>
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
        <p className='text-center mt-1'>Don't have account? <span><Link to='/customerRegister'>Register here</Link></span></p>
      </form>
    </div>
  )
}

export default CustomerLogin
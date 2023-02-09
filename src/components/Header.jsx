import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png';
const Header = () => {
  return (
    <div>
        <div className='bg-light d-flex justify-content-between px-2 pt-2'>
            <div className='d-flex flex-row'>
            <Link to='/'>
            <img alt='car rental' src={Logo} className='h-75 w-100 ml-4' />
            </Link>
            <h2 className='pt-2 pl-2'>Car Rental Services</h2>
            </div>
            <div>
                <Link to='/customerlogin'>
                <button className='btn btn-info mx-2 mt-2'>Customer Login</button>
                </Link>
                <Link to='/agencylogin'>
                <button className='btn btn-primary mx-2 mt-2'>Agency Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
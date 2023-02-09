import React from 'react'
import Header from '../Header'
import Display from './Display'
import { Link } from 'react-router-dom'
const AgencyHome = () => {
  return (
    <div>
      <Header/>
      <div className='text-right mx-2'>
        <Link to='/addnewcar'>
           <button className='btn btn-primary p-2'>Add New Car</button>
        </Link>
      <Display/>
      </div>
    </div>
  )
}

export default AgencyHome
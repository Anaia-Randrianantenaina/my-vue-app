import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div className='w-full h-[50px] bg-white shadow-lg'>
            <div className="flex justify-between items-center h-full">
                <div className='text-[30px] ml-10 font-bold'>
                  <Link to="/">
                    <span className='text-orange-600'>Orange</span> <span>Digital Center</span>
                  </Link>
                </div>
                <div className='flex space-x-7 mr-4 font-bold'>
                    <div><Link to="/programme">Programme</Link></div>
                    <div><Link to="/inscri">Inscription</Link></div>
                    <div><Link to="/about">À propos</Link></div>
                </div>
            </div>
        </div>
    </>
  )
}

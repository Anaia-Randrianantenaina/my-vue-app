import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer className="flex bg-orange-600 justify-between py-1 mt-20">
        <p className="text-lg font-semibold text-black ml-4">Places limitées</p>
        <p className="text-md text-black">Formation gratuite</p>
        <p className="text-sm text-white mr-4">Organisé par <span className="text-black font-semibold">Orange Digital Center</span></p>
      </footer>
    </div>
  )
}

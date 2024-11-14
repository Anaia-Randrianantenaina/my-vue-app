import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="mt-40 bg-gradient-to-r from-orange-50 to-orange-200 p-10 rounded-lg shadow-lg mx-8 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-[70px] font-extrabold text-center tracking-wider">
            <h1 className="animate-pulse text-orange-700 drop-shadow-lg">BIENVENUE</h1>
          </div>
          <div className="text-[45px] font-semibold text-center">
            <h1>
              <span className="text-orange-600">Orange </span>Digital Center Fianarantsoa
            </h1>
          </div>
          <p className="text-center text-lg text-gray-700 max-w-2xl">
            Bienvenue à l'Orange Digital Center de Fianarantsoa, un espace dédié à l'innovation, à la formation et au développement numérique. Rejoignez-nous pour explorer un monde de possibilités technologiques et apprendre aux côtés d'experts passionnés.
          </p>
          <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 ease-out bg-orange-600 rounded-full shadow-lg group hover:bg-orange-700 hover:shadow-2xl">
            <span className="absolute inset-0 w-full h-full transition duration-300 transform bg-orange-800 opacity-50 skew-y-6 -rotate-6 group-hover:rotate-0 group-hover:skew-y-0"></span>
            <span className="relative text-lg font-semibold tracking-widest uppercase">
              <Link to="programme">Découvrez nos programmes</Link>
            </span>
          </button>
        </div>
       
      </div>
    </>
  );
}

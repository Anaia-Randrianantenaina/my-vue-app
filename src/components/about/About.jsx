import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


export default function About() {
  return (
    <div id="a-propos" className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow mt-32">
        <div className="text-center">
          <h1 className="text-[40px] font-semibold animate-pulse">À propos de <span className="text-orange-600">ODC Club Fianarantsoa</span></h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            ODC Club Fianarantsoa est une organisation dédiée à la formation et à l'accompagnement des jeunes de la région de Fianarantsoa dans le domaine du développement professionnel et personnel.
            Nous offrons des formations pratiques et des opportunités d'apprentissage dans des domaines variés, notamment la gestion de projet, le développement web, la créativité et bien d'autres.
            Notre mission est de donner aux jeunes les outils nécessaires pour réussir dans un monde numérique en constante évolution.
          </p>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

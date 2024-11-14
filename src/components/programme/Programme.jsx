import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Programme() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  // Tableau des formations avec détails
  const formations = [
    { id: 1, date: '05 au 08 novembre', theme: 'Gestion et Montage de Projet', lieu: 'Parc E-tiala Andrainjato Fianarantsoa' },
    { id: 2, date: '09 au 12 novembre', theme: 'Initiation au développement avec React', lieu: 'Parc E-tiala Andrainjato Fianarantsoa' },
    { id: 3, date: '15 au 18 novembre', theme: "Maîtrise de l'intelligence émotionnelle au travail", lieu: 'Parc E-tiala Andrainjato Fianarantsoa' },
    { id: 4, date: '20 au 23 novembre', theme: 'Boostez votre créativité avec Adobe Illustrator', lieu: 'Parc E-tiala Andrainjato Fianarantsoa' },
    { id: 5, date: '25 au 28 novembre', theme: 'Introduction à la programmation JAVA', lieu: 'Parc E-tiala Andrainjato Fianarantsoa' },
  ];

  // Fonction pour ouvrir un modal
  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);

  return (
    <div id='programme' className="flex flex-col min-h-screen">
      <Navbar />
      <div className='flex-grow mt-32'>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-[40px]">
            <h1 className="animate-pulse">Nos formations du mois de novembre <span className='text-orange-600'>ODC Club Fianarantsoa</span></h1>
          </div>

          <div className='flex justify-center space-x-10'>
            {formations.map((formation, index) => (
              <div
                key={formation.id}
                onClick={() => openModal(index)}
                className='w-[200px] h-[150px] bg-white shadow-2xl rounded-xl p-6 flex items-center justify-center flex-col transition transform hover:scale-105 hover:shadow-3xl'
              >
                <span className='text-lg font-semibold text-gray-800'>{formation.date}</span>
                <button className='mt-4 text-orange-600 border-black border py-1 px-4 rounded-lg'>Voir les détails</button>
              </div>
            ))}
          </div>

          <button className="p-4 bg-orange-600 text-white rounded-2xl mt-8">
            <Link to="/inscri">Inscrivez-vous maintenant</Link>
          </button>
        </div>
      </div>

      {/* Utilisation du modal */}
      {openModalIndex !== null && (
        <Modal
          isOpen={openModalIndex !== null}
          onClose={closeModal}
          content={
            <>
              <p><strong>Date :</strong> {formations[openModalIndex].date}</p>
              <p><strong>Thème :</strong> {formations[openModalIndex].theme}</p>
              <p><strong>Lieu :</strong> {formations[openModalIndex].lieu}</p>
            </>
          }
        />
      )}

      {/* Footer toujours en bas */}
      <Footer />
    </div>
  );
}

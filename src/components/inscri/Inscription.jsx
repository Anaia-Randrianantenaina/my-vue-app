import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Inscription() {
  // État local pour les champs du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données du formulaire 
    console.log(formData);
    alert('Formulaire soumis');
  };

  return (
    <div id="inscription" className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow mt-32">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-[40px]">
            <h1 className="animate-pulse">Formulaire d'inscription</h1>
          </div>

          <form onSubmit={handleSubmit} className="w-96 p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="firstName">Prénom</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="lastName">Nom</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="phone">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full p-4 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

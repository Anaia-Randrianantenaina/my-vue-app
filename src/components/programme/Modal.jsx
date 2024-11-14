// Modal.js
import React from 'react';

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; // Ne rien afficher si le modal n'est pas ouvert

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-100">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-8 relative transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
        {/* Contenu du modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Détails de la formation</h2>
          <button
            onClick={onClose}
            className="px-6 py-3 text-red-600"
          >
            <span className="text-2xl font-bold">X</span>
          </button>
        </div>
        
        <p className="mb-6 text-lg text-gray-700">{content}</p>
        
      
      </div>
    </div>
  );
}

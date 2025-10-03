import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Header from '../components/Header';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: '',
    guests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation data:', formData);
    alert('Réservation envoyée ! Nous vous contacterons bientôt.');
  };

  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      <Header />
      <div className="flex">
        {/* Left side - Restaurant Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Right side - Reservation Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-900">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-green-400 text-sm font-medium uppercase tracking-wider mb-2">
              Rejoignez nous pour une expérience culinaire
            </p>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              Réservez votre table et profitez d'un délicieux repas avec nous
            </h1>
            <div className="w-16 h-px bg-green-400 mx-auto"></div>
          </div>

          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Votre Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="jj / mm / aaaa"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Votre numéro de téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="time" className="block text-white text-sm font-medium mb-2">
                Choisissez une heure *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
              >
                <option value="">Sélectionner l'heure</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="18:45">18:45</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block text-white text-sm font-medium mb-2">
                Nombre de personnes *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
              >
                <option value="">Nombre de personnes</option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
                <option value="6">6 personnes</option>
                <option value="7">7 personnes</option>
                <option value="8">8 personnes</option>
                <option value="8+">Plus de 8 personnes</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-transparent border-2 border-green-400 text-green-400 py-3 px-6 font-semibold uppercase tracking-wide hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Réserver Maintenant
            </button>
          </form>

          {/* Phone Reservation */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center mb-3">
              <Phone className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Réservation par téléphone</span>
            </div>
            <a 
              href="tel:+33752081449" 
              className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
            >
              +33 7 52 08 14 49
            </a>
          </div>

          {/* Mobile Restaurant Image */}
          <div className="lg:hidden mt-8">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-48 object-cover rounded-lg opacity-50"
            />
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

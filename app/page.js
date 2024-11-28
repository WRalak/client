'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function GatePassForm() {
  const [formData, setFormData] = useState({
    idNumber: '',
    fullName: '',
    residency: '',
    carDetails: '',
    dateTime: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData);

      setMessage(response.data.message);
      setFormData({
        idNumber: '',
        fullName: '',
        residency: '',
        carDetails: '',
        dateTime: '',
      });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'An error occurred.');
      } else {
        setError('Unable to connect to the server.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Gate Pass Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="idNumber" className="block mb-1">ID/Admission Number</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="residency" className="block mb-1">Residency</label>
            <input
              type="text"
              id="residency"
              name="residency"
              value={formData.residency}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="carDetails" className="block mb-1">Car Details (Optional)</label>
            <input
              type="text"
              id="carDetails"
              name="carDetails"
              value={formData.carDetails}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateTime" className="block mb-1">Date & Time</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
              min={new Date().toISOString().slice(0, 16)} 
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>

          {message && <p className="text-green-500 mb-4">{message}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

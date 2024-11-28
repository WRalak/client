'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [gatePasses, setGatePasses] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchGatePasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gatepasses');
        setGatePasses(response.data); // Store the data in state
      } catch (error) {
        console.error('Error fetching gate passes:', error);
      }
    };

    fetchGatePasses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Page - Submitted Gate Passes</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left border-b">ID Number</th>
            <th className="px-4 py-2 text-left border-b">Full Name</th>
            <th className="px-4 py-2 text-left border-b">Residency</th>
            <th className="px-4 py-2 text-left border-b">Car Details</th>
            <th className="px-4 py-2 text-left border-b">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {gatePasses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">No data available</td>
            </tr>
          ) : (
            gatePasses.map((gatePass) => (
              <tr key={gatePass._id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{gatePass.idNumber}</td>
                <td className="px-4 py-2 border-b">{gatePass.fullName}</td>
                <td className="px-4 py-2 border-b">{gatePass.residency}</td>
                <td className="px-4 py-2 border-b">{gatePass.carDetails}</td>
                <td className="px-4 py-2 border-b">{new Date(gatePass.dateTime).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;


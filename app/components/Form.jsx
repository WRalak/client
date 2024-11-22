'use client'

import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    idAdminNumber: "",
    residence: "",
    vehicleDetails: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/gatepass/add", formData);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 dark:bg-gray-800">
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        name="idAdminNumber"
        placeholder="ID/Admin Number"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        name="residence"
        placeholder="Residence"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        name="vehicleDetails"
        placeholder="Vehicle Details (Optional)"
        onChange={handleChange}
        className="block mb-2 p-2 border"
      />
      <input
        type="date"
        name="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        type="time"
        name="time"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Welcome
      </button>
    </form>
  );
}

'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get("http://localhost:5000/api/gatepass/entries");
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-lg font-bold mb-4">Admin Panel</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>ID/Admin Number</th>
            <th>Residence</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.phoneNumber}</td>
              <td>{entry.idAdminNumber}</td>
              <td>{entry.residence}</td>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>{entry.time}</td>
              <td>{entry.isApproved ? "Approved" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

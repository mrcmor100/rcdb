// src/services/api.js
const API_URL = 'http://localhost:5000/api';

export const getRuns = async (filters) => {
  const params = new URLSearchParams(filters);
  const response = await fetch(`${API_URL}/runs?${params}`);
  return response.json();
};

export const getRun = async (id) => {
  const response = await fetch(`${API_URL}/runs/${id}`);
  return response.json();
};

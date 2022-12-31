import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/';

export const getNumbers = (min, max) => {
  return axios.get(`${baseUrl}numbers`, { params: { min, max } });
}

export const getNumberById = (id) => {
  return axios.get(`${baseUrl}numbers/${id}`);
}

export const postNumber = (number) => {
  return axios.post(`${baseUrl}numbers`, { number });
}

export const updateNumber = (id, number) => {
  return axios.put(`${baseUrl}numbers/${id}`, { number });
}

export const deleteNumber = (id) => {
  return axios.delete(`${baseUrl}numbers/${id}`);
}

import axios from 'axios'

export const baseUrl = 'http://localhost:4000/api/';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url))
  return data;
}
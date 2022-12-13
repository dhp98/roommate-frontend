import axios from 'axios'

export const baseUrl = `${process.env.PRIVATE_API_URL}/api/`;

export const fetchApi = async (url) => {
  const { data } = await axios.get((url))
  return data;
}
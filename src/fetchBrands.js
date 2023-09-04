import { useQuery } from "react-query";
import axios from 'axios';

export const fetchBrands = async () => {
  const apiUrl = import.meta.env.VITE_AIRTABLE_ENDPOINT;
  const token = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  try { 
    const data = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const useBrands = () => {
  return useQuery("brands", fetchBrands);
}
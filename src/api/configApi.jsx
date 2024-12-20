import axios from 'axios';

export const fetchConfig = async () => {
  try {
    const response = await axios.get("https://familytree-api.seshra.com/api/config");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching config:", error);
    return []; // Return an empty array in case of error
  }
};

import api from '@/api/httpApi.jsx';

export const fetchFiscal= async () => {
  try {
    const response = await api.get('/api/fiscal-years');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching member:', error);
    throw error;
  }
};
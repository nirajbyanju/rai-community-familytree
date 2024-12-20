import api from '@/api/httpApi.jsx';

export const fetchContributor= async () => {
  try {
    const response = await api.get('/api/contributors');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching contributors:', error);
    throw error;
  }
};
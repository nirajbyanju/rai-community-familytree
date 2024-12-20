import api from '@/api/httpApi.jsx';

export const fetchAbout= async () => {
  try {
    const response = await api.get('/api/post?id=about-us');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching member:', error);
    throw error;
  }
};


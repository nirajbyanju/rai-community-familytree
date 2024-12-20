import api from '@/api/httpApi.jsx';

export const fetchGallery = async () => {
  try {
    const response = await api.get('/api/gallery?key=1');
    return response.data.data['items'];
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw error;
  }
};

import api from '@/api/httpApi.jsx';
export const fetchEvent = async () => {
  try {
    const response = await api.get('/api/posts?limit=0&postType=events');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw error;
  }
};



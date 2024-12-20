import api from '@/api/httpApi.jsx';

export const fetchCommitte = async () => {
  try {
    const response = await api.get('/api/posts?postType=committee-members');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching member:', error);
    throw error;
  }
};

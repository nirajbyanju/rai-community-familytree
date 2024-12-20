import api from '@/api/httpApi.jsx';


export const fetchCommonPage = async (slug) => { 
  try {
    const response = await api.get(`/api/post?id=${slug}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    throw error;
  }
};

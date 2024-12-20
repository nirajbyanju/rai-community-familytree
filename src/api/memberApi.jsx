
import api from '@/api/httpApi.jsx';

export const fetchMembership= async () => {
  try {
    const response = await api.get('/api/memberships?fiscal_year=1');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching member:', error);
    throw error;
  }
}; 
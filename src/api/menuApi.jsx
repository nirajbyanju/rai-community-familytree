import api from '@/api/httpApi.jsx';
export const fetchMenus = async () => {
  try {
    const response = await api.get('/api/menu?location=main-menu');
    return response.data.data['main-menu'];
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw error;
  }
};
export const fetchFooterMenu = async () => {
  try {
    const response = await api.get('/api/menu?location=footer-menu');
    return response.data.data['footer-menu'];
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw error;
  }
};
export const fetchImportantLink = async () => {
  try {
    const response = await api.get('/api/menu?location=important-links');
    return response.data.data['important-links'];
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw error;
  }
};
import api from '@/api/httpApi.jsx';


export const fetchBlogDetails = async (id) => { 
  try {
    const response = await api.get(`/api/post?id=${id}`); 
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    throw error;
  }
};

export const fetchBlog = async (currentPage) => {
  try {
    const response = await api.get(`/api/posts?limit=3&orderBy=DESC&category=miscellaneous&postType=post&page=${currentPage}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export const fetchCountBlog = async () => {
  try {
    const response = await api.get('/api/posts?limit=0&orderBy=DESC&category=miscellaneous&postType=post');
    const totalCount = response.data.data.length;
    return totalCount;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};






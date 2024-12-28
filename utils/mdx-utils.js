import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
      const { data } = await api.get(`/posts?id=eq.${id}`);
      if (!data || data.length === 0) {
        console.warn(`Post com ID ${id} não encontrado.`);
        return null;
      }
      return data[0];
    } catch (error) {
      console.error('Erro ao buscar post por ID:', error.message);
      return null;
    }
  };
  
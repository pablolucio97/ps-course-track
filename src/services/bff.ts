import { api } from './api';

const getAppTheme = async () => {
  try {
    const response = await api.get('/theme');
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    console.log('getAppTheme :', error);
  }
};

export { getAppTheme };

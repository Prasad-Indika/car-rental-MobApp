import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


let cachedToken = null;

const instance = axios.create({
    baseURL: 'http://192.168.8.104:8080/api',
  
  headers: {
    Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
  }
});

instance.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('stmToken');
      cachedToken = token;
      config.headers.Authorization = `Bearer ${cachedToken}`;
    } catch (error) {

    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance
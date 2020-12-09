// js file from generator


import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000/auth' :
  '/auth'

const authService = axios.create({
  baseURL,
  withCredentials: true
})

//habilitar withCredentials:true en el backend

const MY_SERVICE = {
  test: async () => {
    return await authService.get('/');
  },
  signup: async (user) => {
    return await authService.post('/signup', user);
  },
  login: async (user) => {
    return await authService.post('/login', user);
  },
  logOut: async () => {
    return await authService.get('/logout');
  },
  currentUser: async () => {
    return await authService.get('/current-user');
  }
};

export default MY_SERVICE;

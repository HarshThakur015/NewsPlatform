import axios from 'axios'

export const signup = async (data) => {
  // TODO: Connect to backend signup
  return axios.post('/api/auth/signup', data)
}

export const login = async (data) => {
  // TODO: Connect to backend login
  return axios.post('/api/auth/login', data)
}
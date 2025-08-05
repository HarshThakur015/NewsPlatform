import axios from 'axios'

export const fetchNews = async () => {
  // TODO: Fetch news from backend
  return axios.get('/api/news')
}
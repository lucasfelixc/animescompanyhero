import axios from 'axios'

const urlAPI = 'https://kitsu.io/api/edge'

const api = axios.create({
  baseURL: urlAPI
})

export default api

/*import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot backend URL
})

// Add token automatically to headers (if exists)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token')
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

export default API
*/
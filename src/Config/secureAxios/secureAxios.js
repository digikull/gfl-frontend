import axios from "axios"

 const secureAxios = axios.create({
     baseURL : 'http://127.0.0.1:8000/'
 })

 secureAxios.interceptors.request.use(config => {
     config.headers['Authorization'] = 'token'
     return config
 })

 secureAxios.interceptors.response.use(response => {
     console.log("Server Call is a success")
     return response
 },error => {
     console.log("server Error")
     return 'Errored'
 })

export default secureAxios
import axios from 'axios'

const secureAxios= axios.create({

  baseURL:"http://127.0.0.1:8000/api/"

})
// secureAxios.interceptors.request.use((config)=>{ 
//     config.headers={ ...config.headers}
// return config
// })

//  , Token:"xyz"

export default secureAxios
import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.timeout = 5000

// deveplopment 本地转发

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
}

export default axios
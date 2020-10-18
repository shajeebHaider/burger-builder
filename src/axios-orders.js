import axios from 'axios'

const instance = axios.create({
  baseURL: `https://amit-burger-builder.firebaseio.com/`
})

export default instance
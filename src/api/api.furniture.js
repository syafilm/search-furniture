import axios from 'axios'

const BASE_URL = 'http://www.mocky.io/v2'

function indexFurniture() {
  return axios.get(`${BASE_URL}/5c9105cb330000112b649af8`)
}

const ApiFurniture = {
  indexFurniture
}

export default ApiFurniture

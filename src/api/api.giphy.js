import axios from 'axios'

const BASE_URL = 'http://api.giphy.com/v1/gifs'
const API_KEY = 'QKULeG92EozvijOWpgT4S0Ihton8C2A3'

function searchGiphy(search, number) {
  return axios.get(`${BASE_URL}/search?q=${search}&api_key=${API_KEY}&offset=${number}&limit=25`)
}

function trendingGiphy(number) {
  return axios.get(`${BASE_URL}/trending?&api_key=${API_KEY}&offset=${number}&limit=25`)
}

function randomGiphy(number) {
  return axios.get(`${BASE_URL}/random?&api_key=${API_KEY}&offset=${number}&limit=25`)
}

const ApiGiphy = {
  searchGiphy,
  trendingGiphy,
  randomGiphy,
}

export default ApiGiphy

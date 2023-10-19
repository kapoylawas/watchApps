import axios from 'axios';

const Api = axios.create({
  // set url
  baseURL: 'http://127.0.0.1:8000/api/v1/',

  //set header axios
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;

//import axios
import axios from 'axios';

const Api = axios.create({
  //set endpoint API
  baseURL: 'http://10.50.1.162:8000/api/v1',

  //set header axios
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;

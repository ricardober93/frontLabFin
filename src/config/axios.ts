import axios from "axios";
import { SERVER_API_URL } from "config/constantes";

const AUTH_TOKEN = localStorage.getItem("token");

axios.defaults.baseURL = SERVER_API_URL;
axios.defaults.headers.common['Authorization'] =  `bearer ${AUTH_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';


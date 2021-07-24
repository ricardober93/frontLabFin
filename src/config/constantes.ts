const config = {
    VERSION: process.env.VERSION,
  };
  
  export default config;
  
  export const SERVER_API_URL = process.env.SERVER_API_URL  ||  "http://127.0.0.1:3333";
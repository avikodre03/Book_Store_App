import dotenv from 'dotenv'

dotenv.config()

export const port=process.env.VITE_PORT ||  4000
export const target=process.env.VITE_API_TARGET || 'http://localhost:4000'

export default {
      port: parseInt(port, 10),
      target,
    };

// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

// const port = process.env.VITE_PORT || 3000;
// const backendLink = process.env.VITE_BACKEND_LINK || 'http://localhost:5000';

// export default {
//   port: parseInt(port, 10),
//   backendLink,
// };
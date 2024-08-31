import dotenv from 'dotenv'

dotenv.config()

export const port=process.env.VITE_PORT
export const target=process.env.VITE_API_TARGET


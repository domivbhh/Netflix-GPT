import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // define:{
  //   'process.env_FIREBASE_API':JSON.stringify(process.env.FIREBASE_API)
  // }
})

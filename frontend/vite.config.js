import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server:{
    proxy:{
      "/api": {
        target: "http://localhost:5000",
      }
    }
  } // need "server:{}" to To forward API requests from your React frontend (served by Vite) to your backend (usually running on another port, like 5000), and avoid CORS errors.
})

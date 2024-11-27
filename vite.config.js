// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allows access from external devices
    port: 5173, // Optional: specify a port
  },
  plugins: [react()],
});

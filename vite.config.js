import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'crypto'; // Needed for the Node.js 18 fix

/**
 * Node.js 18 Compatibility Fix: Polyfill for the missing 'crypto.hash' function.
 * This must be executed at the very top level of the config file to ensure Vite's
 * dependency optimizer can run without throwing a TypeError.
 */
if (typeof globalThis.crypto === 'object' && !globalThis.crypto.hash) {
  // Overwrite the global crypto object to include the required 'hash' function
  globalThis.crypto = {
    ...globalThis.crypto,
    hash: (alg) => createHash(alg),
  };
}


/**
 * Vite Configuration for a React Project.
 * This config file uses the React plugin and sets up the development server.
 */
export default defineConfig({
  // Use the React plugin to enable support for JSX and React Fast Refresh
  plugins: [react()],
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
  }
})

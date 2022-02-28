import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
//import framework from '../framework/vite-plugin-ssr.ts'
import framework from 'framework/vite-plugin-ssr'

export default {
  plugins: [react(), ssr(framework)],
  /*
  ssr: {
    noExternal: ['framework', 'framework/vite-plugin-ssr.ts', 'framework/vite-plugin-ssr']
  },
  optimizeDeps: {
    include: ['framework']
  }
  */
}

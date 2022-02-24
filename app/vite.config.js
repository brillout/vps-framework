import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import framework from 'framework/vite-plugin-ssr'

export default {
  plugins: [react(), ssr(framework)],
  ssr: {
    external: ['framework']
  }
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE: troque 'portfolio' pelo nome EXATO do seu repositório no GitHub.
// Se o repositório se chamar "meu-portfolio", base deve ser '/meu-portfolio/'.
// Se este for um repositório de "User/Organization Page" (ex: viniciusadati.github.io),
// use base: '/' em vez disso.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

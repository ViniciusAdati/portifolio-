/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0B0F14', // fundo principal (quase preto, levemente azulado)
          800: '#111823',
          700: '#1A2430',
          600: '#26323F',
        },
        signal: {
          DEFAULT: '#4CE0B3', // verde-menta "terminal" — assinatura visual
          dim: '#2E8C6F',
        },
        accent: {
          DEFAULT: '#6C8CFF', // azul elétrico de apoio (links/hover)
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(76,224,179,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(76,224,179,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}

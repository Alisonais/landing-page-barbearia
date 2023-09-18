/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgba(4, 5, 12, 0.90)',
        'Linear': 'linear-gradient(180deg, #0D121E 0%, rgba(13, 18, 30, 0.51) 25%, rgba(13, 18, 30, 0.32) 51.56%, rgba(13, 18, 30, 0.51) 76.04%, #0D121E 100%)',
        'bgButton': '#F0B35B',
        'bgButtomHover': '#f6d19c'
      },
      animation: {
        shadowAnime: 'shadowAnime 4s ease-in-out infinite',
      },
      keyframes: {
        shadowAnime: {
          '0%, 100%': { 'box-shadow': '0 0 0 3px rgba(4, 5, 12, 0.90)' },
          '50%': { 'box-shadow': ' 0 0 20px 3px rgba(4, 5, 12, 0.90)' },
        },
      },
      plugins: [],
    }
  }
}
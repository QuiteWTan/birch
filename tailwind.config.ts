import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {  
      fontFamily:{
        'urbanist': ['Urbanist', 'sans-serif'],
        'rubik': ['Rubik Glitch', 'system-ui'],
        'anton': ['Anton', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
        'marker': ['Permanent Marker', 'cursive'],
        'rowdies': ['Rowdies', 'sans-serif']
      },
      colors:{
        'primary': '#fbfaf7',
        'secondary': '#1010100d',
        'dark' : '#242424',
        'light' : '#a5a5a5'
      }
    },
  },
  plugins: [],
}
export default config

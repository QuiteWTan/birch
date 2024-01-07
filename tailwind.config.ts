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
        'light' : '#a5a5a5',
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
    },
  },
  plugins: [],
}
export default config

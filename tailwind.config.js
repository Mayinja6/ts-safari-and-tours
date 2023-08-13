/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#446013',
        'primary-500': '#729e2f',
        secondary: '#410908',
        accent: '#cfa80d',
        'base-100': '#fbf8fc',
        neutral: '#222d3a',
        day_overlay: '#151515',
        night_overlay: '#101f46',
        info: '#7cc7f8',
        success: '#7fe1ba',
        warning: '#f6d841',
        error: '#df4969',
      },
    },
  },
  plugins: [],
};

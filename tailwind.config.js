/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sansation: ['"Sansation"', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%':   { transform: 'translate(0,0) scale(1)', opacity: '1' },
          '10%':  { transform: 'translate(-3px,-2px) scale(1.05)', opacity: '1' },
          '20%':  { transform: 'translate(3px,2px) scale(0.95)', opacity: '1' },
          '30%':  { transform: 'translate(-7px,1px) scale(1.1)', opacity: '1' },
          '40%':  { transform: 'translate(4px,-1px) scale(0.9)', opacity: '1' },
          '50%':  { transform: 'translate(-3px,6px) scale(1.08)', opacity: '1' },
          '60%':  { transform: 'translate(3px,-2px) scale(0.92)', opacity: '1' },
          '70%':  { transform: 'translate(-2px,10px) scale(1.05)', opacity: '1' },
          '80%':  { transform: 'translate(2px,-1px) scale(0.95)', opacity: '1' },
          '90%':  { transform: 'translate(0,0) scale(1.2)', opacity: '1' },
        },
        explode: {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '20%':  { transform: 'scale(0.8)', opacity: '1' },
          '40%':  { transform: 'scale(1.5)', opacity: '1' },
          '60%':  { transform: 'scale(2)', opacity: '0.8' },
          '80%':  { transform: 'scale(3)', opacity: '0.4' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        shake: 'shake var(--shake-duration, 1s) ease-in infinite',
      },
    },
  },
  plugins: [],
}

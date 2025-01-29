/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      duck: '#f3d915',
      beige: '#e9e4bb',
      jade: '#bfd4b7',
      kaki: '#a89907',
      darknight: '#1a1c27',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,   // Define el peso "thin" como 100
      extraLight: 200, // Agrega más pesos si lo necesitas
      light: 300,  // Agrega más pesos si lo necesitas
      regular: 400, // Agrega más pesos si lo necesitas
      medium: 500, // Agrega más pesos si lo necesitas
      semiBold: 600, // Agrega más pesos si lo necesitas
      bold: 700, // Agrega más pesos si lo necesitas
      extraBold: 800, // Agrega más pesos si lo necesitas
      black: 900, // Agrega más pesos si lo necesitas
    },
    extend: {      
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    }
  }
}


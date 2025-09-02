/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Hack Club Official Colors
        'hc-red': '#ec3750',
        'hc-orange': '#ff8c37',
        'hc-yellow': '#f1c40f',
        'hc-green': '#33d6a6',
        'hc-cyan': '#5bc0de',
        'hc-blue': '#338eda',
        'hc-purple': '#a633d6',
        'hc-darker': '#121217',
        'hc-dark': '#17171d',
        'hc-darkless': '#252429',
        'hc-black': '#1f2d3d',
        'hc-steel': '#273444',
        'hc-slate': '#3c4858',
        'hc-muted': '#8492a6',
        'hc-smoke': '#e0e6ed',
        'hc-snow': '#f9fafc',
        'hc-white': '#ffffff',
        // Theme variables for light/dark mode
        'text': '#1f2d3d',
        'background': '#ffffff',
        'elevated': '#ffffff',
        'sheet': '#f9fafc',
        'sunken': '#e0e6ed',
        'border': '#e0e6ed',
        'placeholder': '#8492a6',
        'secondary': '#3c4858',
        'primary': '#ec3750',
        'accent': '#338eda',
      },
      fontFamily: {
        'phantom': ['"Phantom Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

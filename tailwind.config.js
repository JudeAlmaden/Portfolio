/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Obsidian & Ultraviolet Design System
        primary: '#d0bcff',
        'primary-hover': '#a078ff',
        'on-primary': '#3c0091',
        'primary-container': '#a078ff',
        'on-primary-container': '#340080',
        
        secondary: '#c8c6c5',
        'on-secondary': '#313030',
        'secondary-container': '#4a4949',
        'on-secondary-container': '#bab8b7',
        
        surface: '#101415',
        'surface-dim': '#101415',
        'surface-bright': '#363a3b',
        'surface-container-lowest': '#0b0f10',
        'surface-container-low': '#191c1e',
        'surface-container': '#1d2022',
        'surface-container-high': '#272a2c',
        'surface-container-highest': '#323537',
        
        'on-surface': '#e0e3e5',
        'on-surface-variant': '#cbc3d7',
        
        'inverse-surface': '#e0e3e5',
        'inverse-on-surface': '#2d3133',
        
        outline: '#958ea0',
        'outline-variant': '#494454',
        
        background: '#101415',
        'on-background': '#e0e3e5',
        
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        
        // Compatibility aliases
        dark: '#0f0f0f',
        darker: '#0a0a0a',
        'surface-light': '#1e1e1e',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        popup: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        popdown: {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(208, 188, 255, 0.3), 0 0 40px rgba(208, 188, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(208, 188, 255, 0.5), 0 0 60px rgba(208, 188, 255, 0.2)' 
          },
        },
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      spacing: {
        'section': '128px',
        'gutter': '24px',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}

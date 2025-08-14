/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores principales del tema Hanal Pixán
        'maya-gold': 'var(--color-maya-gold)',
        'maya-orange': 'var(--color-maya-orange)',
        'maya-red': 'var(--color-maya-red)',
        'maya-brown': 'var(--color-maya-brown)',
        'maya-cream': 'var(--color-maya-cream)',
        'ceiba-green': 'var(--color-ceiba-green)',
        'ceiba-dark': 'var(--color-ceiba-dark)',
        'xibalba-purple': 'var(--color-xibalba-purple)',
        'xibalba-black': 'var(--color-xibalba-black)',
        'cenote-blue': 'var(--color-cenote-blue)',
        
        // Sistema de colores adaptativos
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary-light': 'var(--color-secondary-light)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-light': 'var(--color-accent-light)',
        
        // Textos y fondos
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        'bg-overlay': 'var(--color-bg-overlay)',
        
        // Estados
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        
        // Bordes y divisores
        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        'border-focus': 'var(--color-border-focus)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        maya: ['Crimson Text', 'Georgia', 'serif'], // Para títulos culturales
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        'hero': ['4.5rem', { lineHeight: '1.1' }],
        'display': ['5.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        // Animaciones culturales específicas
        'float-petal': 'floatPetal 15s linear infinite',
        'dance-fire': 'danceFire 2s ease-in-out infinite alternate',
        'glow-candle': 'glowCandle 3s ease-in-out infinite',
        'ripple-cenote': 'rippleCenote 4s ease-in-out infinite',
        'sway-ceiba': 'swayCeiba 8s ease-in-out infinite',
        
        // Animaciones generales mejoradas
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-out': 'scaleOut 0.3s ease-in',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'hover-lift': 'hoverLift 0.3s ease-out',
      },
      keyframes: {
        // Animaciones culturales mayas
        floatPetal: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        danceFire: {
          '0%': { transform: 'scale(1) rotate(-1deg)' },
          '50%': { transform: 'scale(1.05) rotate(1deg)' },
          '100%': { transform: 'scale(1) rotate(-1deg)' }
        },
        glowCandle: {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 193, 7, 0.4), 0 0 40px rgba(255, 193, 7, 0.2)',
            filter: 'brightness(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 193, 7, 0.6), 0 0 60px rgba(255, 193, 7, 0.3)',
            filter: 'brightness(1.1)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(255, 193, 7, 0.4), 0 0 40px rgba(255, 193, 7, 0.2)',
            filter: 'brightness(1)'
          }
        },
        rippleCenote: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0.7' }
        },
        swayCeiba: {
          '0%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(-2deg)' }
        },
        
        // Animaciones generales
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(var(--color-accent-rgb), 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(var(--color-accent-rgb), 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(var(--color-accent-rgb), 0)' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        hoverLift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' }
        }
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 2px 10px 0px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(var(--color-accent-rgb), 0.3)',
        'glow-strong': '0 0 40px rgba(var(--color-accent-rgb), 0.5)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      gradientColorStops: {
        'maya-sunset': 'var(--gradient-maya-sunset)',
        'ceiba-depths': 'var(--gradient-ceiba-depths)',
        'xibalba-myst': 'var(--gradient-xibalba-myst)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
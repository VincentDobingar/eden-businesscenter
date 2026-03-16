/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "eden-green": "#006047",
        "eden-dark": "#12352d",
        "eden-light": "#f4f7f5",
        "eden-gold": "#b69364",
        "eden-text": "#1f2937",
        "eden-muted": "#6b7280",
        "eden-border": "#e5e7eb",
        "eden-cream": "#faf8f3",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        "eden-sm": "0 10px 30px rgba(18, 53, 45, 0.06)",
        "eden-md": "0 16px 40px rgba(18, 53, 45, 0.10)",
        "eden-lg": "0 24px 60px rgba(18, 53, 45, 0.16)",
        "eden-xl": "0 30px 80px rgba(18, 53, 45, 0.20)",
        glow: "0 10px 35px rgba(0, 96, 71, 0.20)",
      },

      backgroundImage: {
        "eden-radial":
          "radial-gradient(circle at top left, rgba(0,96,71,0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(182,147,100,0.14), transparent 35%)",
        "eden-hero":
          "linear-gradient(135deg, #f4f7f5 0%, #ffffff 45%, #ecfdf5 100%)",
        "eden-cta":
          "linear-gradient(90deg, #006047 0%, #0b7a5b 100%)",
        "eden-card":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,247,245,0.75) 100%)",
      },

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        floatSoft: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        pulseSoft: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".92",
            transform: "scale(1.02)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },

      animation: {
        "fade-in-up": "fadeInUp 0.7s ease both",
        "fade-in": "fadeIn 0.5s ease both",
        "float-soft": "floatSoft 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      letterSpacing: {
        tighter2: "-0.03em",
      },

      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
}
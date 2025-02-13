/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      openSans: "var(--open-sans)",
      poppins: "var(--poppins)",
      helvetica: "var(--helvetica)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "20px",
      },
      screens: {
        "2xl": "1280px",
        sm: "800px",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      boxShadow: {
        button: "0 4.43px 17.71px 0 #9E9E9E40",
      },
      fontFamily: {
        fontello: ["Fontello", "sans-serif"],
      },
      colors: {
        blue: {
          1: "rgba(var(--blue-1))",
          2: "rgba(var(--blue-2))",
          3: "rgba(var(--blue-3))",
          4: "rgba(var(--blue-4))",
          5: "rgba(var(--blue-5))",
          6: "rgba(var(--blue-6))",
          7: "rgba(var(--blue-7))",
          8: "rgba(var(--blue-8))",
          9: "rgba(var(--blue-9))",
          10: "rgba(var(--blue-10))",
        },
        orange: {
          1: "rgba(var(--orange-1))",
          2: "rgba(var(--orange-2))",
          3: "rgba(var(--orange-3))",
          4: "rgba(var(--orange-4))",
          5: "rgba(var(--orange-5))",
          6: "rgba(var(--orange-6))",
          7: "rgba(var(--orange-7))",
          8: "rgba(var(--orange-8))",
          9: "rgba(var(--orange-9))",
          10: "rgba(var(--orange-10))",
        },
        gray: {
          1: "rgba(var(--gray-1))",
          2: "rgba(var(--gray-2))",
          3: "rgba(var(--gray-3))",
          4: "rgba(var(--gray-4))",
          5: "rgba(var(--gray-5))",
          6: "rgba(var(--gray-6))",
          7: "rgba(var(--gray-7))",
          8: "rgba(var(--gray-8))",
          9: "rgba(var(--gray-9))",
          10: "rgba(var(--gray-10))",
          11: "rgba(var(--gray-11))",
          12: "rgba(var(--gray-12))",
          13: "rgba(var(--gray-13))",
        },
        error: {
          4: "rgba(var(--error-4))",
          10: "rgba(var(--error-10))",
          11: "rgba(var(--error-11))",
        },
        white: "rgba(var(--white))",
        black: "rgba(var(--black))",

        divider: "rgba(var(--divider))",
        dividerLine: "rgba(var(--divider-line))",
        background: "rgba(var(--background))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "rgba(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "rotate-buy": {
          "0%, 100%": { rotate: "-22.427deg" },
          "50%": { rotate: "15.427deg" },
        },
        "rotate-properties": {
          "0%, 100%": { rotate: "10.349deg" },
          "50%": { rotate: "-15.427deg" },
        },
        "rotate-buyers": {
          "0%, 100%": { rotate: "-5.53deg" },
          "50%": { rotate: "12.427deg" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "rotate-buy": "rotate-buy 5s ease-in-out infinite",
        "rotate-properties": "rotate-properties 5s ease-in-out infinite",
        "rotate-buyers": "rotate-buyers 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

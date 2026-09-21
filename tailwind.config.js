/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand identity
        brand: {
          blue: '#3B82F6',    // Trust Blue - accent
          navy: '#0B1F3E',    // Deep Navy - primary
          gray: '#F5F7FA',    // Soft Gray - neutral
          // Legacy aliases, pointed at the new palette
          primary: '#3B82F6',
          secondary: '#0B1F3E',
          text: '#0B1F3E',
        },
        // Deep Navy scale, built around #0B1F3E
        navy: {
          50: '#F5F7FA',
          100: '#E6EBF2',
          200: '#C3CEDF',
          300: '#93A6C4',
          400: '#5C75A0',
          500: '#35507E',
          600: '#1E3A63',
          700: '#152C4E',
          800: '#0F2444',
          900: '#0B1F3E',
          950: '#071528',
        },
      },
      fontFamily: {
        // Wordmark and display headings
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

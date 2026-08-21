/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F4F6FA',
        surfaceAlt: '#EAEDF3',
        line: '#E1E4EC',
        ink: '#12151E',
        muted: '#5C6272',
        navy: {
          DEFAULT: '#14326B',
          light: '#2C56A6',
          dark: '#0B2049'
        }
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark':        '#1A1A14',
        'bg-surface':     '#242418',
        'bg-card':        '#2A2A1E',
        'orange':         '#F5823A',
        'orange-light':   '#F7A05E',
        'text-primary':   '#FFFFFF',
        'text-secondary': '#CCCCBB',
        'text-muted':     '#888877',
        'bg-projects':    '#F5F5F0',
        'bg-footer':      '#111110',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

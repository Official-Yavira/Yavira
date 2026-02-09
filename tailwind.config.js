/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0F',
        neon: '#8B5CF6',
        electric: '#22D3EE',
        cyber: '#0FF0FC'
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.6)',
        electric: '0 0 25px rgba(34, 211, 238, 0.6)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
        glow: 'radial-gradient(circle at top, rgba(139,92,246,0.35), transparent 60%)'
      }
    }
  },
  plugins: []
};

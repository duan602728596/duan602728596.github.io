module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
      ]
    },
    autoprefixer: {}
  }
};
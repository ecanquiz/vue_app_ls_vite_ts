module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  },
  content: [
      "./index.html",
      "./**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: []
}

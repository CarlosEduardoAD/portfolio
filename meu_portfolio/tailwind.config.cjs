module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
    'xs': '.75rem',
    'sm': '.875rem',
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
  },
    fontFamily : {
      mulish : ['Mulish', 'sans-serif'],
      karla : ['Karla', 'sans-serif'],
      merri : ['Merriweather', 'serif'],
      hind : ['Hind', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
}

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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

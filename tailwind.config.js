/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./src/presentation/components/**/*.{js,jsx,ts,tsx}",
    "./src/presentation/views/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        yellow: '#faba06',
        cadet: '#34384d',
        dark: '#030303',
        eerie: '#1d1d20',
        silver: '#ababab',
        salt: '#f8f8f8',
      },
      fontFamily: {
        mona: ['MonaSans-Regular'],
        monaExtraBold: ['MonaSans-ExtraBold'],
        monaBold: ['MonaSans-Bold'],
        monaMedium: ['MonaSans-Medium'],
        monaSemi: ['MonaSans-SemiBold'],
      }
    },
  },
  plugins: [],
}
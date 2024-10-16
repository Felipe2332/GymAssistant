// Aqui fica as configurações do TailWind
import {colors} from "./src/styles/colors"
import {fontFamily} from "./src/styles/fontFamily"

/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}",], //Talvez tenha um global.css aqui
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors,
        fontFamily,
       },
    },
    plugins: [],
  }

  //Aqui estou extendendo as cores que criei lá na pasta styles, então alem das cores padrão do TailWind, vou ter + aquelas
module.exports ={
  purge:{content: [".public/**/*.html","/src/**/*.vue"]},
  darkmode : false,
  theme : {
    entends:{}
  },
  variants:{
    extends:{}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
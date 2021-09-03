module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
    colors: {
      myColor: '#EED024',
      info: {
        900: '#234e52',
        800: '#285e61',
      },
       superGr:{
        100: '#12FF35',
        200: '#0BEC11',
        300: '#3FFF1B',
        400: '#3FD41B'
      },
      superPk:{
        100: '#FF00C6 ',
        200: '#DC1C90',
        300: '#F225DB',
        400: '#FF056D'
      }
    }},
    fontFamily: {
      rale: ['Raleway'],
      permanent: ['Permanent'],
      mansalva: ['Mansalva'],
      fruktur: ['Fruktur'],
      seymur: ['Seymour'],
      passero: ['Passero'],
      emblema: ['Emblema'],
      akaya: ['Akaya'],
      monofelt: ['Monofett'],
    },
  },
   variant: {
     extend: {
    transform: ['responsive', 'hover', 'focus'],
    skew: ['active', 'group-hover'],
    },
   },
  

  plugins: [],
}

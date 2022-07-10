module.exports = {

  mode:'jit',

 content: [

   "./src/**/*.{js,jsx,ts,tsx}",

 ],

 theme: {

   extend: {
    colors:{
      mainBg : '#02050E',
      secondaryBg : '#1E50FF',
      btnColor : '#1E50FF',
      headingColor : '#FFFFFF',
      paraColor: '#ADB9C7',
      cardColor:'#272D37'
  
     },
     minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    }
   },
   

 },

 plugins: [],

}

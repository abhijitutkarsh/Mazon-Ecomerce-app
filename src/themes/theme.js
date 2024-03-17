import { extendTheme } from "native-base";

const appTheme = extendTheme({
    colors: {
        // Add new color
        gray:"#9B9C9D",
        lightGray:"#EEEDED",
        black1:"#263238",
        backgroundColor:"#FAFBFE",
        primaryColor:'#ab792d',
        navColor: "#F5F5F5",
        white:"#fff",
        green:"#65C978",
        blue:"#10294E",
        pink:"#FF0049",
    
        primary: {
          50: '#F57450',
          100: '#FCD3C8',
          200: '#F57450',
          300: '#F57450',
          400: '#F57450',
          500: '#F57450',
          600: '#F57450',
          700: '#F57450',
          800: '#F57450',
          900: '#F57450',
        },
        secondary: {
            900: '#E7F4FF',
            500: '#F3F9FF',
          },
          amber: {
            900: '#EEFCEF',
            500: '#F6FDF7',
          },
      
          allColors: {
            inputBoxBg: '#FAFAFA',
          },

        },
fontConfig: {
    Poppins: {
        100: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        200: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        300: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        400: {
          normal: 'Poppins-Regular',
          italic: 'Poppins-Italic',
        },
        500: {
          normal: 'Poppins-Medium',
        },
        600: {
          normal: 'Poppins-Medium',
          italic: 'Poppins-MediumItalic',
        },
        700: {
          normal: 'Poppins-Bold',
        },
        800: {
          normal: 'Poppins-Bold',
          italic: 'Poppins-BoldItalic',
        },
        900: {
          normal: 'Poppins-Bold',
          italic: 'Poppins-BoldItalic',
        },
      },
},


})

export default appTheme;
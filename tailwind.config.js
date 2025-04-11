/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'custom-check': 'url("/assets/images/check.png")'
      },
      backgroundColor: {
        'custom-color': '#3DABC2'
      },
      boxShadow: {
        'header-shadow': '0px 20px 30px 0px rgba(0, 52, 74, 0.10)',
        'card-shadow': '0px 20px 30px 0px rgba(0, 52, 74, 0.10)',
        avatar: '0px 20px 30px 0px rgba(0, 52, 74, 0.10)',
        contact: '0px 20px 30px 0px rgba(0, 52, 74, 0.20)'
      },

      fontFamily: {
        // 'poppins-bold': ['Poppins-Bold', 'sans'],
        // 'poppins-black': ['Poppins-Black', 'sans'],
        // 'poppins-extrabold': ['Poppins-ExtraBold', 'sans'],
        // 'poppins-extralight': ['Poppins-ExtraLight', 'sans'],
        // 'poppins-light': ['Poppins-Light', 'sans'],
        // 'poppins-medium': ['Poppins-Medium', 'sans'],
        // 'poppins-regular': ['Poppins-Regular', 'sans'],
        // 'poppins-semiBold': ['Poppins-SemiBold', 'sans'],
        // 'poppins-thin': ['Poppins-Thin', 'sans'],
        // 'fraunces-bold': ['Fraunces-Bold', 'sans'],
        // 'lato-bold': ['Lato-Bold', 'sans'],
        // 'lato-black': ['Lato-Black', 'sans'],
        // 'lato-extrabold': ['Lato-ExtraBold', 'sans'],
        // 'brownhill-script': ['BrownhillScript', 'sans']
      },
      fontWeight: {
        600: 600
      },
      screens: {
        '768-991': { min: '320px', max: '991px' },
        // => @media (min-width: 768px) and (max-width: 991px) { ... }
        '777-991': { min: '768px', max: '991px' },
        // => @media (min-width: 768px) and (max-width: 991px) { ... }
        '992-1023': { min: '992px', max: '1023px' },
        // => @media (min-width: 768px) and (max-width: 991px) { ... }
        '600-625': { min: '600px', max: '625px' },

        '320-529': { min: '320px', max: '540px' },
        // => @media (min-width: 320px) and (max-width: 529px) { ... }

        '320-350': { min: '320px', max: '350px' },
        // => @media (min-width: 375px) and (max-width: 424px) { ... }
        '320-425': { min: '320px', max: '425px' },
        // => @media (min-width: 375px) and (max-width: 424px) { ... }

        '425-529': { min: '425px', max: '529px' },
        // => @media (min-width: 425px) and (max-width: 529px) { ... }

        '375-768': { min: '375px', max: '768px' },
        // => @media (min-width: 375px) and (max-width: 768px) { ... }

        '530-767': { min: '540px', max: '767px' },
        // => @media (min-width: 530px) and (max-width: 767px) { ... }

        '992-1199': { min: '992px', max: '1199px' },
        // => @media (min-width: 992px) and (max-width: 1199px) { ... }

        '1366-1439': { min: '1200px', max: '1439px' },
        // => @media (min-width: 1366px) and (max-width: 1439px) { ... }
        '1368-1439': { min: '1366px', max: '1439px' },
        // => @media (min-width: 1366px) and (max-width: 1439px) { ... }

        '1260-1365': { min: '1200px', max: '1280px' },
        // => @media (min-width: 1260px) and (max-width: 1365px) { ... }

        '1440-1599': { min: '1440px', max: '1599px' },
        // => @media (min-width: 1440px) and (max-width: 1599px) { ... }

        '1600-1679': { min: '1600px', max: '1679px' },
        // => @media (min-width: 1600px) and (max-width: 1900px) { ... }

        '1680-1919': { min: '1680px', max: '1919px' },
        // => @media (min-width: 1680px) and (max-width: 1919px) { ... }
        '1920-2560': { min: '1920px', max: '2560px' },
        // => @media (min-width: 1680px) and (max-width: 1919px) { ... }
        '1500-1560': { min: '1500px', max: '1560px' },
        // => @media (min-width: 1680px) and (max-width: 1919px) { ... }

        '2560': { min: '2560px' },
        // => @media (min-width: 2560px) { ... }

        '1200-1300': { min: '1200px', max: '1300px' },
        // => @media (min-width: 1200px) and (max-width: 1300px) { ... }

        '1025-1230': { min: '1025px', max: '1230px' },
        // => @media (min-width: 1025px) and (max-width: 1230px) { ... }
        '1165-1199': { min: '1165px', max: '1199px' }
        // => @media (min-width: 1025px) and (max-width: 1230px) { ... }
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         boxShadow: {
            checkboxShadow: '0px 0px 4px 0px rgba(149, 100, 212, 0.40)',
         },
      },
      fontFamily: { primary: ['Poppins', 'Arial', 'sans-serif'] },
      colors: {
         'gray-outline': 'rgba(84, 84, 84, 0.2)',
         'gray-light': '#DADADA',
         'gray-dark': '#545454',
         accent: '#9564D4',
         'gray-lightest': '#F8F8F8',
         'gray-medium': '#BCBCBC',
         'gray-darkest': '#212121',
         'accent-strong': '#552882',
         white: '#FFFFFF',
      },
      fontSize: {
         'sb-28': ['28px', { fontWeight: '600' }],
         'sb-24': ['24px', { fontWeight: '600' }],
         'sb-20': ['20px', { fontWeight: '600' }],
         'sb-16': ['16px', { fontWeight: '600' }],
         'md-16': ['16px', { fontWeight: '500' }],
         'md-14': ['14px', { fontWeight: '500' }],
         'reg-14': ['14px', { fontWeight: '400' }],
         'sb-12': ['12px', { fontWeight: '600' }],
         'md-12': ['12px', { fontWeight: '500' }],
         'reg-12': ['12px', { fontWeight: '400' }],
      },
   },
   plugins: [],
};

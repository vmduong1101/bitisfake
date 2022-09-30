/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['JOST']
      },
      translate: {
        '-50%': '-50%'
      },
      width: {
        'xxl': '29rem',
        '70%': '70%',
        '403': '403px',
        'img': '248px',
        'imgDetail': '249px',
        '810px': '810px',
        '600px': '600px',
        '29rem': '29rem',
        'imgPage': '310px'
      },
      height: {
        'slider': '37rem',
        '80%': '80%',
        'img': '238px',
        'item': '480px',
        'imgDetail': '260px',
        '29rem': '29rem',
        '203px': '203px',
        'imgPage': '310px'
      },
      borderWidth: {
        default: '1px'
      },
      minWidth: {
        '240px': '240px'
      },
      maxWidth: {
        '100vw': '100vw'
      },
      maxHeight: {
        '755px': '800px'
      },
      bottom: {
        '-56%': '-56%'
      },
      fontSize: {
        '15px': '15px'
      },
      gridTemplateColumns: {
        '1/4': '3fr 8fr'
      }
    }
  },
  plugins: [],
}
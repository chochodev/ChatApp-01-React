/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      dropShadow: {
        '3xl': '0 4px 6px rgba(0, 0, 0, 0.35)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        'logo2xl': [
          '0 0 2px #5f5f5f',
          '0 0 0 5px #ecf0f3',
          '8px 8px 15px #a7aaaf',
          '-8px -8px 15px #fff'
        ],
        'outerxl': ['3px 3px 8px #b1b1b1', '-3px -3px 8px #fff'],
        'outer2xl': ['13px 13px 20px #cbced1', '-13px -13px 20px #fff'],
        'inner2xl': ['inset 8px 8px 8px #cbced1', 'inset -8px -8px 8px #fff'],
        'outerxll': ['13px 13px 20px #fff', '-13px -13px 20px #fff']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

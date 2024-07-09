// tailwind.config.js
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				'slide-in-left': {
				  '0%': { transform: 'translateX(-50%)', opacity: '0' },
				  '100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-right': {
				  '0%': { transform: 'translateX(50%)', opacity: '0' },
				  '100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-down': {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0',
					  },
					  '100%': {
						transform: 'translateY(0)',
						opacity: '1',
					  },
                 },
				 
			  },
			  animation: {
				'slide-in-left': 'slide-in-left 2s ease-in-out',
				'slide-in-right': 'slide-in-right 2s ease-in-out',
				'slide-in-down': 'slide-in-down 2s ease-in-out forwards',
			},
			  transformOrigin: {
				'0': '0%',
				'50': '50%',
			  },
			borderRadius: {
				'custom-shape': '30% 70% 70% 30% / 30% 30% 70% 70%',
			  },
		  colors: {
			primary: {
			  color: ' #24cf92',
			  
			},
			secondary: {
			  dark: '#047857',
			},
		  },
		  gridTemplateColumns: {
			'2-max': 'repeat(2, max-content)',
		  },
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, #24cf92 120%)',
		  },
		},
	  },
	plugins: [],
  }
  
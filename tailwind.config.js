module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			surface: '#ffffff',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				soft: '#eff4ff',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			'muted-foreground': '#6b7280',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'section-sm': '5rem',
  			section: '6.5rem',
  			'section-lg': '8rem'
  		},
  		borderRadius: {
  			xl: '0.9rem',
  			'2xl': '1.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			soft: '0 24px 70px rgba(15, 23, 42, 0.06)'
  		},
  		fontSize: {
  			display: [
  				'2.75rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.04em'
  				}
  			],
  			heading: [
  				'1.75rem',
  				{
  					lineHeight: '1.25',
  					letterSpacing: '-0.03em'
  				}
  			],
  			body: [
  				'1rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			label: [
  				'0.75rem',
  				{
  					lineHeight: '1.4',
  					letterSpacing: '0.12em'
  				}
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

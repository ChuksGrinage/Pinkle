import { extendTheme } from '@chakra-ui/react'
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
// 	sm: '40em',
// 	md: '52em',
// 	lg: '64em',
// 	xl: '80em',
// })

const theme = extendTheme({
	colors: {
		black: '#16161D',
		pinkle: '#ea4c89',
		'bg-cream': '#FAF8F8',
	},
	fonts: {
		// heading: 'Nova mono, monospace',ss
		body: 'Lato, sans-serif',
	},
})

export default theme

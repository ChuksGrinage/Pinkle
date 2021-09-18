import { extendTheme } from '@chakra-ui/react'
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
// 	sm: '40em',
// 	md: '52em',
// 	lg: '64em',
// 	xl: '80em',
// })

const theme = extendTheme({
	fonts: {
		// heading: 'Nova mono, monospace',ss
		body: 'Lato, sans-serif',
	},
})

export default theme

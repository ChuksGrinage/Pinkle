import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
// import { compose } from 'utils/react-utils'
import theme from 'theme'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { AuthProvider } from 'components/contexts/auth-context'
import { NavBar } from 'components'
import { ReactQueryDevtools } from 'react-query/devtools'
// import { UserProvider } from 'components/contexts/user-context'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	// const AppProviders = compose(
	// 	[QueryClientProvider, { client: queryClient }],
	// 	[ChakraProvider, { resetCSS: true, theme }],
	// 	[ColorModeProvider, { options: { useSystemColorMode: true } }],
	// 	AuthProvider,
	// )
	return (
		<QueryClientProvider client={queryClient}>
				<ChakraProvider resetCSS={true} theme={theme}>
					<ColorModeProvider options={{ useSystemColorMode: true }}>
						<Component {...pageProps} />
						<ReactQueryDevtools initialIsOpen={false} />
					</ColorModeProvider>
				</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp

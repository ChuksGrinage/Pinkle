import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
// import { compose } from 'utils/react-utils'
import theme from 'theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavBar } from 'components'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from '../../app/api/auth-provider'
import { AuthGuard } from 'components/auth-guard'
// import { AuthProvider } from '../../app/api/authorization'
// import { UserProvider } from 'components/contexts/user-context'
// https://github.com/EatEmAll/django-djeddit

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
					<AuthProvider>
						<NavBar />
						{Component.requireAuth ? (
							<AuthGuard>
								<Component {...pageProps} />
							</AuthGuard>
						) : (
							// public page
							<Component {...pageProps} />
						)}
						<ReactQueryDevtools initialIsOpen={false} />
					</AuthProvider>
				</ColorModeProvider>
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp

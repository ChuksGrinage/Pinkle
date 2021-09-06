import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from 'theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthGuard, AuthProvider } from 'components'
import { ReactQueryDevtools } from 'react-query/devtools'
// https://github.com/EatEmAll/django-djeddit

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS={true} theme={theme}>
				<ColorModeProvider options={{ useSystemColorMode: true }}>
					<AuthProvider>
						{/* <NavBar /> */}
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

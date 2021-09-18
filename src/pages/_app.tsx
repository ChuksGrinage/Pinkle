import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from 'shared/Theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthGuard, AuthProvider } from 'shared/components'
import { ReactQueryDevtools } from 'react-query/devtools'
// https://github.com/EatEmAll/django-djeddit
// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#refresh_token
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS={true} theme={theme}>
				<ColorModeProvider options={{ useSystemColorMode: true }}>
					<AuthProvider>
						{/* replace false with Component.requireAuth */}
						{false? (
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

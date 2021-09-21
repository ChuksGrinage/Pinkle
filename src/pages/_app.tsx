import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import theme from 'shared/Theme'
import { AuthGuard, AuthProvider } from 'shared/components'
import NavBar from 'shared/components/navBar/navBar'

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
								<>
								<NavBar/>
								<Component {...pageProps} />
								</>
							</AuthGuard>
						) : (
							// public page
							<>
							<NavBar/>
							<Component {...pageProps} />
							</>
						)}
						<ReactQueryDevtools initialIsOpen={false} />
					</AuthProvider>
				</ColorModeProvider>
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp

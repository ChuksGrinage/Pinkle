import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import theme from 'shared/theme'
import { AuthGuard, AuthProvider } from 'shared/components'
import NavBar from 'shared/components/nav-bar'
import { NextPage } from 'next'

const queryClient = new QueryClient()

type Page<P = {}> = NextPage<P> & {
  requireAuth: Boolean
}

type CustomAppProps = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS={true} theme={theme}>
        <ColorModeProvider options={{ useSystemColorMode: true }}>
          <AuthProvider>
            {/* replace false with Component.requireAuth */}
            {Component.requireAuth ? (
              <AuthGuard>
                <>
                  <NavBar />
                  {/* TODO: Do we need two NavBar and Components? hmmm */}
                  <Component {...pageProps} />
                </>
              </AuthGuard>
            ) : (
              // public page
              <>
                <NavBar />
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

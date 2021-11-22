import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import theme from 'shared/theme'
import { MainLayout } from 'shared/components/layouts'
import { UserProvider } from '@auth0/nextjs-auth0'
import { AppProps } from 'next/dist/shared/lib/router/router'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </UserProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp

import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import theme from 'shared/theme'
import { MainLayout } from 'shared/components/layouts'
import { AppProps } from 'next/dist/shared/lib/router/router'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp

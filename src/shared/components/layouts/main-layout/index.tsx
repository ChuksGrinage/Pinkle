import { Box } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import NavBar from 'shared/components/nav-bar'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box minH='100vh'>
      <NavBar />
      <Box as='main'>{children}</Box>
    </Box>
  )
}
export default MainLayout

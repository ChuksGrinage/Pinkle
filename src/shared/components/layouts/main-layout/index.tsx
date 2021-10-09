import { Flex } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import NavBar from 'shared/components/nav-bar'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex flexDir='column' minH='100vh'>
      <NavBar />
      <Container flex='1' py='10' maxW='7xl' as='main'>
        {children}
      </Container>
    </Flex>
  )
}
export default MainLayout

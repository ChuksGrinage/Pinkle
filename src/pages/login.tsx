import { Heading, Box } from '@chakra-ui/layout'
import React from 'react'
import { LoginForm } from 'screens/login/components'

const Login = () => {
  return (
    <Box>
      <Heading alignSelf='end' fontFamily='novaMono'>
        Pinkle
      </Heading>
      <LoginForm />
    </Box>
  )
}

export default Login

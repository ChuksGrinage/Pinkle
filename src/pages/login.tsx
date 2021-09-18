import { Heading, SimpleGrid } from '@chakra-ui/layout'
import { LoginForm } from 'screens/login/components'

const Login = () => {
	return (
		<SimpleGrid
			height='100vh'
			justifyContent='center'
			justifyItems='center'
			backgroundColor='bg-cream'
		>
			<Heading alignSelf='end' fontFamily='novaMono' >
				Pinkle
			</Heading>
			<LoginForm />
		</SimpleGrid>
	)
}

export default Login

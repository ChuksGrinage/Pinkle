import { Heading, Link, Text, VStack, Box, SimpleGrid } from '@chakra-ui/layout'
import {
	Button,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react'
// import { useAuth } from 'components/contexts/auth-context'
import { useForm } from 'react-hook-form'

const Index = () => {
	// const { login } = useAuth()
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm()

	const onSubmit = async userCredentials => {
		// login(userCredentials, {
		// 	onError: error => {
		// 		setError('password', {
		// 			type: 'server',
		// 			message: error.message,
		// 		})
		// 	},
		// })
	}

	return (
		<SimpleGrid
			height='100vh'
			justifyContent='center'
			justifyItems='center'
			backgroundColor='bg-cream'
		>
			<Heading alignSelf='end' fontFamily='novaMono' color='pinkle'>
				Pinkle
			</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack
					backgroundColor='white'
					padding='3rem'
					marginTop='2rem'
					spacing='4'
					borderRadius='1rem'
					width='30rem'
				>
					<Box>
						<Heading marginBottom='1rem' size='md' fontFamily='novaMono'>
							Sign In
						</Heading>
						<Text color='pinkle' fontSize='sm'>
							Enter the world's largest homeschooling communtiy!
						</Text>
					</Box>
					<FormControl isInvalid={errors.username || errors.server}>
						<InputGroup>
							<InputLeftElement pointerEvents='none' />
							<Input
								id='username'
								{...register('username', {
									required: 'username is required',
								})}
								placeholder='username'
							/>
						</InputGroup>
						<FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.password || errors.server}>
						<InputGroup>
							<InputLeftElement pointerEvents='none' />
							<Input
								id='password'
								{...register('password', { required: 'password is required' })}
								type='password'
								placeholder='password'
							/>
						</InputGroup>
						<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
					</FormControl>
					<Link color='pinkle' alignSelf='flex-end'>
						Forget password?
					</Link>

					<Button
						borderRadius={20}
						type='submit'
						variant='solid'
						colorScheme='pink'
						width='full'
						isLoading={isSubmitting}
						loadingText='Submitting'
					>
						Login
					</Button>
					<Text>
						Don't have an account?{' '}
						<Link href='/signup' color='pinkle'>
							Sign up
						</Link>
					</Text>
				</VStack>
			</form>
		</SimpleGrid>
	)
}

export default Index

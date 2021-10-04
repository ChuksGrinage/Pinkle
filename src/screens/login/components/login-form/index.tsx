import React from 'react'
import {
	VStack,
	Box,
	Heading,
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	FormErrorMessage,
	Link,
	Button,
	Text,
	Container,
} from '@chakra-ui/react'
import { useAuth } from 'shared/components'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
	const { login } = useAuth()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm()

	const onSubmit = async userLoginData => {
		login(userLoginData)
	}

	return (
		<Container as='form' onSubmit={handleSubmit(onSubmit)}>
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
					<Text fontSize='sm'>
						Enter the world's largest homeschooling communtiy!
					</Text>
				</Box>
				<FormControl isInvalid={errors.email || errors.server}>
					<InputGroup>
						<InputLeftElement pointerEvents='none' />
						<Input
							id='email'
							{...register('email', {
								required: 'email is required',
							})}
							placeholder='Email'
							defaultValue='test1@email.com'
						/>
					</InputGroup>
					<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.password || errors.server}>
					<InputGroup>
						<InputLeftElement pointerEvents='none' />
						<Input
							id='password'
							{...register('password', { required: 'password is required' })}
							type='password'
							placeholder='Password'
							defaultValue='test1'
						/>
					</InputGroup>
					<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
				</FormControl>
				<Link alignSelf='flex-end'>Forget password?</Link>

				<Button
					borderRadius={20}
					type='submit'
					variant='solid'
					width='full'
					isLoading={isSubmitting}
					loadingText='Submitting'
				>
					Login
				</Button>
				<Text>
					Don't have an account? <Link href='/signup'>Sign up</Link>
				</Text>
			</VStack>
		</Container>
	)
}
export default LoginForm

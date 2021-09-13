import {
	Heading,
	Link,
	Text,
	VStack,
	Box,
	SimpleGrid,
	HStack,
} from '@chakra-ui/layout'
import {
	Button,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	FormErrorMessage,
} from '@chakra-ui/react'
import { useSignupMutation } from 'generated'
import { useRouter } from 'next/router'
// import { useAuth } from 'components/contexts/auth-context'
import { useForm } from 'react-hook-form'

const Index = () => {

	const { push, query } = useRouter()
	const { mutate: signupUser } = useSignupMutation()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm()

	const onSubmit = async userCredentials => {
		signupUser(userCredentials, {
			onSuccess: () => push('/login')
		})	
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
							Sign Up
						</Heading>
						<Text color='pinkle' fontSize='sm'>
							Join the world's largest homeschooling communtiy!
						</Text>
					</Box>

					<HStack>
						<FormControl isInvalid={errors.firstName}>
							<InputGroup>
								<InputLeftElement pointerEvents='none' />
								<Input
									id='firstName'
									{...register('firstName', { required: 'First name is required' })}
									placeholder='First name'
								/>
							</InputGroup>
							<FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.lastName}>
							<InputGroup>
								<InputLeftElement pointerEvents='none' />
								<Input
									id='lastName'
									{...register('lastName', { required: 'Last name is required' })}
									placeholder='Last name'
								/>
							</InputGroup>
							<FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
						</FormControl>
					</HStack>

					<FormControl isInvalid={errors.email}>
						<InputGroup>
							<InputLeftElement pointerEvents='none' />
							<Input
								id='email'
								{...register('email', { required: 'Email is required' })}
								type='email'
								placeholder='Email'
							/>
						</InputGroup>
						<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.password}>
						<InputGroup>
							<InputLeftElement pointerEvents='none' />
							<Input
								id='password'
								{...register('password', { required: 'Password is required' })}
								type='password'
								placeholder='Password'
							/>
						</InputGroup>
						<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.confirmPassword}>
						<InputGroup>
							<InputLeftElement pointerEvents='none' />
							<Input
								id='confirmPassword'
								{...register('confirmPassword', {
									validate: value =>
										value === watch('password') || 'Passwords do not match',
									required: 'Please verify password',
								})}
								type='password'
								placeholder='Confirm password'
							/>
						</InputGroup>
						<FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
					</FormControl>
					<Button
						borderRadius={20}
						type='submit'
						variant='solid'
						colorScheme='pink'
						width='full'
						isLoading={isSubmitting}
						loadingText='Submitting'
					>
						Sign Up
					</Button>
					<Text>
						Already have an account?{' '}
						<Link href='/login' color='pinkle'>
							Log in
						</Link>
					</Text>
				</VStack>
			</form>
		</SimpleGrid>
	)
}

export default Index

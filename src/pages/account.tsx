import { useUser } from '@auth0/nextjs-auth0'
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/layout'
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Button,
  FormLabel,
} from '@chakra-ui/react'
import { useSignupUserMutation } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Account() {
  const { user } = useUser()
  const { push } = useRouter()
  const { mutate: signupUser } = useSignupUserMutation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm()

  const onSubmit = async (userSignupData) => {
    signupUser(userSignupData, {
      onSuccess: () => push('/login'),
    })
  }

  if (!user) return

  return (
    <Box>
      <Heading mb='10' as='h1'>
        Account Settings
      </Heading>

      <Container as='form' onSubmit={handleSubmit(onSubmit)}>
        <Heading color='grey' mb='10' size='sm' as='h2'>
          Personal Information
        </Heading>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.firstName}>
              <FormLabel>First name:</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' />
                <Input
                  id='firstName'
                  // defaultValue={user.firstName}
                  {...register('firstName', { required: 'First name is required' })}
                  placeholder='First name'
                />
              </InputGroup>
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel>Last name:</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' />
                <Input
                  id='lastName'
                  // defaultValue={user.lastName}
                  {...register('lastName', { required: 'Last name is required' })}
                  placeholder='Last name'
                />
              </InputGroup>
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email:</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' />
                <Input
                  id='email'
                  {...register('email', { required: 'Email is required' })}
                  type='email'
                  placeholder='Email'
                  defaultValue={user.email}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password:</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' />
                <Input
                  id='password'
                  {...register('password', { required: 'Password is required' })}
                  placeholder='Password'
                />
              </InputGroup>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl isInvalid={errors.confirmPassword}>
              <InputGroup>
                <InputLeftElement pointerEvents='none' />
                <Input
                  id='confirmPassword'
                  {...register('confirmPassword', {
                    required: 'Password confirmatino is required',
                  })}
                  placeholder='Confirm Password'
                />
              </InputGroup>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              disabled={!isDirty}
              colorScheme='blackAlpha'
              type='submit'
              variant='solid'
              width='full'
              isLoading={isSubmitting}
              loadingText='Submitting'
            >
              Save Changes
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
Account.requireAuth = true

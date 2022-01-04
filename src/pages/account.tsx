import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/layout'
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Button,
  FormLabel,
  useToast,
  UseToastOptions,
} from '@chakra-ui/react'
import { useUpdateUserMutation } from 'generated'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from 'shared/utils'

export default function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isSubmitted },
  } = useForm()
  const [user, isLoading] = useSession()
  const toast = useToast()
  const { mutate } = useUpdateUserMutation({
    onSettled: (data, error) => {
      let toastData: UseToastOptions = {
        title: 'Account updated',
        status: 'success',
        duration: 9000,
      }
      if (error || data?.updateUser.error) {
        toastData = {
          title: 'Unable to update account, please try again later.',
          status: 'error',
          duration: 9000,
        }
      }
      toast(toastData)
    },
  })

  // TODO: fix this input typing
  const onSubmit = async (updatedUserData: any) => {
    mutate({ id: user?.id, ...updatedUserData })
  }

  return (
    <Box>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          <Heading mb='10' as='h1'>
            Account Settings
          </Heading>
          <Container as='form' onSubmit={handleSubmit(onSubmit)}>
            <Heading color='grey' mb='10' size='sm' as='h2'>
              Personal Information
            </Heading>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}>
              {/* <GridItem colSpan={2}>
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
              </GridItem> */}
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
                      defaultValue={user?.email}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              {/* TODO: Require fresh accessToken to change account settings especially for changing password */}
              {/* <GridItem colSpan={3}>
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
              </GridItem> */}
              <GridItem colSpan={2}>
                <Button
                  disabled={!isDirty || isSubmitted}
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
        </>
      )}
    </Box>
  )
}

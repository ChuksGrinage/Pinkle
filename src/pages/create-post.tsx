import { Box, Heading, Stack } from '@chakra-ui/layout'
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea } from '@chakra-ui/react'
import { useCreatePostMutation } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from 'shared/utils'

const CreatePost = () => {
  useSession()
  const { push } = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const { mutate: createPost } = useCreatePostMutation({
    onSuccess: () => {
      push('/')
    },
  })

  type PostData = {
    title: string
    content: string
  }
  const onSubmit = (post: any) => {
    console.log(post)
    createPost(post as PostData)
  }

  return (
    <Box h='100%'>
      <Heading as='h1' mb='6' fontWeight='light'>
        Create Post
      </Heading>
      <Stack align='start' spacing='6' as='form' onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title}>
          <FormLabel htmlFor='title'>Title:</FormLabel>
          <Input
            w='50%'
            id='title'
            {...register('title', {
              required: 'You must provie a title',
            })}
          />
          <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
        </FormControl>

        <FormControl h='fit-content' isInvalid={errors.content}>
          <FormLabel htmlFor='title'>Content:</FormLabel>
          <Textarea
            id='content'
            placeholder='Write your post...'
            w='80%'
            h='xs'
            {...register('content', {
              required: 'content is required',
            })}
          />
          <FormErrorMessage>{errors?.content?.message}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Post Topic
        </Button>
      </Stack>
    </Box>
  )
}

export default CreatePost

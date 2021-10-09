import { Box, Heading, Stack } from '@chakra-ui/layout'
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea } from '@chakra-ui/react'
import { useCreatePostMutation } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { useQueryClient } from 'react-query'

const CreatePost = () => {
  const { back, push } = useRouter()
  // const queryCache = useQueryClient()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const { mutate: createPost } = useCreatePostMutation({
    onSuccess: (post) => {
      // console.log(post.createPost.id)
      push(`post/${post.createPost.id}`)
      // queryCache.invalidateQueries('GetAllPosts')
      reset()
      back()
    },
  })

  const onSubmit = (post) => {
    createPost(post)
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
          <Textarea
            id='body'
            placeholder='Write your post...'
            w='80%'
            h='xs'
            {...register('body', {
              required: 'body is required',
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

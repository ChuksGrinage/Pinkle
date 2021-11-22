import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { VStack, Text, Heading, Grid, GridItem, Box, Link } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/textarea'
import { useAddCommentMutation, useGetPostByIdQuery } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import NexLink from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
const Index = () => {
  const { query: { id } = {}, isReady } = useRouter()
  const { user } = useUser()
  const postId = id as string
  const {
    data: { post } = {},
    isLoading,
    isError,
  } = useGetPostByIdQuery({ postId }, { enabled: isReady })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const { mutate: addComment } = useAddCommentMutation()

  if (!isReady) return null

  const onSubmit = ({ body }) => {
    addComment({ postId, body })
    reset()
  }

  return (
    <VStack align='start'>
      {isLoading ? (
        <Text>...loading</Text>
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <>
          <Heading as='h1'>{post.title}</Heading>
          <Text color='grey'>{post.commentCount} Replies</Text>
          {isLoading || isError ? (
            <div>loading comments</div>
          ) : (
            <Grid p='10' templateColumns='repeat(5, 1fr)' gap={10} w='full'>
              {post.allComments?.map((comment) => (
                <>
                  <GridItem key={comment.id} colSpan={1}>
                    <VStack justify='center'>
                      <Avatar />
                      <Text>{comment.user.firstName}</Text>
                    </VStack>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <VStack align='start'>
                      <Box>
                        <NexLink href='/user/[id]' as={`/user/${comment.user.id}`}>
                          <Link
                            textTransform='capitalize'
                            as='em'
                            color='teal'
                          >{`${comment.user.firstName} ${comment.user.lastName}`}</Link>
                        </NexLink>
                        <Text as='i' color='grey'>
                          , Teacher in Dallas, TX
                        </Text>
                      </Box>
                      <Text>{comment.body}</Text>
                    </VStack>
                  </GridItem>
                </>
              ))}
              {user && (
                <GridItem as='form' colStart={2} colSpan={4} onSubmit={handleSubmit(onSubmit)}>
                  <FormControl h='fit-content' isInvalid={errors.content}>
                    <Textarea
                      id='body'
                      h='xs'
                      placeholder='Reply to post...'
                      {...register('body', {
                        required: 'body is required',
                      })}
                    />
                    <FormErrorMessage>{errors?.content?.message}</FormErrorMessage>
                  </FormControl>
                  <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Post Reply
                  </Button>
                </GridItem>
              )}
            </Grid>
          )}
        </>
      )}
    </VStack>
  )
}

export default Index

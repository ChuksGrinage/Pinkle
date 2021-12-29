import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { VStack, Text, Heading, Grid, GridItem, Box, Link } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/textarea'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import NexLink from 'next/link'
import {
  GetAllPostsDocument,
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
  PostByIdDocument,
  PostByIdQuery,
  PostByIdQueryVariables,
  PostResponse,
} from 'generated'
import { gqlClient } from 'shared/utils'
import { Post } from 'shared/types'

const Index = ({ result: post }: PostResponse) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  // if (!isReady) return null

  // const onSubmit = ({ body }) => {
  //   addComment({ postId, body })
  //   reset()
  // }

  return (
    <VStack align='start'>
      <Heading as='h1'>{post?.title}</Heading>
      <Text color='grey'>{post?.comments?.count} Replies</Text>

      <Grid p='10' templateColumns='repeat(5, 1fr)' gap={10} w='full'>
        {/* {post.allComments?.map(comment => (
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
        ))} */}
        {/* {user && (
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
              )} */}
      </Grid>
    </VStack>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const params = ctx.params!
  const { postById } = await gqlClient<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, {
    // TODO: fix type assertion
    postId: params.id as string,
  })()
  return {
    props: postById,
  }
}

export async function getStaticPaths() {
  // IMPORTANT: Everything here is blocking and has to resolve before the build finishes
  // it increases runtime
  // TODO: see if there is a way to use the gql file
  const { posts } = await gqlClient<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument
  )()
  const { result, error } = posts
  if (error) throw new Error(`Something went wrong getting all the posts ${error}`)

  // TODO: consider soft failures like returning an error incase something went wrong
  // so next can cache a broken blog
  return {
    paths: result?.map(post => ({ params: { id: post.id } })) || [],
    // IMPORTANT: If its a new blog then it creates it and then caches it for next time
    // incase we are not fetching ALL the posts perhaps just the important ones for the users feed
    // 'blockin' shows nothing
    fallback: true,
  }
}

export default Index

import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { VStack, Text } from '@chakra-ui/layout'
import { useAddCommentMutation, useGetPostByIdQuery } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from 'shared/components'

const Index = () => {
  const { query: { id } = {}, back, isReady } = useRouter()
  const { user } = useAuth()
  const postId = id as string
  const {
    data: { post } = {},
    isLoading,
    isError,
  } = useGetPostByIdQuery({ postId }, { enabled: isReady })

  const { mutate: addComment } = useAddCommentMutation()
  const [comment, setComment] = React.useState('')

  if (!isReady) return null
  return (
    <VStack>
      <Button onClick={() => back()}>Go Back</Button>
      {isLoading ? (
        <Text>...loading</Text>
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
          <Text>Here are the comments</Text>
          {isLoading || isError ? (
            <div>loading comments</div>
          ) : (
            post.allComments?.map((comment) => (
              <Text color={user?.id === comment.user.id ? 'orangered' : null} key={comment.id}>
                {comment.user.email}: {comment.body}
              </Text>
            ))
          )}
          {user && (
            <>
              <Input value={comment} onChange={(e) => setComment(e.target.value)} />
              <Button
                onClick={() => {
                  addComment({ body: comment, postId })
                  setComment('')
                }}
              >
                Submit
              </Button>
            </>
          )}
        </>
      )}
    </VStack>
  )
}

export default Index

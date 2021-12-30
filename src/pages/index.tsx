import React from 'react'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  Avatar,
  Heading,
  HStack,
  VStack,
  StackDivider,
  Icon,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { useRouter } from 'next/router'
import { AddIcon, ChatIcon, StarIcon } from '@chakra-ui/icons'
import { useSession, gqlClient } from 'shared/utils'
import { Post, PostsDocument, PostsQuery, PostsQueryVariables, usePostsQuery } from 'generated'

type IndexPageProps = {
  posts: [Post]
  error: string
}

export default function Index({ posts: initialPosts }: IndexPageProps) {
  const [user] = useSession({ required: false })
  const [userInput, setUserInput] = React.useState('')
  const { push, isFallback } = useRouter()
  // TODO: Fix deconstruction
  const { data: { posts: { result = null, error: searchError = null } = {} } = {}, refetch } =
    usePostsQuery(
      { search: userInput },
      {
        refetchOnWindowFocus: false,
        enabled: false,
      }
    )

  if (isFallback) return <Box>Loading...</Box>

  const handleSearchClick = () => {
    refetch()
  }
  const posts = result || initialPosts
  console.log(searchError)
  return (
    <Box p='6'>
      <Heading as='h3' mb='5'>
        Groups in your area
      </Heading>
      <HStack mb='5'>
        <Input value={userInput} onChange={e => setUserInput(e.currentTarget.value)} w={400} />
        <Button colorScheme='blackAlpha' onClick={handleSearchClick}>
          Search
        </Button>
        {user && (
          <Button
            rightIcon={<AddIcon />}
            colorScheme='blackAlpha'
            onClick={() => push('/create-post')}
          >
            Create Post
          </Button>
        )}
      </HStack>
      <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem
          borderRadius='lg'
          border='1px solid grey'
          p='6'
          align='start'
          rowSpan={3}
          colSpan={3}
        >
          {' '}
          {!searchError ? (
            <VStack align='stretch' divider={<StackDivider borderColor='gray.200' />} spacing={4}>
              {posts?.map(post => (
                <VStack spacing={5} align='stretch' key={post.id}>
                  <HStack>
                    <Avatar size='sm' />
                    <Text color='teal' fontWeight='bold' flex='1'>
                      {/* {post.author.firstName} */}
                    </Text>
                    <Text as='i' color='grey'>
                      {/* {post.naturalCreatedAt} */}
                    </Text>
                  </HStack>
                  <Heading fontSize='lg'>
                    <NextLink href='/post/[id]' as={`/post/${post.id}`}>
                      <Link>{post.title}</Link>
                    </NextLink>
                  </Heading>
                  <Text as='p'>{post.content}...</Text>
                  <HStack color='grey'>
                    <HStack>
                      <Icon as={ChatIcon} />
                      <Text as='i'>{post.comments.count}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={StarIcon} />
                      <Text as='i'>{post.votes.count}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              ))}
            </VStack>
          ) : (
            <Box>Cant find any posts with the title: "{userInput}"</Box>
          )}
        </GridItem>
      </Grid>
    </Box>
  )
}

export async function getStaticProps() {
  const { posts } = await gqlClient<PostsQuery, PostsQueryVariables>(PostsDocument)()
  return {
    props: {
      posts: posts.result,
      error: posts.error,
    },
  }
}

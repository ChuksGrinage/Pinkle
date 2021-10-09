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

import NexLink from 'next/link'
import { useGetAllPostsQuery } from 'generated'
import { useRouter } from 'next/router'
import { AddIcon, ChatIcon, StarIcon } from '@chakra-ui/icons'

export default function Index() {
  // const { user: { firstName = 'Partner' } = {} } = useAuth()
  const { data: { posts } = {} } = useGetAllPostsQuery()
  const [userInput, setUserInput] = React.useState('')
  const { push } = useRouter()
  const handleInputChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSearchClick = () => {
    console.log({ userInput })
  }

  return (
    <Box p='6'>
      <Heading as='h3' mb='5'>
        Groups in your area
      </Heading>
      <HStack mb='5'>
        <Input value={userInput} onChange={handleInputChange} w={400} />
        <Button colorScheme='blackAlpha' onClick={handleSearchClick}>
          Search
        </Button>
        <Button
          rightIcon={<AddIcon />}
          colorScheme='blackAlpha'
          onClick={() => push('/create-post')}
        >
          Create Post
        </Button>
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
          <VStack align='stretch' divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            {posts?.map((post) => (
              <VStack spacing={5} align='stretch' key={post.id}>
                <HStack>
                  <Avatar size='sm' />
                  <Text color='teal' fontWeight='bold' flex='1'>
                    {post.author.firstName}
                  </Text>
                  <Text as='i' color='grey'>
                    {post.naturalCreatedAt}
                  </Text>
                </HStack>
                <Heading fontSize='lg'>
                  <NexLink href='/post/[id]' as={`/post/${post.id}`}>
                    <Link>{post.title}</Link>
                  </NexLink>
                </Heading>
                <Text as='p'>{post.truncatedBody}...</Text>
                <HStack color='grey'>
                  <HStack>
                    <Icon as={ChatIcon} />
                    <Text as='i'>{post.commentCount}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={StarIcon} />
                    <Text as='i'>{post.favoriteCount}</Text>
                  </HStack>
                </HStack>
              </VStack>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

Index.requireAuth = true

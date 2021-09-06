import { Button } from '@chakra-ui/button'
import { VStack, Text } from '@chakra-ui/layout'
import { useGetPostByIdQuery } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
	const { query, push } = useRouter()
	const {
		data: { post } = {},
		isLoading,
		isError,
	} = useGetPostByIdQuery({ postId: query.id })

	return (
		<VStack>
			<Button onClick={() => push('/forums')}>Go Back</Button>
			{isLoading ? (
				<Text>...loading</Text>
			) : isError ? (
				<Text>Something went wrong</Text>
			) : (
				<>
					<Text>{post.title}</Text>
					<Text>{post.content}</Text>
				</>
			)}
		</VStack>
	)
}

export default Post

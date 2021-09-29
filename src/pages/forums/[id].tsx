import { Button } from '@chakra-ui/button'
import { VStack, Text } from '@chakra-ui/layout'
import { useGetAllPostsQuery, useGetPostByIdQuery } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
	const { query, back } = useRouter()

	console.log(query)
	const {
		data: { post } = {},
		isLoading,
		isError,
	} = useGetPostByIdQuery({ postId: query.id as string })

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
				</>
			)}
		</VStack>
	)
}

// export async function getStaticPaths() {
// 	const { data } = useGetAllPostsQuery()

// 	return { posts: data }
// }

// export async function getStaticProps({ params }) {
// 	console.log({ params })
// }

export default Post

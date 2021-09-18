import {
	Container,
	Grid,
	Heading,
	HStack,
	List,
	ListItem,
	UnorderedList,
	VStack,
} from '@chakra-ui/layout'
import { Button, GridItem, Input, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useGetAllPostsQuery } from 'generated'
import React from 'react'
import { useRouter } from 'next/router'
import { BlogCard, Pagination } from 'shared/components'

const Forums = () => {
	const { push, query: { page: urlCurrentPage } = {} } = useRouter()
	const { data } = useGetAllPostsQuery()
	const currentPage =
		urlCurrentPage && !Array.isArray(urlCurrentPage)
			? parseInt(urlCurrentPage)
			: 1
	const postsPerPage = 5

	const [posts, totalPages] = React.useMemo(() => {
		if (!data) return []
		const currentPaginationStart = (currentPage - 1) * postsPerPage
		const currentPaginationEnd = currentPage * postsPerPage
		const totalPages = Math.ceil(data.posts.length / postsPerPage)
		return [
			data.posts.slice(currentPaginationStart, currentPaginationEnd),
			totalPages,
		]
	}, [data?.posts, currentPage])

	return (
		<Container maxW='container.lg'>
			<Grid templateColumns='repeat(5, 1fr)' gap={4}>
				<GridItem colSpan={5}>
					<HStack p='5'>
						<Input placeholder='search' />
						<Button variant='outline'>Search</Button>
						<Button onClick={() => push('/forums/create-post')} variant='outline'>
							Create Post
						</Button>
					</HStack>
				</GridItem>
				<GridItem p='5' colSpan={5}>
					<VStack fontWeight='light'>
						<Heading as='h3' size='md' fontFamily='novaMono'>
							Posts
						</Heading>
						{posts?.map(post => (
							<List key={post.id}>
								<ListItem>
									<BlogCard post={post} />
								</ListItem>
							</List>
						))}
					</VStack>
				</GridItem>
				<GridItem p='5' colSpan={4}>
					<Pagination
						totalPages={totalPages}
						onPageChange={page => push(`/forums/page=${page}`)}
					/>
				</GridItem>
			</Grid>
		</Container>
	)
}

export default Forums

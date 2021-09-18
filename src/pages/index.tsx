import React from 'react'
import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	HStack,
	Input,
	Link,
	VStack,
	Text,
} from '@chakra-ui/react'
import { useGetAllPostsQuery } from 'generated'
import { useAuth } from 'shared/components'
import Main from 'screens/main'
import { useRouter } from 'next/router'

export default function Index() {
	const { user: { firstName = 'Partner' } = {}, logout } = useAuth()
	const { data: { posts } = {} } = useGetAllPostsQuery()
	const [userInput, setUserInput] = React.useState('')
	const { push } = useRouter()
	const handleInputChange = e => {
		setUserInput(e.currentTarget.value)
	}

	const handleSearchClick = () => {
		console.log({ userInput })
	}

	return (
		<Container minH='100vh'>
			<Box h='10'>This will be some kind of header</Box>
			<Grid mt='6' templateColumns='repeat(5, 1fr)' gap={5}>
				<GridItem colSpan={2}>Howdy, {firstName}</GridItem>
				<GridItem colSpan={3}>
					<Button onClick={logout}>Logout</Button>
					<Link href='/account'>Account</Link>
				</GridItem>
				<GridItem display='flex' colSpan={5}>
					<Input value={userInput} onChange={handleInputChange} />
					<Button onClick={handleSearchClick}>Search</Button>
					<Button onClick={() => push('/create-post')}>Create Post</Button>
				</GridItem>
				<GridItem colSpan={5}>
					<VStack align='start'>
						{posts?.map(post => (
							<Box key={post.id} h='20'>
								<Link href={`forums/${post.id}`}>{post.title}</Link>
								<Text>{post.author.firstName}</Text>
							</Box>
						))}
					</VStack>
				</GridItem>
			</Grid>
		</Container>
	)
}

Index.requireAuth = true

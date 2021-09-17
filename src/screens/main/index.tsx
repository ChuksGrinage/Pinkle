import { Button } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/input'
import { HStack, SimpleGrid, Box ,Text} from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React from 'react'
import { AccountMenu } from './components'

const Main = ({ posts, user }) => {
	const { push } = useRouter()
	return (
		<>
		<HStack justify='space-between'>
		<AccountMenu />
			<Text>Welcome</Text>
			<Text>Location: {user?.zipCode}</Text>
		</HStack>
			<HStack>
				<InputGroup size='md'>
					<Input placeholder='Search' />
					<InputRightElement>
						<Button>Search</Button>
					</InputRightElement>
				</InputGroup>
				<Button onClick={() => push('create-post')} rightIcon={<AddIcon />}>
					Create post
				</Button>
			</HStack>
			<SimpleGrid>
				{posts?.map(post => (
					<Box key={post.id}>{post.title}</Box>
				))}
			</SimpleGrid>
		</>
	)
}
export default Main

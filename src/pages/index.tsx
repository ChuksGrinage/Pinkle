import React from 'react'
import {
	Box,
	Button,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
import { useGetAllPostsQuery } from 'generated'
import { AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useAuth } from 'shared/components'
import Main from 'screens/main'

export default function Index() {
	const { user } = useAuth()
	const { data: { posts } = {} } = useGetAllPostsQuery()

	return (
		<Box p='10' minH='100vh'>
			<Main posts={posts} user={user} />
		</Box>
	)
}

Index.requireAuth = true

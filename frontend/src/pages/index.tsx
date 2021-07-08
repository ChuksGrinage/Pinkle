import React from 'react'
import {
	Avatar,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useAuth } from 'components/contexts/auth-context'
import useUser from 'shared/hooks/useUser'

const Index = () => {
	return (
		<Grid px='10' templateColumns='repeat(5, 1fr)' gap={4}>
			<GridItem padding='5' colSpan={5}></GridItem>
		</Grid>
	)
}

export default Index

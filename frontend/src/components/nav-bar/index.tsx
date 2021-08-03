import {
	Box,
	Button,
	useBreakpointValue,
	HStack,
	Link,
	Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
// import { useAuth } from 'components/contexts/auth-context'
import useUser from 'shared/hooks/useUser'

export default function WithSubnavigation() {
	// const { logout } = useAuth()
	const { user, isLoading } = useUser()
	// console.log(user)
	// if (!user) return null

	return (
		<Box>
			<HStack paddingX='10rem'>
				<HStack flexGrow={1}>
					<Text fontFamily='novaMono' color='pinkle' fontSize='xx-large'>
						Pinkle
					</Text>
					<NextLink href='/' passHref>
						<Link>Home</Link>
					</NextLink>
					<NextLink href='/forums' passHref>
						<Link>Forums</Link>
					</NextLink>
				</HStack>
				<Text color='pinkle'>{user?.username}</Text>
				<Button>Logout</Button>
			</HStack>
		</Box>
	)
}

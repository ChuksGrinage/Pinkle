import {
	Box,
	Button,
	useBreakpointValue,
	HStack,
	Link,
	Text,
} from '@chakra-ui/react'
import { useAuth } from 'shared/components/auth-provider'
import NextLink from 'next/link'
import React from 'react'
// import { useAuth } from 'components/contexts/auth-context'

export default function WithSubnavigation() {
	const { logout } = useAuth()
	return (
			<HStack px='10'>
				<HStack flexGrow={1}>
					<Text fontFamily='novaMono'  fontSize='xx-large'>
						Pinkle
					</Text>
					<NextLink href='/' passHref>
						<Link>Home</Link>
					</NextLink>
					<NextLink href='/forums' passHref>
						<Link>Forums</Link>
					</NextLink>
				</HStack>
				{/* <Text >{user?.username}</Text> */}
				<Button onClick={logout}>Logout</Button>
			</HStack>
	)
}

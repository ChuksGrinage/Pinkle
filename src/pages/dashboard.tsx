import { Avatar } from '@chakra-ui/avatar'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Input, useOutsideClick, Button } from '@chakra-ui/react'
import {
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Link,
	Stack,
	Text,
} from '@chakra-ui/layout'
import React, { useState, useRef } from 'react'
import NextLink from 'next/link'
import { useQueryClient } from 'react-query'
// import { localStorageKey } from 'shared/contstants'
// import { BlogCard } from 'shared/components'
// import { NavBar } from 'shared/components'

// test2password
// wimekos746@firmjam.com
interface UserI {
	name: string
	photo?: string
	city: string
	state: string
}

const user: UserI = {
	name: 'Jenny Danaleigh',
	photo:
		'https://petspruce.com/wp-content/uploads/2018/10/What-Is-The-Weight-Of-4-Month-Lab-Puppy.jpg',
	city: 'Dallas',
	state: 'TX',
}

const users = [
	{
		name: 'Alonzo Green',
		photo:
			'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
		post: {
			title: 'Our year of preparation!',
			date: 'May 13, 2021',
			description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
reprehenderit nostrum ea eaque voluptatem dicta labore. Doloribus
adipisci dolorem cupiditate fugiat quo aspernatur voluptatem dolores
dignissimos quos nesciunt! Labore, culpa.`,
			content: 'Hello',
		},
	},
	{
		name: 'Jane Adrianna',
		photo:
			'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg',
		post: {
			title: 'Our year of preparation!',
			date: 'May 13, 2021',
			description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
	reprehenderit nostrum ea eaque voluptatem dicta labore. Doloribus
	adipisci dolorem cupiditate fugiat quo aspernatur voluptatem dolores
	dignissimos quos nesciunt! Labore, culpa.`,
			content: 'Hello',
			image:
				'https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg?quality=90&auto=webp',
		},
	},
]

const Dashboard = () => {
	const queryCache = useQueryClient()
	const logout = () => {
		console.log('logging out...')
		// window.localStorage.removeItem(localStorageKey)
		queryCache.invalidateQueries('Me')
	}

	const ref = useRef()

	useOutsideClick({
		ref: ref,
		handler: () => setIsSearchActive(false),
	})

	const [isSearchActive, setIsSearchActive] = useState(false)
	return (
		<Grid px='10' templateColumns='repeat(5, 1fr)' gap={4}>
			<GridItem padding='5' colSpan={5}>
				<Flex
					borderRadius='xl'
					shadow='md'
					padding='5'
					justifyContent='space-between'
				>
					<Flex align='center' w='lg' ref={ref}>
						<IconButton
							aria-label='Search'
							marginRight='5'
							icon={<SearchIcon h='8' w='8' />}
							onClick={() => setIsSearchActive(!isSearchActive)}
						/>
						{isSearchActive ? (
							<Flex w='lg'>
								<Input variant='flushed' w={80} />{' '}
								<Text paddingTop='5' pl='3' opacity={0.67}>
									{user.city}, {user.state}
								</Text>
							</Flex>
						) : (
							<Flex borderLeft='solid 1px' border paddingLeft='2'>
								<Avatar
									size='lg'
									name={user.name}
									src={user?.photo}
									marginRight='1rem'
								/>

								<Stack>
									<Heading  fontFamily='novaMono' as='h5' size='md'>
										Welcome back, {user.name}
									</Heading>
									<Text>Nice to see you!</Text>
								</Stack>
							</Flex>
						)}
					</Flex>
					<HStack spacing='10' padding='1rem'>
						<NextLink href='/forum'>
							<Link>Forums</Link>
						</NextLink>
						<Link>Dashboard</Link>
						<Link>Goals</Link>
						<Button onClick={logout} size='sm' '>
							Logout
						</Button>
					</HStack>
				</Flex>
			</GridItem>
		</Grid>
	)
}

export default Dashboard

import { Avatar } from '@chakra-ui/avatar'
import { CheckCircleIcon } from '@chakra-ui/icons'
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Link,
	Stack,
	StackDivider,
	Text,
	VStack,
} from '@chakra-ui/layout'
import { Button, Image, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useQueryClient } from 'react-query'
import { localStorageKey } from 'shared/contstants'
// import { BlogCard } from 'components'
// import { NavBar } from 'components'

// test2password
// wimekos746@firmjam.com
interface UserI {
	name: string
	photo?: string
}

const user = {
	name: 'Jenny Danaleigh',
	photo:
		'https://petspruce.com/wp-content/uploads/2018/10/What-Is-The-Weight-Of-4-Month-Lab-Puppy.jpg',
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
		window.localStorage.removeItem(localStorageKey)
		queryCache.invalidateQueries('Me')
	}
	return (
		<Grid px='10' templateColumns='repeat(5, 1fr)' gap={4}>
			<GridItem padding='5' colSpan={5}>
				<Flex borderRadius='xl' shadow='md' padding='5' justify='space-between'>
					<Flex align='center'>
						<Avatar size='lg' name={user.name} src={user?.photo} marginRight='1rem' />
						<Stack>
							<Heading color='pinkle' fontFamily='novaMono' as='h5' size='md'>
								Welcome back, {user.name}
							</Heading>
							<Text>Nice to see you!</Text>
						</Stack>
					</Flex>
					<HStack spacing='10' padding='1rem'>
						<NextLink href='/forum'>
							<Link>Forums</Link>
						</NextLink>
						<Link>Dashboard</Link>
						<Link>Goals</Link>
						<Button onClick={logout} size='sm' colorScheme='pink'>
							Logout
						</Button>
					</HStack>
				</Flex>
			</GridItem>
			<GridItem colSpan={3}>
				<Box>
					<Heading
						as='h3'
						size='md'
						fontFamily='novaMono'
						color='gray.500'
						textAlign='left'
					>
						Trending topics
					</Heading>

					<VStack mt='5' divider={<StackDivider borderColor='gray.200' />}>
						{users.map(({ photo, name, post }) => (
							<Box key={name} shadow='lg' borderRadius='xl' p='5'>
								<HStack mb='5'>
									<Avatar src={photo} name={name} />
									<Heading flexGrow={1} color='pinkle' size='sm'>
										{name}
									</Heading>
									<Text fontFamily='novaMono' fontSize='xs' color='gray.500'>
										{post.date}
									</Text>
								</HStack>
								{post.image && (
									<Image
										mb='5'
										src='https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg?quality=90&auto=webp'
									/>
								)}

								<Heading
									fontStyle='italic'
									fontWeight='light'
									size='sm'
									as='h2'
									display='inline-block'
									isTruncated
								>
									<Link>{post.title}</Link>
								</Heading>
								<Text color='gray.500' fontSize='xs' as='p'>
									{post.description}
								</Text>
							</Box>
						))}
					</VStack>
				</Box>
			</GridItem>
			<GridItem colSpan={2}>
				<Box borderRadius='xl' h='30rem' shadow='lg' p='5'>
					<Text fontWeight='light' fontStyle='italic' color='gray.500'>
						Upcoming Events
					</Text>
					<VStack spacing='5'>
						<Heading as='h2' fontWeight='medium' color='pinkle' size='lg'>
							Homeschooling, the first steps.
						</Heading>
						<Text as='p' fontSize='sm' fontStyle='italic' color='gray.500'>
							hosted by <Link color='pinkle'>Gloria Dean</Link>
						</Text>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Lorem ipsum dolor
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Assumenda, quia temporibus
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Quidem, ipsam illum
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Lorem ipsum dolor
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Assumenda, quia temporibus
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Quidem, ipsam illum
							</ListItem>
						</List>
						<Button colorScheme='pink' variant='outline'>
							Learn More
						</Button>
					</VStack>
				</Box>
			</GridItem>
		</Grid>
	)
}

export default Dashboard

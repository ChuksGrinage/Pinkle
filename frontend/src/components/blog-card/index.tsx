import Image from 'next/image'
import { Box, VStack, HStack, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function BlogCard({ post }) {
	const { title, author, id } = post
	return (
		<Box p='5' boxShadow={'2xl'} rounded={'md'}>
			<VStack alignItems='start' alignSelf='stretch'>
				<HStack>
					<Text>{author.username}</Text>
					<NextLink href={`/forums/${id}`} passHref>
						<Link>{title}</Link>
					</NextLink>
				</HStack>

				<HStack>
					<Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, rerum
						facilis! Dignissimos obcaecati sequi itaque nostrum tempora veritatis aut
						libero nemo quibusdam. Omnis repudiandae non delectus, numquam tempore nam
						corrupti?
					</Text>
				</HStack>

				<HStack>
					<Box>likes</Box>
					<Box>comments</Box>
					<Box>share</Box>
					<Box>menu</Box>
				</HStack>
			</VStack>
		</Box>
	)
}

import { ReactNode } from 'react'
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

import { useAuth } from 'shared/components'

const Links = ['Forum']

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: 'brunswickgreen',
		}}
		href={'#'}
	>
		{children}
	</Link>
)

export default function NavBar() {
	const { push } = useRouter()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { logout } = useAuth()

	return (
		<>
			<Box bg={'darkjunglegreen'} opacity={0.8} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
						color={'white'}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<HStack
							as={'nav'}
							spacing={4}
							color={'white'}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map(link => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<IconButton aria-label='search-icon' marginRight='12px' color='white'>
							<Search2Icon />
						</IconButton>
						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								<Avatar size={'sm'} />
							</MenuButton>
							<MenuList color={'white'} bg={'darkjunglegreen'}>
								<MenuItem onClick={() => push('/account')}>Account</MenuItem>
								<MenuDivider />
								<MenuItem onClick={logout}>Log Out</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4} color={'white'}>
							{Links.map(link => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	)
}

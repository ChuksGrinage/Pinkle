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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NexLink from 'next/link'
import { useAuth } from 'shared/components'

interface ILink {
  title: string
  url: string
}

const Links: ILink[] = [
  {
    title: 'Home',
    url: '/',
  },
]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function NavBar() {
  const { push } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout, user } = useAuth()

  return (
    <>
      <Box bg={'gray.900'} color='white' opacity={0.8} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NexLink key={link.title} href={link.url} as={link.url}>
                  <Link>{link.title}</Link>
                </NexLink>
              ))}
            </HStack>
          </HStack>
          {user ? (
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => push('/account')}>Account</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button>Login</Button>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NexLink key={link.title} href={link.url} as={link.url}>
                  <Link>{link.title}</Link>
                </NexLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

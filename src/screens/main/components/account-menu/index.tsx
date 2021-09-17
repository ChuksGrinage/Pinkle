import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import {
	HamburgerIcon,
	AddIcon,
	ExternalLinkIcon,
	RepeatIcon,
	EditIcon,
} from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from 'shared/components'

const AccountMenu = () => {
	const { logout } = useAuth()
	const { push  } = useRouter()
	return (
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<Avatar />}
				variant='outline'
			/>
			<MenuList font>
				<MenuItem onClick={() => push('/account')}>Account</MenuItem>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</MenuList>
		</Menu>
	)
}
export default AccountMenu

// import { useUser } from '@auth0/nextjs-auth0'
import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { useRouter } from 'next/router'
import React from 'react'

const AccountMenu = () => {
  // const { user } = useUser()
  const { push } = useRouter()
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label='Options' icon={<Avatar />} variant='outline' />
      <MenuList font>
        <MenuItem onClick={() => push('/account')}>Account</MenuItem>
        <MenuItem onClick={() => console.log('logout')}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
export default AccountMenu

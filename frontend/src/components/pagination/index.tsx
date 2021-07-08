import React from 'react'
import { List, ListItem } from '@chakra-ui/layout'
import { IconButton, Icon, Button, Text } from '@chakra-ui/react'

const ELLIPSES = '...'
const MAX_DISPLAYED_PAGE_NUMBERS = 7
const MAX_RANGE = 3

const Pagination = ({ totalPages, currentPage = 1, onPageChange }) => {
	const pageButtons = React.useMemo(() => {
		const buttons = []

		for (let index = 1; index <= totalPages; index++) {
			buttons.push(index)
		}

		if (totalPages <= MAX_DISPLAYED_PAGE_NUMBERS) return buttons

		const firstPage = 1
		const lastPage = totalPages
		const firstSetOfButtons = buttons.slice(0, MAX_RANGE)
		const lastSetOfButtons = buttons.slice(-MAX_RANGE)

		if (currentPage <= MAX_RANGE) {
			return [...firstSetOfButtons, ELLIPSES, lastPage]
		}
		if (currentPage > totalPages - MAX_RANGE) {
			return [firstPage, ELLIPSES, ...lastSetOfButtons]
		}

		return [
			firstPage,
			ELLIPSES,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			ELLIPSES,
			lastPage,
		]
	}, [currentPage, totalPages])

	if (totalPages < 2) return null

	return (
		<List
			maxWidth='100%'
			as='nav'
			flexWrap='wrap'
			aria-label='pagination'
			display='flex'
			alignItems='center'
		>
			<ListItem>
				<IconButton
					disabled={currentPage === 1}
					onClick={() => onPageChange(currentPage - 1)}
					aria-label='Go to previous page'
					aria-disabled={currentPage === 1}
					icon={<Icon icon='ChevronLeftIcon' size='lg' />}
					size='sm'
				/>
			</ListItem>
			{pageButtons.map((currentButton, index) => (
				<ListItem key={index} mx={{ base: 0.5, md: 1 }}>
					{typeof currentButton === 'string' ? (
						<Text> {ELLIPSES} </Text>
					) : (
						<Button
							onClick={() => onPageChange(currentButton)}
							color={currentButton === currentPage ? 'solid' : 'grey'}
							size='sm'
							aria-label={
								currentButton === currentPage
									? `Page ${currentButton}`
									: `Go to page ${currentButton}`
							}
							aria-current={currentButton === currentPage ? 'page' : false}
						>
							{currentButton}
						</Button>
					)}
				</ListItem>
			))}
			<ListItem>
				<IconButton
					disabled={currentPage === totalPages}
					onClick={() => onPageChange(currentPage + 1)}
					aria-label='Go to the next page'
					aria-disabled={currentPage === totalPages}
					icon={<Icon icon='ChevronRightIcon' size='lg' />}
					size='sm'
				/>
			</ListItem>
		</List>
	)
}

export default Pagination

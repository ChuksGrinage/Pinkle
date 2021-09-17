import { VStack } from '@chakra-ui/layout'
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Text,
	Textarea,
} from '@chakra-ui/react'
import { useCreatePostMutation } from 'generated'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { useQueryClient } from 'react-query'

const CreatePost = () => {
	const { back } = useRouter()
	// const queryCache = useQueryClient()
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm()
	const { mutate: createPost } = useCreatePostMutation({
		onSuccess: post => {
			// console.log(post.createPost.id)
			// push(`forums/${post.createPost.id}`)
			// queryCache.invalidateQueries('GetAllPosts')
			reset()
			back()
		},
	})

	const onSubmit = post => {
		createPost(post)
	}

	console.log(errors)
	return (
		<VStack>
			<Text>Create Post</Text>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={errors.title}>
					<FormLabel htmlFor='title'>Title</FormLabel>
					<Input
						id='title'
						placeholder='title'
						{...register('title', {
							required: 'Title is required',
						})}
					/>
					<FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={errors.content}>
					<FormLabel htmlFor='content'>content</FormLabel>
					<Textarea
						id='body'
						placeholder='body'
						{...register('body', {
							required: 'body is required',
						})}
					/>
					<FormErrorMessage>{errors?.content?.message}</FormErrorMessage>
				</FormControl>
				<Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
					Submit
				</Button>
			</form>
		</VStack>
	)
}

export default CreatePost

export type UserCredentials = {
	email: string
	password: string
}

export interface UserInfo {
	email: string
	firstName: string
	lastName: string
	zipCode: string
}

export type Post = {
	id: number
	title: string
	content: string
	published: boolean
	// TODO: fix this for the accurate type
	createdAt: any
	updatedAt: any
	User: UserInfo
}

export * from './utility-types'
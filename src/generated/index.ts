/* eslint-disable */
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query'
import { codegenClient } from 'shared/utils'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type CreatePostInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type CreateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse'
  result?: Maybe<User>
  error?: Maybe<Scalars['String']>
}

export type GetTokenInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type GetTokenResponse = {
  __typename?: 'GetTokenResponse'
  token?: Maybe<Token>
  error?: Maybe<Scalars['String']>
}

export type InvalidUser = {
  __typename?: 'InvalidUser'
  message: Scalars['String']
}

export type MeResponse = {
  __typename?: 'MeResponse'
  me?: Maybe<User>
  error?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  createUser: CreateUserResponse
}

export type MutationCreatePostArgs = {
  params: CreatePostInput
}

export type MutationCreateUserArgs = {
  params: CreateUserInput
}

export type Post = {
  __typename?: 'Post'
  id: Scalars['ID']
  title: Scalars['String']
  content: Scalars['String']
  published: Scalars['Boolean']
}

export type Query = {
  __typename?: 'Query'
  posts: Array<Maybe<Post>>
  me: MeResponse
}

export type Token = {
  __typename?: 'Token'
  accessToken: Scalars['String']
  tokenType: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  email: Scalars['String']
  createdAt: Scalars['DateTime']
}

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllPostsQuery = { __typename?: 'Query' } & {
  posts: Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'title' | 'content'>>>
}

export type UserInfoFragment = { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'createdAt'>

export type SignupUserMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type SignupUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'CreateUserResponse' } & Pick<CreateUserResponse, 'error'> & {
      result?: Maybe<{ __typename?: 'User' } & UserInfoFragment>
    }
}

export const UserInfoFragmentDoc = `
    fragment UserInfo on User {
  id
  email
  createdAt
}
    `
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    title
    content
  }
}
    `
export const useGetAllPostsQuery = <TData = GetAllPostsQuery, TError = unknown>(
  variables?: GetAllPostsQueryVariables,
  options?: UseQueryOptions<GetAllPostsQuery, TError, TData>
) =>
  useQuery<GetAllPostsQuery, TError, TData>(
    ['GetAllPosts', variables],
    codegenClient<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, variables),
    options
  )
export const SignupUserDocument = `
    mutation SignupUser($email: String!, $password: String!) {
  createUser(params: {email: $email, password: $password}) {
    result {
      ...UserInfo
    }
    error
  }
}
    ${UserInfoFragmentDoc}`
export const useSignupUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SignupUserMutation, TError, SignupUserMutationVariables, TContext>
) =>
  useMutation<SignupUserMutation, TError, SignupUserMutationVariables, TContext>(
    (variables?: SignupUserMutationVariables) =>
      codegenClient<SignupUserMutation, SignupUserMutationVariables>(
        SignupUserDocument,
        variables
      )(),
    options
  )

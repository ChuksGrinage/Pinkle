/* eslint-disable */
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query'
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
  content?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type CreateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<User>
}

export type GetTokenInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type GetTokenResponse = {
  __typename?: 'GetTokenResponse'
  error?: Maybe<Scalars['String']>
  token?: Maybe<Token>
}

export type InvalidUser = {
  __typename?: 'InvalidUser'
  message: Scalars['String']
}

export type MeResponse = {
  __typename?: 'MeResponse'
  error?: Maybe<Scalars['String']>
  me?: Maybe<User>
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: PostResponse
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
  author: User
  content: Scalars['String']
  id: Scalars['ID']
  published: Scalars['Boolean']
  title: Scalars['String']
  votes: Scalars['Int']
}

export type PostResponse = {
  __typename?: 'PostResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<Array<Maybe<Post>>>
}

export type PostsResponse = {
  __typename?: 'PostsResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<Array<Post>>
}

export type Query = {
  __typename?: 'Query'
  me: MeResponse
  posts: PostsResponse
}

export type Token = {
  __typename?: 'Token'
  accessToken: Scalars['String']
  tokenType: Scalars['String']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['ID']
}

export type PostDataFragment = {
  __typename?: 'Post'
  title: string
  content: string
  published: boolean
}

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']
  content: Scalars['String']
}>

export type CreatePostMutation = {
  __typename?: 'Mutation'
  createPost: {
    __typename?: 'PostResponse'
    error?: string | null | undefined
    result?:
      | Array<
          | { __typename?: 'Post'; title: string; content: string; published: boolean }
          | null
          | undefined
        >
      | null
      | undefined
  }
}

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllPostsQuery = {
  __typename?: 'Query'
  posts: {
    __typename?: 'PostsResponse'
    error?: string | null | undefined
    result?:
      | Array<{ __typename?: 'Post'; id: string; title: string; content: string; votes: number }>
      | null
      | undefined
  }
}

export type UserInfoFragment = { __typename?: 'User'; id: string; email: string; createdAt: any }

export type SignupUserMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type SignupUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'CreateUserResponse'
    error?: string | null | undefined
    result?: { __typename?: 'User'; id: string; email: string; createdAt: any } | null | undefined
  }
}

export const PostDataFragmentDoc = `
    fragment PostData on Post {
  title
  content
  published
}
    `
export const UserInfoFragmentDoc = `
    fragment UserInfo on User {
  id
  email
  createdAt
}
    `
export const CreatePostDocument = `
    mutation CreatePost($title: String!, $content: String!) {
  createPost(params: {title: $title, content: $content}) {
    result {
      ...PostData
    }
    error
  }
}
    ${PostDataFragmentDoc}`
export const useCreatePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>
) =>
  useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
    (variables?: CreatePostMutationVariables) =>
      codegenClient<CreatePostMutation, CreatePostMutationVariables>(
        CreatePostDocument,
        variables
      )(),
    options
  )
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    result {
      id
      title
      content
      votes
    }
    error
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

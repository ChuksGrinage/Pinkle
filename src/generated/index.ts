/* eslint-disable */
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query'
import { gqlClient } from 'shared/utils'
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

export type Comment = {
  __typename?: 'Comment'
  author: User
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  postId: Scalars['Int']
  updateAt?: Maybe<Scalars['DateTime']>
}

export type Comments = {
  __typename?: 'Comments'
  count: Scalars['Int']
  data?: Maybe<Array<Comment>>
}

export type CreatePostInput = {
  content?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type CreateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MeResponse = {
  __typename?: 'MeResponse'
  error?: Maybe<Scalars['String']>
  me?: Maybe<User>
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: PostResponse
  createUser: UserResponse
  updateUser: UserResponse
}

export type MutationCreatePostArgs = {
  params: CreatePostInput
}

export type MutationCreateUserArgs = {
  params: CreateUserInput
}

export type MutationUpdateUserArgs = {
  params: UpdateUserInput
}

export type Post = {
  __typename?: 'Post'
  author: User
  comments: Comments
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  published: Scalars['Boolean']
  title: Scalars['String']
  updateAt?: Maybe<Scalars['DateTime']>
  votes: Votes
}

export type PostResponse = {
  __typename?: 'PostResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<Post>
}

export type PostsResponse = {
  __typename?: 'PostsResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<Array<Post>>
}

export type Query = {
  __typename?: 'Query'
  me: MeResponse
  postById: PostResponse
  posts: PostsResponse
}

export type QueryPostByIdArgs = {
  params: Scalars['String']
}

export type QueryPostsArgs = {
  params?: Maybe<SearchPostsInput>
}

export type SearchPostsInput = {
  limit?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UpdateUserInput = {
  data: UserUpdateData
  id: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  email: Scalars['String']
  id: Scalars['ID']
  joinDate: Scalars['DateTime']
}

export type UserResponse = {
  __typename?: 'UserResponse'
  error?: Maybe<Scalars['String']>
  result?: Maybe<User>
}

export type UserUpdateData = {
  email?: Maybe<Scalars['String']>
}

export type Votes = {
  __typename?: 'Votes'
  count: Scalars['Int']
  data?: Maybe<Array<User>>
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
      | { __typename?: 'Post'; title: string; content: string; published: boolean }
      | null
      | undefined
  }
}

export type PostsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}>

export type PostsQuery = {
  __typename?: 'Query'
  posts: {
    __typename?: 'PostsResponse'
    error?: string | null | undefined
    result?:
      | Array<{
          __typename?: 'Post'
          id: string
          title: string
          content: string
          votes: { __typename?: 'Votes'; count: number }
          comments: { __typename?: 'Comments'; count: number }
        }>
      | null
      | undefined
  }
}

export type PostByIdQueryVariables = Exact<{
  postId: Scalars['String']
}>

export type PostByIdQuery = {
  __typename?: 'Query'
  postById: {
    __typename?: 'PostResponse'
    error?: string | null | undefined
    result?:
      | {
          __typename?: 'Post'
          id: string
          title: string
          content: string
          published: boolean
          createdAt: any
          updateAt?: any | null | undefined
        }
      | null
      | undefined
  }
}

export type UserInfoFragment = { __typename?: 'User'; id: string; email: string; joinDate: any }

export type SignupUserMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type SignupUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'UserResponse'
    error?: string | null | undefined
    result?: { __typename?: 'User'; id: string; email: string; joinDate: any } | null | undefined
  }
}

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']
  email?: InputMaybe<Scalars['String']>
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser: {
    __typename?: 'UserResponse'
    error?: string | null | undefined
    result?: { __typename?: 'User'; id: string; email: string; joinDate: any } | null | undefined
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
  joinDate
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
      gqlClient<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, variables)(),
    options
  )
export const PostsDocument = `
    query posts($search: String, $limit: Int, $skip: Int) {
  posts(params: {search: $search, limit: $limit, skip: $skip}) {
    error
    result {
      id
      title
      content
      votes {
        count
      }
      comments {
        count
      }
    }
  }
}
    `
export const usePostsQuery = <TData = PostsQuery, TError = unknown>(
  variables?: PostsQueryVariables,
  options?: UseQueryOptions<PostsQuery, TError, TData>
) =>
  useQuery<PostsQuery, TError, TData>(
    ['posts', variables],
    gqlClient<PostsQuery, PostsQueryVariables>(PostsDocument, variables),
    options
  )
export const PostByIdDocument = `
    query postById($postId: String!) {
  postById(params: $postId) {
    error
    result {
      id
      title
      content
      published
      createdAt
      updateAt
    }
  }
}
    `
export const usePostByIdQuery = <TData = PostByIdQuery, TError = unknown>(
  variables: PostByIdQueryVariables,
  options?: UseQueryOptions<PostByIdQuery, TError, TData>
) =>
  useQuery<PostByIdQuery, TError, TData>(
    ['postById', variables],
    gqlClient<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, variables),
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
      gqlClient<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, variables)(),
    options
  )
export const UpdateUserDocument = `
    mutation UpdateUser($id: ID!, $email: String) {
  updateUser(params: {id: $id, data: {email: $email}}) {
    result {
      ...UserInfo
    }
    error
  }
}
    ${UserInfoFragmentDoc}`
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>
) =>
  useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
    (variables?: UpdateUserMutationVariables) =>
      gqlClient<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables)(),
    options
  )

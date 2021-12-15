/* eslint-disable */
import { useQuery, UseQueryOptions } from 'react-query'
import { client } from 'shared/utils'
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
}

export type CreatePostInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type Post = {
  __typename?: 'Post'
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type Query = {
  __typename?: 'Query'
  posts: Array<Maybe<Post>>
}

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllPostsQuery = { __typename?: 'Query' } & {
  posts: Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'title' | 'content'>>>
}

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
    client<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, variables),
    options
  )

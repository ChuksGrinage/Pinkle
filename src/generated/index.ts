/* eslint-disable */
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query'
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
  Date: any
  DateTime: any
  GenericScalar: any
}

export type Comment = {
  __typename?: 'Comment'
  id: Scalars['String']
  body: Scalars['String']
  user: User
  createdAt: Scalars['Date']
  likeCount: Scalars['Int']
  naturalCreatedAt: Scalars['String']
}

export type CommentInput = {
  body: Scalars['String']
}

export type CreatePostInput = {
  title: Scalars['String']
  body: Scalars['String']
  grade?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  ups?: Maybe<Scalars['Int']>
  downs?: Maybe<Scalars['Int']>
  score?: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  updatePost: Post
  deletePost: Scalars['Boolean']
  signupUser: User
  toggleLike: Scalars['Boolean']
  addComment: Comment
  removeComment: Scalars['Boolean']
  updateComment: Comment
  togglePostFavorite: Scalars['Boolean']
  updateUser: User
  verifyToken?: Maybe<VerifyToken>
  refreshToken?: Maybe<RefreshToken>
  tokenAuth?: Maybe<TokenAuth>
}

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput
}

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput
}

export type MutationDeletePostArgs = {
  postId: Scalars['String']
}

export type MutationSignupUserArgs = {
  signupUserInput: SignupUserInput
}

export type MutationToggleLikeArgs = {
  postId: Scalars['Int']
}

export type MutationAddCommentArgs = {
  commentInput?: Maybe<CommentInput>
  postId: Scalars['String']
}

export type MutationRemoveCommentArgs = {
  commentId: Scalars['Int']
}

export type MutationUpdateCommentArgs = {
  commentInput?: Maybe<CommentInput>
}

export type MutationTogglePostFavoriteArgs = {
  postId: Scalars['String']
}

export type MutationUpdateUserArgs = {
  updateUserInput?: Maybe<UpdateUserInput>
}

export type MutationVerifyTokenArgs = {
  token: Scalars['String']
}

export type MutationRefreshTokenArgs = {
  token: Scalars['String']
}

export type MutationTokenAuthArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Post = {
  __typename?: 'Post'
  id: Scalars['ID']
  title: Scalars['String']
  truncatedBody: Scalars['String']
  body: Scalars['String']
  grade?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  updatedAt: Scalars['Date']
  author: User
  favoriteCount: Scalars['Int']
  naturalCreatedAt: Scalars['String']
  commentCount: Scalars['Int']
  allComments?: Maybe<Array<Maybe<Comment>>>
}

export type Query = {
  __typename?: 'Query'
  posts: Array<Maybe<Post>>
  post: Post
  me?: Maybe<User>
}

export type QueryPostArgs = {
  postId: Scalars['String']
}

export type RefreshToken = {
  __typename?: 'RefreshToken'
  token?: Maybe<Scalars['String']>
  refresh_token?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['GenericScalar']>
}

export type RevokeToken = {
  __typename?: 'RevokeToken'
  revoked?: Maybe<Scalars['Int']>
}

export type SignupUserInput = {
  email: Scalars['String']
  password: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  zipCode?: Maybe<Scalars['String']>
  students?: Maybe<Array<Maybe<StudentInput>>>
}

export type Student = {
  __typename?: 'Student'
  teacher?: Maybe<User>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  grade: Scalars['String']
}

export type StudentInput = {
  dateOfBirth?: Maybe<Scalars['DateTime']>
  grade: Scalars['String']
}

export type TokenAuth = {
  __typename?: 'TokenAuth'
  token?: Maybe<Scalars['String']>
  refresh_token?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['GenericScalar']>
  user?: Maybe<User>
}

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>
  truncatedBody?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  grade?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  zipCode?: Maybe<Scalars['String']>
  students?: Maybe<Array<Maybe<StudentInput>>>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email: Scalars['String']
  dateJoined: Scalars['DateTime']
  dateOfBirth?: Maybe<Scalars['DateTime']>
  zipCode?: Maybe<Scalars['String']>
  students?: Maybe<Array<Maybe<Student>>>
  posts?: Maybe<Array<Maybe<Post>>>
}

export type VerifyToken = {
  __typename?: 'VerifyToken'
  payload?: Maybe<Scalars['GenericScalar']>
}

export type AddCommentMutationVariables = Exact<{
  body: Scalars['String']
  postId: Scalars['String']
}>

export type AddCommentMutation = { __typename?: 'Mutation' } & {
  addComment: { __typename?: 'Comment' } & Pick<Comment, 'id' | 'body' | 'createdAt'> & {
      user: { __typename?: 'User' } & UserInfoFragment
    }
}

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']
  body: Scalars['String']
  grade?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  ups?: Maybe<Scalars['Int']>
  downs?: Maybe<Scalars['Int']>
  score?: Maybe<Scalars['Int']>
}>

export type CreatePostMutation = { __typename?: 'Mutation' } & {
  createPost: { __typename?: 'Post' } & Pick<
    Post,
    'id' | 'title' | 'body' | 'truncatedBody' | 'createdAt' | 'grade'
  > & { author: { __typename?: 'User' } & UserInfoFragment }
}

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllPostsQuery = { __typename?: 'Query' } & {
  posts: Array<
    Maybe<
      { __typename?: 'Post' } & Pick<
        Post,
        | 'id'
        | 'title'
        | 'body'
        | 'truncatedBody'
        | 'grade'
        | 'createdAt'
        | 'favoriteCount'
        | 'naturalCreatedAt'
        | 'commentCount'
      > & { author: { __typename?: 'User' } & UserInfoFragment }
    >
  >
}

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['String']
}>

export type GetPostByIdQuery = { __typename?: 'Query' } & {
  post: { __typename?: 'Post' } & Pick<
    Post,
    | 'id'
    | 'title'
    | 'body'
    | 'truncatedBody'
    | 'favoriteCount'
    | 'naturalCreatedAt'
    | 'commentCount'
    | 'grade'
    | 'createdAt'
  > & {
      allComments?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Comment' } & Pick<
              Comment,
              'id' | 'body' | 'naturalCreatedAt' | 'likeCount'
            > & { user: { __typename?: 'User' } & UserInfoFragment }
          >
        >
      >
      author: { __typename?: 'User' } & UserInfoFragment
    }
}

export type UserInfoFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'email' | 'firstName' | 'lastName' | 'dateOfBirth' | 'dateJoined' | 'zipCode'
>

export type SignupUserMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  zipCode?: Maybe<Scalars['String']>
  students?: Maybe<Array<Maybe<StudentInput>> | Maybe<StudentInput>>
}>

export type SignupUserMutation = { __typename?: 'Mutation' } & {
  signupUser: { __typename?: 'User' } & UserInfoFragment
}

export type TokenAuthMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type TokenAuthMutation = { __typename?: 'Mutation' } & {
  tokenAuth?: Maybe<
    { __typename?: 'TokenAuth' } & Pick<TokenAuth, 'token'> & {
        user?: Maybe<{ __typename?: 'User' } & UserInfoFragment>
      }
  >
}

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'User' } & UserInfoFragment>
}

export const UserInfoFragmentDoc = `
    fragment UserInfo on User {
  id
  email
  firstName
  lastName
  dateOfBirth
  dateJoined
  zipCode
}
    `
export const AddCommentDocument = `
    mutation AddComment($body: String!, $postId: String!) {
  addComment(commentInput: {body: $body}, postId: $postId) {
    id
    body
    createdAt
    user {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useAddCommentMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<AddCommentMutation, TError, AddCommentMutationVariables, TContext>
) =>
  useMutation<AddCommentMutation, TError, AddCommentMutationVariables, TContext>(
    (variables?: AddCommentMutationVariables) =>
      client<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, variables)(),
    options
  )
export const CreatePostDocument = `
    mutation CreatePost($title: String!, $body: String!, $grade: String, $zipCode: String, $ups: Int, $downs: Int, $score: Int) {
  createPost(
    createPostInput: {title: $title, body: $body, grade: $grade, zipCode: $zipCode, ups: $ups, downs: $downs, score: $score}
  ) {
    id
    title
    body
    truncatedBody
    createdAt
    grade
    author {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useCreatePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>
) =>
  useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
    (variables?: CreatePostMutationVariables) =>
      client<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, variables)(),
    options
  )
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    body
    truncatedBody
    grade
    createdAt
    favoriteCount
    naturalCreatedAt
    commentCount
    author {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useGetAllPostsQuery = <TData = GetAllPostsQuery, TError = unknown>(
  variables?: GetAllPostsQueryVariables,
  options?: UseQueryOptions<GetAllPostsQuery, TError, TData>
) =>
  useQuery<GetAllPostsQuery, TError, TData>(
    ['GetAllPosts', variables],
    client<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, variables),
    options
  )
export const GetPostByIdDocument = `
    query GetPostById($postId: String!) {
  post(postId: $postId) {
    id
    title
    body
    truncatedBody
    favoriteCount
    naturalCreatedAt
    commentCount
    allComments {
      id
      body
      naturalCreatedAt
      user {
        ...UserInfo
      }
      likeCount
    }
    grade
    createdAt
    author {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useGetPostByIdQuery = <TData = GetPostByIdQuery, TError = unknown>(
  variables: GetPostByIdQueryVariables,
  options?: UseQueryOptions<GetPostByIdQuery, TError, TData>
) =>
  useQuery<GetPostByIdQuery, TError, TData>(
    ['GetPostById', variables],
    client<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, variables),
    options
  )
export const SignupUserDocument = `
    mutation SignupUser($email: String!, $password: String!, $firstName: String, $lastName: String, $dateOfBirth: DateTime, $zipCode: String, $students: [StudentInput]) {
  signupUser(
    signupUserInput: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, zipCode: $zipCode, students: $students}
  ) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`
export const useSignupUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SignupUserMutation, TError, SignupUserMutationVariables, TContext>
) =>
  useMutation<SignupUserMutation, TError, SignupUserMutationVariables, TContext>(
    (variables?: SignupUserMutationVariables) =>
      client<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, variables)(),
    options
  )
export const TokenAuthDocument = `
    mutation TokenAuth($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    token
    user {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useTokenAuthMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<TokenAuthMutation, TError, TokenAuthMutationVariables, TContext>
) =>
  useMutation<TokenAuthMutation, TError, TokenAuthMutationVariables, TContext>(
    (variables?: TokenAuthMutationVariables) =>
      client<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, variables)(),
    options
  )
export const CurrentUserDocument = `
    query CurrentUser {
  me {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`
export const useCurrentUserQuery = <TData = CurrentUserQuery, TError = unknown>(
  variables?: CurrentUserQueryVariables,
  options?: UseQueryOptions<CurrentUserQuery, TError, TData>
) =>
  useQuery<CurrentUserQuery, TError, TData>(
    ['CurrentUser', variables],
    client<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
    options
  )

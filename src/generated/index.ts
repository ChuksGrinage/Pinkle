/* eslint-disable */
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { client } from "shared/utils";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"];
  user: User;
  createdAt: Scalars["Date"];
};

export type CommentInput = {
  body: Scalars["String"];
};

export type CreatePostInput = {
  title: Scalars["String"];
  body: Scalars["String"];
  grade?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  ups?: Maybe<Scalars["Int"]>;
  downs?: Maybe<Scalars["Int"]>;
  score?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  updatePost: Post;
  deletePost: Scalars["Boolean"];
  signupUser: User;
  toggleLike: Scalars["Boolean"];
  addComment: Comment;
  removeComment: Scalars["Boolean"];
  updateComment: Comment;
  togglePostFavorite: Scalars["Boolean"];
  updateUser: User;
  verifyToken?: Maybe<VerifyToken>;
  refreshToken?: Maybe<RefreshToken>;
  tokenAuth?: Maybe<TokenAuth>;
};

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type MutationDeletePostArgs = {
  postId: Scalars["String"];
};

export type MutationSignupUserArgs = {
  signupUserInput: SignupUserInput;
};

export type MutationToggleLikeArgs = {
  postId: Scalars["Int"];
};

export type MutationAddCommentArgs = {
  commentInput?: Maybe<CommentInput>;
  postId: Scalars["String"];
};

export type MutationRemoveCommentArgs = {
  commentId: Scalars["Int"];
};

export type MutationUpdateCommentArgs = {
  commentInput?: Maybe<CommentInput>;
};

export type MutationTogglePostFavoriteArgs = {
  postId: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  updateUserInput?: Maybe<UpdateUserInput>;
};

export type MutationVerifyTokenArgs = {
  token: Scalars["String"];
};

export type MutationRefreshTokenArgs = {
  token: Scalars["String"];
};

export type MutationTokenAuthArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"];
  title: Scalars["String"];
  truncatedBody: Scalars["String"];
  body: Scalars["String"];
  grade?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
  author: User;
};

export type PostResult = {
  __typename?: "PostResult";
  post: Post;
  comments?: Maybe<Array<Comment>>;
};

export type Query = {
  __typename?: "Query";
  posts: Array<Maybe<Post>>;
  post: Post;
  comments: Array<Maybe<Comment>>;
  me: User;
};

export type QueryPostArgs = {
  postId: Scalars["String"];
};

export type QueryCommentsArgs = {
  postId: Scalars["String"];
};

export type RefreshToken = {
  __typename?: "RefreshToken";
  token?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["GenericScalar"]>;
};

export type RevokeToken = {
  __typename?: "RevokeToken";
  revoked?: Maybe<Scalars["Int"]>;
};

export type SignupUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  zipCode?: Maybe<Scalars["String"]>;
  students?: Maybe<Array<Maybe<StudentInput>>>;
};

export type Student = {
  __typename?: "Student";
  teacher?: Maybe<User>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  grade: Scalars["String"];
};

export type StudentInput = {
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  grade: Scalars["String"];
};

export type TokenAuth = {
  __typename?: "TokenAuth";
  token?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["GenericScalar"]>;
  user?: Maybe<User>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars["String"]>;
  truncatedBody?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  grade?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  zipCode?: Maybe<Scalars["String"]>;
  students?: Maybe<Array<Maybe<StudentInput>>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  dateJoined: Scalars["DateTime"];
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  zipCode?: Maybe<Scalars["String"]>;
  students?: Maybe<Array<Maybe<Student>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type VerifyToken = {
  __typename?: "VerifyToken";
  payload?: Maybe<Scalars["GenericScalar"]>;
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars["String"];
  body: Scalars["String"];
  grade?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  ups?: Maybe<Scalars["Int"]>;
  downs?: Maybe<Scalars["Int"]>;
  score?: Maybe<Scalars["Int"]>;
}>;

export type CreatePostMutation = { __typename?: "Mutation" } & {
  createPost: { __typename?: "Post" } & Pick<
    Post,
    "id" | "title" | "body" | "truncatedBody" | "createdAt" | "grade"
  > & { author: { __typename?: "User" } & UserCredentialsFragment };
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = { __typename?: "Query" } & {
  posts: Array<
    Maybe<
      { __typename?: "Post" } & Pick<
        Post,
        "id" | "title" | "body" | "truncatedBody" | "grade" | "createdAt"
      > & { author: { __typename?: "User" } & UserCredentialsFragment }
    >
  >;
};

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars["String"];
}>;

export type GetPostByIdQuery = { __typename?: "Query" } & {
  post: { __typename?: "Post" } & Pick<
    Post,
    "id" | "title" | "body" | "truncatedBody" | "grade" | "createdAt"
  > & { author: { __typename?: "User" } & UserCredentialsFragment };
};

export type UserCredentialsFragment = { __typename?: "User" } & Pick<
  User,
  | "id"
  | "email"
  | "firstName"
  | "lastName"
  | "dateOfBirth"
  | "dateJoined"
  | "zipCode"
>;

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  tokenAuth?: Maybe<
    { __typename?: "TokenAuth" } & Pick<TokenAuth, "token"> & {
        user?: Maybe<{ __typename?: "User" } & UserCredentialsFragment>;
      }
  >;
};

export type SignupMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  zipCode?: Maybe<Scalars["String"]>;
  students?: Maybe<Array<Maybe<StudentInput>> | Maybe<StudentInput>>;
}>;

export type SignupMutation = { __typename?: "Mutation" } & {
  signupUser: { __typename?: "User" } & UserCredentialsFragment;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: "Query" } & {
  me: { __typename?: "User" } & UserCredentialsFragment;
};

export const UserCredentialsFragmentDoc = `
    fragment UserCredentials on User {
  id
  email
  firstName
  lastName
  dateOfBirth
  dateJoined
  zipCode
}
    `;
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
      ...UserCredentials
    }
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useCreatePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreatePostMutation,
    TError,
    CreatePostMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreatePostMutation,
    TError,
    CreatePostMutationVariables,
    TContext
  >(
    (variables?: CreatePostMutationVariables) =>
      client<CreatePostMutation, CreatePostMutationVariables>(
        CreatePostDocument,
        variables
      )(),
    options
  );
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    body
    truncatedBody
    grade
    createdAt
    author {
      ...UserCredentials
    }
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useGetAllPostsQuery = <TData = GetAllPostsQuery, TError = unknown>(
  variables?: GetAllPostsQueryVariables,
  options?: UseQueryOptions<GetAllPostsQuery, TError, TData>
) =>
  useQuery<GetAllPostsQuery, TError, TData>(
    ["GetAllPosts", variables],
    client<GetAllPostsQuery, GetAllPostsQueryVariables>(
      GetAllPostsDocument,
      variables
    ),
    options
  );
export const GetPostByIdDocument = `
    query GetPostById($postId: String!) {
  post(postId: $postId) {
    id
    title
    body
    truncatedBody
    grade
    createdAt
    author {
      ...UserCredentials
    }
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useGetPostByIdQuery = <TData = GetPostByIdQuery, TError = unknown>(
  variables: GetPostByIdQueryVariables,
  options?: UseQueryOptions<GetPostByIdQuery, TError, TData>
) =>
  useQuery<GetPostByIdQuery, TError, TData>(
    ["GetPostById", variables],
    client<GetPostByIdQuery, GetPostByIdQueryVariables>(
      GetPostByIdDocument,
      variables
    ),
    options
  );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    token
    user {
      ...UserCredentials
    }
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    (variables?: LoginMutationVariables) =>
      client<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
    options
  );
export const SignupDocument = `
    mutation Signup($email: String!, $password: String!, $firstName: String, $lastName: String, $dateOfBirth: DateTime, $zipCode: String, $students: [StudentInput]) {
  signupUser(
    signupUserInput: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, zipCode: $zipCode, students: $students}
  ) {
    ...UserCredentials
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useSignupMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SignupMutation,
    TError,
    SignupMutationVariables,
    TContext
  >
) =>
  useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
    (variables?: SignupMutationVariables) =>
      client<SignupMutation, SignupMutationVariables>(
        SignupDocument,
        variables
      )(),
    options
  );
export const CurrentUserDocument = `
    query currentUser {
  me {
    ...UserCredentials
  }
}
    ${UserCredentialsFragmentDoc}`;
export const useCurrentUserQuery = <TData = CurrentUserQuery, TError = unknown>(
  variables?: CurrentUserQueryVariables,
  options?: UseQueryOptions<CurrentUserQuery, TError, TData>
) =>
  useQuery<CurrentUserQuery, TError, TData>(
    ["currentUser", variables],
    client<CurrentUserQuery, CurrentUserQueryVariables>(
      CurrentUserDocument,
      variables
    ),
    options
  );

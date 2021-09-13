/* eslint-disable */
import {
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
} from "react-query";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:8000/graphql/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "TOKEN-HERE",
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
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
  verifyToken?: Maybe<VerifyToken>;
  refreshToken?: Maybe<RefreshToken>;
  tokenAuth?: Maybe<TokenAuth>;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type MutationDeletePostArgs = {
  postId: Scalars["String"];
};

export type MutationSignupUserArgs = {
  input: SignupUserInput;
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
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
  ups: Scalars["Int"];
  downs: Scalars["Int"];
  score: Scalars["Int"];
  author: User;
};

export type Query = {
  __typename?: "Query";
  posts: Array<Maybe<Post>>;
  post: Post;
};

export type QueryPostArgs = {
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
};

export type VerifyToken = {
  __typename?: "VerifyToken";
  payload?: Maybe<Scalars["GenericScalar"]>;
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
    fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(
      GetAllPostsDocument,
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
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables
      )(),
    options
  );
export const SignupDocument = `
    mutation Signup($email: String!, $password: String!, $firstName: String, $lastName: String, $dateOfBirth: DateTime, $zipCode: String, $students: [StudentInput]) {
  signupUser(
    input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, zipCode: $zipCode, students: $students}
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
      fetcher<SignupMutation, SignupMutationVariables>(
        SignupDocument,
        variables
      )(),
    options
  );

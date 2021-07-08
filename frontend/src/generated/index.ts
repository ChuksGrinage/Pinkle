import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { localStorageKey } from 'shared/contstants';
import { localStorage } from 'utils';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
	return async (): Promise<TData> => {
		const res = await fetch("http://localhost:8000/graphql/", {
			method: "POST",
			credentials: "include",
			headers: { "Content-Type": "application/json", "authorization": localStorage(localStorageKey) ? `JWT ${localStorage(localStorageKey)}` : undefined },
			body: JSON.stringify({ query, variables }),
		});

		const json = await res.json();

		if (json.errors) {
			const { message } = json.errors[0];

			throw new Error(message);
		}

		return json.data;
	}
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



export type FieldError = {
	__typename?: 'FieldError';
	field?: Maybe<Scalars['String']>;
	message?: Maybe<Scalars['String']>;
};


export type Mutation = {
	__typename?: 'Mutation';
	createPost: Post;
	updatePost: Post;
	signupUser: User;
	loginUser: TokenAuth;
	verifyToken?: Maybe<VerifyToken>;
	refreshToken?: Maybe<RefreshToken>;
};


export type MutationCreatePostArgs = {
	title: Scalars['String'];
	content: Scalars['String'];
};


export type MutationUpdatePostArgs = {
	id: Scalars['String'];
	title: Scalars['String'];
	content: Scalars['String'];
};


export type MutationSignupUserArgs = {
	username: Scalars['String'];
	firstName?: Maybe<Scalars['String']>;
	lastName?: Maybe<Scalars['String']>;
	email: Scalars['String'];
	password: Scalars['String'];
};


export type MutationLoginUserArgs = {
	username: Scalars['String'];
	password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
	token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
	token: Scalars['String'];
};

export type Post = {
	__typename?: 'Post';
	id: Scalars['ID'];
	title: Scalars['String'];
	content: Scalars['String'];
	createdAt: Scalars['Date'];
	author: User;
};

export type Query = {
	__typename?: 'Query';
	posts: Array<Maybe<Post>>;
	post: Post;
	users: Array<Maybe<User>>;
	me?: Maybe<User>;
};


export type QueryPostArgs = {
	postId: Scalars['String'];
};

export type RefreshToken = {
	__typename?: 'RefreshToken';
	token?: Maybe<Scalars['String']>;
	refresh_token?: Maybe<Scalars['String']>;
	payload?: Maybe<Scalars['GenericScalar']>;
};

export type RevokeToken = {
	__typename?: 'RevokeToken';
	revoked?: Maybe<Scalars['Int']>;
};

export type TokenAuth = {
	__typename?: 'TokenAuth';
	token?: Maybe<Scalars['String']>;
	refresh_token?: Maybe<Scalars['String']>;
	payload?: Maybe<Scalars['GenericScalar']>;
	user?: Maybe<User>;
};

export type User = {
	__typename?: 'User';
	id: Scalars['ID'];
	username: Scalars['String'];
	firstName?: Maybe<Scalars['String']>;
	lastName?: Maybe<Scalars['String']>;
	email: Scalars['String'];
	password: Scalars['String'];
	dateJoined: Scalars['DateTime'];
};

export type VerifyToken = {
	__typename?: 'VerifyToken';
	payload?: Maybe<Scalars['GenericScalar']>;
};

export type CreatePostMutationVariables = Exact<{
	title: Scalars['String'];
	content: Scalars['String'];
}>;


export type CreatePostMutation = (
	{ __typename?: 'Mutation' }
	& {
		createPost: (
			{ __typename?: 'Post' }
			& Pick<Post, 'id' | 'title' | 'createdAt' | 'content'>
		)
	}
);

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = (
	{ __typename?: 'Query' }
	& {
		posts: Array<Maybe<(
			{ __typename?: 'Post' }
			& Pick<Post, 'id' | 'title' | 'content' | 'createdAt'>
			& {
				author: (
					{ __typename?: 'User' }
					& Pick<User, 'username'>
				)
			}
		)>>
	}
);

export type GetPostByIdQueryVariables = Exact<{
	postId: Scalars['String'];
}>;


export type GetPostByIdQuery = (
	{ __typename?: 'Query' }
	& {
		post: (
			{ __typename?: 'Post' }
			& Pick<Post, 'id' | 'title' | 'content' | 'createdAt'>
			& {
				author: (
					{ __typename?: 'User' }
					& Pick<User, 'username'>
				)
			}
		)
	}
);

export type LoginMutationVariables = Exact<{
	username: Scalars['String'];
	password: Scalars['String'];
}>;


export type LoginMutation = (
	{ __typename?: 'Mutation' }
	& {
		loginUser: (
			{ __typename?: 'TokenAuth' }
			& Pick<TokenAuth, 'token'>
			& {
				user?: Maybe<(
					{ __typename?: 'User' }
					& Pick<User, 'id' | 'email' | 'dateJoined'>
				)>
			}
		)
	}
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
	{ __typename?: 'Query' }
	& {
		me?: Maybe<(
			{ __typename?: 'User' }
			& Pick<User, 'id' | 'email' | 'username' | 'firstName' | 'lastName' | 'password' | 'dateJoined'>
		)>
	}
);

export type SignupMutationVariables = Exact<{
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	username: Scalars['String'];
	email: Scalars['String'];
	password: Scalars['String'];
}>;


export type SignupMutation = (
	{ __typename?: 'Mutation' }
	& {
		signupUser: (
			{ __typename?: 'User' }
			& Pick<User, 'id'>
		)
	}
);


export const CreatePostDocument = `
    mutation CreatePost($title: String!, $content: String!) {
  createPost(title: $title, content: $content) {
    id
    title
    createdAt
    content
  }
}
    `;
export const useCreatePostMutation = <
	TError = unknown,
	TContext = unknown
>(options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>) =>
	useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
		(variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, variables)(),
		options
	);
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    content
    createdAt
    author {
      username
    }
  }
}
    `;
export const useGetAllPostsQuery = <
	TData = GetAllPostsQuery,
	TError = unknown
>(
	variables?: GetAllPostsQueryVariables,
	options?: UseQueryOptions<GetAllPostsQuery, TError, TData>
) =>
	useQuery<GetAllPostsQuery, TError, TData>(
		['GetAllPosts', variables],
		fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, variables),
		options
	);
export const GetPostByIdDocument = `
    query GetPostById($postId: String!) {
  post(postId: $postId) {
    id
    title
    content
    createdAt
    author {
      username
    }
  }
}
    `;
export const useGetPostByIdQuery = <
	TData = GetPostByIdQuery,
	TError = unknown
>(
	variables: GetPostByIdQueryVariables,
	options?: UseQueryOptions<GetPostByIdQuery, TError, TData>
) =>
	useQuery<GetPostByIdQuery, TError, TData>(
		['GetPostById', variables],
		fetcher<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, variables),
		options
	);
export const LoginDocument = `
    mutation Login($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    token
    user {
      id
      email
      dateJoined
    }
  }
}
    `;
export const useLoginMutation = <
	TError = unknown,
	TContext = unknown
>(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
	useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
		(variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
		options
	);
export const MeDocument = `
    query Me {
  me {
    id
    email
    username
    firstName
    lastName
    password
    dateJoined
  }
}
    `;
export const useMeQuery = <
	TData = MeQuery,
	TError = unknown
>(
	variables?: MeQueryVariables,
	options?: UseQueryOptions<MeQuery, TError, TData>
) =>
	useQuery<MeQuery, TError, TData>(
		['Me', variables],
		fetcher<MeQuery, MeQueryVariables>(MeDocument, variables),
		options
	);
export const SignupDocument = `
    mutation Signup($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
  signupUser(
    firstName: $firstName
    lastName: $lastName
    username: $username
    email: $email
    password: $password
  ) {
    id
  }
}
    `;
export const useSignupMutation = <
	TError = unknown,
	TContext = unknown
>(options?: UseMutationOptions<SignupMutation, TError, SignupMutationVariables, TContext>) =>
	useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
		(variables?: SignupMutationVariables) => fetcher<SignupMutation, SignupMutationVariables>(SignupDocument, variables)(),
		options
	);
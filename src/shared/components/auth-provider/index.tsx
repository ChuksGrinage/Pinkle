import React, { useState, useContext, createContext } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUserQuery, useLoginMutation } from 'generated'
const REDIRECT_KEY = 'REDIRECT_KEY'

const authContext = createContext(null)
function setRedirect(redirect: string) {
	window.sessionStorage.setItem(REDIRECT_KEY, redirect)
}

function getRedirect(): string | null {
	return window.sessionStorage.getItem(REDIRECT_KEY)
}

function clearRedirect() {
	return window.sessionStorage.removeItem(REDIRECT_KEY)
}
const AUTH_TOKEN = 'AUTH_TOKEN'
function AuthProvider({ children }) {
	// const { data: { me } = {} } = useCurrentUserQuery()
	const { push, query } = useRouter()
	const {
		mutate,
		isError,
		isSuccess,
		data: { tokenAuth } = {},
		isLoading,
	} = useLoginMutation()

	const login = userCredentials => {
		mutate(userCredentials, {
			onSuccess: ({ tokenAuth }) => {
				localStorage.setItem(AUTH_TOKEN, tokenAuth.token)
				if (typeof query.next === 'string') {
					push(query.next)
				} else {
					// worked
					push('/')
				}
			},
			onError: () => {
				localStorage.removeItem(AUTH_TOKEN)
				push('/login')
			},
		})
	}

	const logout = () => {
		localStorage.removeItem(AUTH_TOKEN)
		push('/login')
	}

	return (
		<authContext.Provider
			value={{
				login,
				logout,
				isError,
				isSuccess,
				user: tokenAuth?.user,
				isLoading,
				setRedirect,
				getRedirect,
				clearRedirect,
			}}
		>
			{children}
		</authContext.Provider>
	)
}

const useAuth = () => {
	const context = useContext(authContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within AuthProvider')
	}
	return context
}
export { useAuth, AuthProvider }

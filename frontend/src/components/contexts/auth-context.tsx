import React from 'react'
import { useLoginMutation, useSignupMutation } from 'generated'
import { localStorage } from 'utils'
import { localStorageKey } from 'shared/contstants'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'

const AuthContext = React.createContext(undefined)
function AuthProvider({ children }) {
	const queryCache = useQueryClient()
	const router = useRouter()

	const { mutate: login, reset: resetLogin } = useLoginMutation({
		onSuccess: data => {
			localStorage(localStorageKey, data.loginUser.token)
			if (typeof router.query.next === 'string') {
				router.push(router.query.next)
			} else {
				// worked
				router.push('/')
			}
		},
	})

	const { mutate: signup } = useSignupMutation({
		onSuccess: () => router.push('/login'),
	})

	const logout = () => {
		console.log('logging out...')
		window.localStorage.removeItem(localStorageKey)
		queryCache.invalidateQueries('Me')
		resetLogin()
	}

	return (
		<AuthContext.Provider value={{ login, logout, signup }}>
			{children}
		</AuthContext.Provider>
	)
}

// function useAuth() {
// 	const context = React.useContext(AuthContext)
// 	if (context === undefined) {
// 		throw new Error(`useAuth must be used within a AuthProvider`)
// 	}
// 	return context
// }

// export { AuthProvider, useAuth }

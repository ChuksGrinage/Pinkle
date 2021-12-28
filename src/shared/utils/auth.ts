import { useRouter } from "next/router"
import { useMutation, useQuery } from "react-query"
import { client } from "."
import { UserCredentials } from '../types'


function useSession({
	required = true,
	redirectTo = "/login",
	queryConfig = {} as any,
} = {}) {
	const router = useRouter()
	const { mutate: silentRefresh } = useMutation(() => client('refresh', {
		credentials: 'include',
		method: 'POST'
	}), {
		onError: () => router.push('/login')
	})
	const query = useQuery(["session"], () => client('me', { credentials: 'include' }), {
		...queryConfig,
		retry: false,
		onSettled(data, error) {
			console.log({ data, error })
			if (queryConfig.onSettled) queryConfig.onSettled(data, error)
			// TODO: Need to figure something out if the refresh fails
			if (error) {
				console.log('refreshing')
				return silentRefresh()
			}
			if (data || !required) return
			router.push(redirectTo)
		},
	})
	return [query.data, query.status === "loading"]
}



const useAuth = () => {
	const router = useRouter()
	const { mutate: logout } = useMutation(() => client('logout', { credentials: 'include', method: 'DELETE' }), {
		onSettled: () => router.push('/login')
	})
	const { mutate: getToken, error } = useMutation(userCredentials => client('login', {
		credentials: 'include',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: userCredentials
	}), {
		onSuccess: () => {
			router.push('/')
		},
		onError: () => {
			if (router.pathname !== '/login') router.push('/login')
			logout()
		}
	})


	const login = ({ email, password }: UserCredentials) => {
		const formBody = new FormData()
		formBody.append("username", email)
		formBody.append("password", password)
		const data = new URLSearchParams(formBody as any)
		// TODO: getToken should not have variables as type void
		// @ts-ignore
		return getToken(data)
	}

	return { login, logout, error }
}

export { useAuth, useSession }
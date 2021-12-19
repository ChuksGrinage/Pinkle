import { useRouter } from "next/router"
import { useMutation, useQuery } from "react-query"
import { client } from "."


function useSession({
	required,
	redirectTo = "/login",
	queryConfig = {},
} = {}) {
	const router = useRouter()
	const { mutate: silentRefresh } = useMutation(() => client('/refresh'), {
		onError: () => router.push('/login')
	})
	const query = useQuery(["session"], () => client('/me', { method: 'GET' }), {
		...queryConfig,
		retry: false,
		onSettled(data, error) {
			console.log(data, error)
			if (queryConfig.onSettled) queryConfig.onSettled(data, error)
			// TODO: Need to figure something out if the refresh fails
			if (error) return silentRefresh()
			if (data || !required) return
			router.push(redirectTo)
		},
	})
	return [query.data, query.status === "loading"]
}



const useAuth = () => {
	const router = useRouter()
	const { mutate: getToken, error } = useMutation(userCredentials => client('/login', {
		method: 'POST',
		credentials: "include",
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: userCredentials
	}))
	const { mutate: logout } = useMutation(() => client('/logout', { method: 'DELETE' }), {
		onSettled: () => router.push('/login')
	})

	const login = (userCredentials: { email: string, password: string }) => {
		// TODO: WTF is going on here; why do I need to do all of this to get it to work?!!
		const formBody = new FormData()
		formBody.set("username", userCredentials.email)
		formBody.set("password", userCredentials.password)
		const data = new URLSearchParams(formBody)
		getToken(data, {
			onSuccess: () => {
				router.push('/')
			},
			onError: () => {
				if (router.pathname !== '/login') router.push('login')
			}
		})
	}

	return { login, logout, error }
}

export { useAuth, useSession }